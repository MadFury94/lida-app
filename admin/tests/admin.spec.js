import { test, expect } from '@playwright/test'

async function session(page, dashboardError = false) {
  await page.context().addCookies([{ name: 'admin-token', value: 'test-token', domain: '127.0.0.1', path: '/' }])
  await page.route('**/api/admin/**', route => {
    const path = new URL(route.request().url()).pathname
    if (path.endsWith('/dashboard') && dashboardError) return route.fulfill({ status: 503, json: { error: 'Unavailable' } })
    const json = path.endsWith('/verify') ? { user: { username: 'admin' } }
      : path.endsWith('/dashboard') ? { stats: { totalFiles: 12, totalSize: 1048576, recentUploads: 3, systemHealth: 'good' } }
      : path.endsWith('/media') ? { files: [{ id: '1', name: 'sample.png', type: 'image/png', size: 1024, url: 'data:image/png;base64,', uploadedAt: '2026-09-11' }] }
      : { success: true }
    return route.fulfill({ json })
  })
}

test('dashboard navigation, search, theme persistence and logout', async ({ page }) => {
  await session(page)
  await page.goto('/dashboard')
  await expect(page.getByText('12', { exact: true })).toBeVisible()
  await page.screenshot({ path: 'test-results/dashboard.png', fullPage: true })
  await page.getByRole('button', { name: 'Toggle sidebar' }).click()
  await expect(page.getByRole('button', { name: 'Toggle sidebar' })).toHaveAttribute('aria-expanded', 'false')
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await page.reload()
  await expect(page.locator('html')).toHaveClass('dark')
  await page.getByRole('button', { name: 'Search pages' }).click()
  await page.getByRole('textbox', { name: 'Search pages' }).fill('settings')
  await page.getByRole('dialog').getByRole('link', { name: 'Settings' }).click()
  await expect(page).toHaveURL(/settings$/)
  await page.getByLabel('Maximum upload size (MB)').fill('20')
  const request = page.waitForRequest(req => req.url().endsWith('/api/admin/settings') && req.method() === 'PUT')
  await page.getByRole('button', { name: 'Save Settings' }).click()
  expect((await request).postDataJSON().maxUploadSize).toBe('20')
  await expect(page.getByText('Settings saved successfully!')).toBeVisible()
  await page.getByRole('button', { name: 'Account menu' }).click()
  await page.getByRole('menuitem', { name: 'Sign out' }).click()
  await expect(page).toHaveURL(/login$/)
})

test('mobile navigation and media controls fit the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await session(page)
  await page.goto('/dashboard')
  await page.getByRole('button', { name: 'Open navigation' }).click()
  await page.getByRole('dialog').getByRole('link', { name: 'Media Library' }).click()
  await expect(page.getByRole('heading', { name: 'Media Library' })).toBeVisible()
  await page.getByLabel('Search files').fill('missing')
  await expect(page.getByText('No files found')).toBeVisible()
  await page.getByLabel('Search files').fill('sample')
  await page.getByRole('button', { name: 'List view' }).click()
  await expect(page.getByRole('table').getByText('sample.png', { exact: true })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('failed dashboard fetch is not reported as healthy', async ({ page }) => {
  await session(page, true)
  await page.goto('/dashboard')
  await expect(page.getByRole('alert')).toContainText('Unable to load')
  await expect(page.getByText('Healthy', { exact: true })).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Retry' })).toBeVisible()
})
