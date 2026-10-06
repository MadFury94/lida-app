/* global fetch */
import { readFile } from 'node:fs/promises'
import { chromium, expect } from '@playwright/test'
import { URL } from 'node:url'
import console from 'node:console'

const credentials = JSON.parse(await readFile(new URL('../../backend/.wrangler/solutions-media-production/admin-credentials.json', import.meta.url), 'utf8'))
const api = 'https://solutions-media-backend.onochieazukaeme.workers.dev'
const login = await fetch(`${api}/api/admin/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials) })
if (!login.ok) throw new Error(`Login failed: ${login.status}`)
const { token } = await login.json()
const admin = await (await fetch(`${api}/api/admin/content/team`, { headers: { Authorization: `Bearer ${token}` } })).json()
console.log('ADMIN TEAM', JSON.stringify(admin.items.map(({name,slug,status,image}) => ({name,slug,status,image}))))
const published = await (await fetch(`${api}/api/site-data`)).json()
expect(published.team.map(member => member.slug).sort()).toEqual(admin.items.filter(member => member.status === 'published').map(member => member.slug).sort())
console.log('PASS: public API matches published admin team records.')
const browser = await chromium.launch({ channel: 'msedge', headless: true })
try {
  for (const origin of ['https://solutionmediadigital.com', 'https://solutionsmedia-app.pages.dev']) {
    for (const width of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } })
    page.on('pageerror', error => console.log('PAGE ERROR', origin, error.message))
    page.on('response', response => { if (response.url().includes('/api/')) console.log('API', origin, response.status(), response.url()) })
    for (const path of ['/team', '/about']) {
    await page.goto(`${origin}${path}`, { waitUntil: 'networkidle' })
    await expect(page.locator('#preloader')).toHaveCount(0, { timeout: 15000 })
    await page.locator('.team-section-5').scrollIntoViewIfNeeded()
    console.log('PAGE', origin, await page.title(), await page.locator('script[src*="/assets/index-"]').getAttribute('src'))
    for (const member of published.team) {
      await expect(page.getByRole('link', { name: member.name, exact: true })).toBeVisible()
      await expect(page.getByText(member.role, { exact: true })).toBeVisible()
    }
    await expect(page.locator('.team-profile-card')).toHaveCount(published.team.length)
    await expect(page.getByText('Helena Jhon son')).toHaveCount(0)
    console.log(`PASS: all ${published.team.length} published team members visible on ${origin}${path} at ${width}px without hover.`)
    await page.locator('.team-section-5').screenshot({path:`test-output/team-${new URL(origin).hostname}-${path.slice(1)}-${width}.png`})
    }
    await page.close()
    }
  }
} finally { await browser.close() }
