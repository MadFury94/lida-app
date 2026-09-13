import { test, expect } from '@playwright/test'
import { createHmac, randomUUID } from 'node:crypto'
import { blankFields, contentTypes } from '../../shared/content-schema.js'

const backend = 'http://127.0.0.1:8797'
const frontend = 'http://127.0.0.1:3004'
function token() {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url')
  const payload = Buffer.from(JSON.stringify({ username: 'content-editor', role: 'admin', exp: Math.floor(Date.now() / 1000) + 3600 })).toString('base64url')
  // Match the existing Worker's base64 signature format.
  return `${header}.${payload}.${createHmac('sha256', 'local-content-integration-test-only').update(`${header}.${payload}`).digest('base64').replace(/=/g, '')}`
}
const auth = () => ({ Authorization: `Bearer ${token()}` })
const unique = () => `test-${randomUUID()}`
async function publicData(request) { const res = await request.get(`${backend}/api/site-data`); expect(res.ok()).toBeTruthy(); return res.json() }
async function create(request, kind, overrides = {}) {
  const slug = unique()
  const data = { ...blankFields(contentTypes[kind].fields), slug, status: 'draft', sortOrder: 0, ...overrides }
  const res = await request.post(`${backend}/api/admin/content/${kind}`, { headers: auth(), data })
  expect(res.status(), await res.text()).toBe(201)
  return (await res.json()).item
}
async function remove(request, kind, item) {
  const res = await request.delete(`${backend}/api/admin/content/${kind}/${item.id}?version=${item.version}`, { headers: auth() })
  expect(res.ok()).toBeTruthy()
}

test('admin creates, edits, publishes and deletes a blog visible on the real frontend', async ({ page, request, context }) => {
  const title = `Blog ${unique()}`
  const slug = title.toLowerCase().replace(/ /g, '-')
  await context.addCookies([{ name: 'admin-token', value: token(), domain: '127.0.0.1', path: '/' }])
  await page.goto('/blogs')
  await page.getByRole('button', { name: 'Add blog post' }).click()
  const dialog = page.getByRole('dialog')
  await dialog.getByLabel('Title', { exact: true }).fill(title)
  await dialog.getByLabel('Category', { exact: true }).fill('Company news')
  await dialog.getByLabel('Author', { exact: true }).fill('Lida editor')
  await dialog.getByLabel('Cover image', { exact: true }).fill('/assets/img/home-1/news-01.jpg')
  await dialog.getByLabel('Article body', { exact: true }).fill('A new article created through the admin.\n\nThis is its second paragraph.')
  await dialog.getByRole('button', { name: 'Save draft' }).click()
  await expect(page.getByRole('status')).toContainText('Draft saved')
  expect((await publicData(request)).insights.some(item => item.slug === slug)).toBe(false)
  await page.getByRole('button', { name: `Edit ${title}`, exact: true }).click()
  await dialog.getByLabel('Status', { exact: true }).selectOption('published')
  await dialog.getByRole('button', { name: 'Save and publish' }).click()
  await expect(page.getByRole('status')).toContainText('published')
  const publicPage = await context.newPage()
  await publicPage.goto(`${frontend}/insights/${slug}`)
  await expect(publicPage.getByRole('heading', { name: title, exact: true })).toBeVisible()
  await expect(publicPage.getByText('This is its second paragraph.', { exact: true })).toBeVisible()
  await page.getByRole('button', { name: `Edit ${title}`, exact: true }).click()
  await dialog.getByLabel('Article body', { exact: true }).fill('Updated through the admin and persisted in D1.')
  await dialog.getByRole('button', { name: 'Save and publish' }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await publicPage.reload()
  await expect(publicPage.getByText('Updated through the admin and persisted in D1.', { exact: true })).toBeVisible()
  page.once('dialog', dialog => dialog.accept())
  await page.getByRole('button', { name: `Delete ${title}`, exact: true }).click()
  await expect(page.getByRole('status')).toContainText('deleted')
  await publicPage.reload()
  await expect(publicPage.getByRole('heading', { name: /This Page Could Not Be Found/ })).toBeVisible()
})

for (const kind of ['team', 'projects', 'services']) {
  test(`${kind}: persisted changes reach listing and detail pages, drafts disappear`, async ({ page, request }) => {
    const name = `Content ${unique()}`
    const base = kind === 'team' ? { name, role: 'Designer', image: '/assets/img/home-1/news-01.jpg', bio: 'A new team biography.' }
      : kind === 'projects' ? { client: name, thumb: '/assets/img/home-1/project-01.jpg', image: '/assets/img/home-1/project-01.jpg', challenge: 'A unique project challenge.' }
      : { title: name, shortTitle: name, summary: 'A new service summary.', detailImage: '/assets/img/home-1/news-01.jpg', includes: ['A new deliverable'] }
    let item = await create(request, kind, { ...base, status: 'published' })
    try {
      await page.goto(`${frontend}${contentTypes[kind].publicPath}`)
      await expect(page.locator('#preloader')).toHaveCount(0)
      if (kind === 'team') await page.getByRole('img', { name, exact: true }).first().hover()
      await expect(page.getByRole('link', { name, exact: true }).first()).toBeVisible()
      await page.goto(`${frontend}${contentTypes[kind].publicPath}/${item.slug}`)
      await expect(page.getByRole('heading', { name, exact: true }).first()).toBeVisible()
      if (kind === 'projects') await expect(page.getByText('A unique project challenge.', { exact: true })).toBeVisible()
      const res = await request.put(`${backend}/api/admin/content/${kind}/${item.id}`, { headers: auth(), data: { ...item, status: 'draft' } })
      expect(res.ok()).toBeTruthy(); item = (await res.json()).item
      await page.reload()
      await expect(page.getByRole('heading', { name: /This Page Could Not Be Found/ })).toBeVisible()
    } finally { await remove(request, kind, item) }
  })
}

test('backend rejects unauthenticated writes, invalid data, duplicate slugs, and stale updates', async ({ request }) => {
  expect((await request.post(`${backend}/api/admin/content/team`, { data: {} })).status()).toBe(401)
  expect((await request.get(`${backend}/api/admin/content/team`)).status()).toBe(401)
  expect((await request.post(`${backend}/api/admin/content/team`, { headers: auth(), data: { name: 'Bad' } })).status()).toBe(422)
  let item = await create(request, 'team', { name: 'Validation member', role: 'Designer', image: '/assets/img/home-1/news-01.jpg' })
  try {
    const duplicate = await request.post(`${backend}/api/admin/content/team`, { headers: auth(), data: item })
    expect(duplicate.status()).toBe(409)
    expect((await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: { ...item, social: { linkedin: 'javascript:alert(1)' } } })).status()).toBe(422)
    const original = item
    const result = await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: { ...item, bio: 'Saved revision' } })
    expect(result.ok()).toBeTruthy(); item = (await result.json()).item
    expect((await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: original })).status()).toBe(409)
    expect((await request.delete(`${backend}/api/admin/content/team/${item.id}?version=${original.version}`, { headers: auth() })).status()).toBe(409)
    expect((await publicData(request)).team.some(member => member.slug === item.slug)).toBe(false)
  } finally { await remove(request, 'team', item) }
})

