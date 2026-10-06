import { test, expect } from '@playwright/test'

const backend = 'http://127.0.0.1:8797'
const credentials = { username: 'content-editor', password: 'integration-test-password' }

test('real sign-in rejects wrong credentials, opens the dashboard, and logs out', async ({ page, request }) => {
  const bad = await request.post(`${backend}/api/admin/login`, { data: { ...credentials, password: 'incorrect' } })
  expect(bad.status()).toBe(401)
  await page.goto('/dashboard')
  await expect(page).toHaveURL(/login$/)
  await page.getByLabel('Username', { exact: true }).fill(credentials.username)
  await page.getByLabel('Password', { exact: true }).fill(credentials.password)
  await page.getByRole('button', { name: 'Sign in', exact: true }).click()
  await expect(page).toHaveURL(/dashboard$/)
  await expect(page.getByText('Healthy', { exact: true })).toBeVisible()
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Dashboard', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Account menu' }).click()
  await page.getByRole('menuitem', { name: 'Sign out' }).click()
  await expect(page).toHaveURL(/login$/)
})

test('settings persist, uploads obey them, and dashboard statistics reflect media', async ({ request }) => {
  const login = await request.post(`${backend}/api/admin/login`, { data: credentials })
  expect(login.ok()).toBeTruthy()
  const headers = { Authorization: `Bearer ${(await login.json()).token}` }
  const original = (await (await request.get(`${backend}/api/admin/settings`, { headers })).json()).settings
  const before = (await (await request.get(`${backend}/api/admin/dashboard`, { headers })).json()).stats
  let uploaded
  try {
    expect((await request.put(`${backend}/api/admin/settings`, { headers, data: { maxUploadSize: '2', allowedFileTypes: 'image/png' } })).ok()).toBeTruthy()
    const saved = await request.get(`${backend}/api/admin/settings`, { headers })
    expect((await saved.json()).settings).toEqual({ maxUploadSize: '2', allowedFileTypes: 'image/png' })
    const rejected = await request.post(`${backend}/api/admin/media/upload`, { headers, multipart: { file: { name: 'test.pdf', mimeType: 'application/pdf', buffer: Buffer.from('test') } } })
    expect(rejected.status()).toBe(422)
    const image = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64')
    const response = await request.post(`${backend}/api/admin/media/upload`, { headers, multipart: { file: { name: 'stats-test.png', mimeType: 'image/png', buffer: image } } })
    expect(response.status()).toBe(201)
    uploaded = (await response.json()).file
    const after = (await (await request.get(`${backend}/api/admin/dashboard`, { headers })).json()).stats
    expect(after.totalFiles).toBe(before.totalFiles + 1)
    expect(after.totalSize).toBe(before.totalSize + image.length)
    expect((await request.get(uploaded.url)).headers()['content-type']).toBe('image/png')
  } finally {
    if (uploaded) await request.delete(`${backend}/api/admin/media/${uploaded.id}`, { headers })
    await request.put(`${backend}/api/admin/settings`, { headers, data: original })
  }
  for (const path of ['settings', 'media', 'dashboard']) expect((await request.get(`${backend}/api/admin/${path}`)).status()).toBe(401)
})
