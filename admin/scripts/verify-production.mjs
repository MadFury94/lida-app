import { readFile, mkdir } from 'node:fs/promises'
import { randomUUID } from 'node:crypto'
import { fileURLToPath, URL } from 'node:url'
import console from 'node:console'
import { chromium, expect } from '@playwright/test'

const credentials = JSON.parse(await readFile(new URL('../../backend/.wrangler/solutions-media-production/admin-credentials.json', import.meta.url), 'utf8'))
const api = 'https://solutions-media-backend.onochieazukaeme.workers.dev'
const site = 'https://solutionmediadigital.com'
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const context = await browser.newContext()
const page = await context.newPage()
let created
let headers
try {
  await page.goto(`${credentials.url}/dashboard`)
  await expect(page).toHaveURL(/login$/)
  await page.getByLabel('Username', { exact: true }).fill(credentials.username)
  await page.getByLabel('Password', { exact: true }).fill(credentials.password)
  await page.getByRole('button', { name: 'Sign in', exact: true }).click()
  await expect(page).toHaveURL(/dashboard$/, { timeout: 30000 })
  await expect(page.getByText('Healthy', { exact: true })).toBeVisible()
  console.log('PASS: live sign-in and database/media health.')
  const token = (await context.cookies()).find(cookie => cookie.name === 'solutions-media-admin-token').value
  headers = { Authorization: `Bearer ${token}` }
  await page.goto(`${credentials.url}/blogs`)
  await page.getByRole('button', { name: 'Add blog post' }).click()
  const dialog = page.getByRole('dialog')
  const title = `Deployment check ${randomUUID()}`
  await dialog.getByLabel('Title', { exact: true }).fill(title)
  await dialog.getByLabel('Category', { exact: true }).fill('Verification')
  await dialog.getByLabel('Author', { exact: true }).fill('Solutions Media')
  await dialog.getByLabel('Cover image', { exact: true }).fill('/assets/img/home-1/news-01.jpg')
  await dialog.getByLabel('Article body', { exact: true }).fill('Temporary unpublished deployment verification.')
  const saved = page.waitForResponse(response => response.url() === `${api}/api/admin/content/blogs` && response.request().method() === 'POST')
  await dialog.getByRole('button', { name: 'Save draft' }).click()
  created = (await (await saved).json()).item
  await expect(page.getByRole('status')).toContainText('Draft saved')
  await page.reload()
  await expect(page.getByRole('button', { name: `Edit ${title}`, exact: true })).toBeVisible()
  const publicData = await (await context.request.get(`${api}/api/site-data`)).json()
  expect(publicData.insights.some(item => item.slug === created.slug)).toBe(false)
  page.once('dialog', confirmation => confirmation.accept())
  await page.getByRole('button', { name: `Delete ${title}`, exact: true }).click()
  await expect(page.getByRole('status')).toContainText('deleted')
  created = undefined
  console.log('PASS: live draft creation, persistence, privacy, and deletion.')
  const frontend = await context.newPage()
  const dataResponse = frontend.waitForResponse(response => response.url() === `${api}/api/site-data`)
  await frontend.goto(`${site}/insights`)
  expect((await dataResponse).ok()).toBeTruthy()
  await expect(frontend.getByRole('heading', { name: publicData.insights[0].title, exact: true }).first()).toBeVisible({ timeout: 15000 })
  console.log('PASS: live website reads published content from the production API.')
  await page.bringToFront()
  await page.goto(`${credentials.url}/dashboard`)
  await mkdir(new URL('../test-output/', import.meta.url), { recursive: true })
  await page.screenshot({ path: fileURLToPath(new URL('../test-output/production-dashboard.png', import.meta.url)), fullPage: true })
  await page.getByRole('button', { name: 'Account menu' }).click()
  await page.getByRole('menuitem', { name: 'Sign out' }).click()
  await expect(page).toHaveURL(/login$/)
  console.log('PASS: live logout.')
} finally {
  if (created && headers) {
    const removed = await context.request.delete(`${api}/api/admin/content/blogs/${created.id}?version=${created.version}`, { headers })
    if (!removed.ok()) console.error(`Cleanup failed for verification draft ${created.id}`)
  }
  await browser.close()
}