test('public media can be uploaded from the editor and rendered without an admin token', async ({ page, context, request }) => {
  await context.addCookies([{ name: 'admin-token', value: token(), domain: '127.0.0.1', path: '/' }])
  await page.goto('/team')
  await page.getByRole('button', { name: 'Add team member' }).click()
  const dialog = page.getByRole('dialog')
  const response = page.waitForResponse(res => res.url().endsWith('/api/admin/media/upload'))
  await dialog.getByLabel('Upload Profile image').setInputFiles({ name: `${unique()}.png`, mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64') })
  const uploaded = await response
  expect(uploaded.status()).toBe(201)
  const { file } = await uploaded.json()
  await expect(dialog.getByLabel('Profile image', { exact: true })).toHaveValue(file.url)
  const publicFile = await request.get(file.url)
  expect(publicFile.ok()).toBeTruthy()
  expect(publicFile.headers()['content-type']).toBe('image/png')
  await request.delete(`${backend}/api/admin/media/${file.id}`, { headers: auth() })
})

test('empty content collections render safely and API errors offer retry', async ({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.route('**/api/site-data', route => route.fulfill({ json: { team: [], caseStudies: [], services: [], insights: [] } }))
  for (const path of ['/', '/team', '/work', '/services', '/insights']) {
    await page.goto(`${frontend}${path}`)
    await expect(page.getByRole('main')).toBeVisible()
  }
  expect(errors).toEqual([])
  await page.unroute('**/api/site-data')
  await page.route('**/api/site-data', route => route.fulfill({ status: 503, json: { error: 'Unavailable' } }))
  await page.reload()
  await expect(page.getByRole('alert')).toContainText('couldn’t load')
  await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible()
})
