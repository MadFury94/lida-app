# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: content.spec.js >> admin creates, edits, publishes and deletes a blog visible on the real frontend
- Location: tests\content.spec.js:28:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('dialog').getByLabel('Status', { exact: true })

```

# Page snapshot

```yaml
- generic:
  - generic [aria-hidden]:
    - generic:
      - link:
        - /url: "#main-content"
        - text: Skip to content
      - complementary:
        - link:
          - /url: /dashboard
          - generic:
            - text: Lida Admin
            - paragraph: Administration workspace
        - navigation:
          - generic:
            - paragraph: General
            - generic:
              - link:
                - /url: /dashboard
                - text: Dashboard
              - link:
                - /url: /media
                - text: Media Library
              - link:
                - /url: /users
                - text: Users
          - generic:
            - paragraph: Website content
            - generic:
              - link:
                - /url: /team
                - text: Team members
              - link:
                - /url: /projects
                - text: Projects
              - link:
                - /url: /services
                - text: Services
              - link:
                - /url: /blogs
                - text: Blogs
          - generic:
            - paragraph: Workspace
            - generic:
              - link:
                - /url: /settings
                - text: Settings
        - generic:
          - button:
            - generic: CO
            - generic:
              - generic: content-editor
              - text: Administrator
      - generic:
        - banner:
          - button [expanded]
          - generic: Blogs
          - button:
            - generic: Search pages...
            - generic: Ctrl K
          - button
          - link:
            - /url: /settings
            - text: CO
        - main:
          - generic:
            - generic:
              - generic:
                - heading [level=1]: Blogs
                - paragraph: Manage the blogs displayed on your website.
              - button: Add blog post
            - status: Draft saved. It is not visible on the website.
            - generic:
              - generic:
                - textbox:
                  - /placeholder: Search blogs…
              - combobox
            - generic:
              - generic:
                - generic:
                  - table:
                    - rowgroup:
                      - row:
                        - columnheader: Name
                        - columnheader: Status
                        - columnheader: Order
                        - columnheader: Actions
                    - rowgroup:
                      - row:
                        - cell:
                          - generic:
                            - generic:
                              - paragraph: Why Brand Positioning Matters More Than Ever in African Markets
                              - paragraph: why-brand-positioning-matters-in-africa
                        - cell: published
                        - cell: "0"
                        - cell:
                          - generic:
                            - link:
                              - /url: http://127.0.0.1:3004/insights/why-brand-positioning-matters-in-africa
                            - button
                            - button
                      - row:
                        - cell:
                          - generic:
                            - generic:
                              - paragraph: "Market Entry in Nigeria: What International Brands Get Wrong"
                              - paragraph: market-entry-nigeria-what-international-brands-get-wrong
                        - cell: published
                        - cell: "1"
                        - cell:
                          - generic:
                            - link:
                              - /url: http://127.0.0.1:3004/insights/market-entry-nigeria-what-international-brands-get-wrong
                            - button
                            - button
                      - row:
                        - cell:
                          - generic:
                            - generic:
                              - paragraph: "Building Customer Trust in Financial Services: A Communications Perspective"
                              - paragraph: building-customer-trust-financial-services-nigeria
                        - cell: published
                        - cell: "2"
                        - cell:
                          - generic:
                            - link:
                              - /url: http://127.0.0.1:3004/insights/building-customer-trust-financial-services-nigeria
                            - button
                            - button
                      - row:
                        - cell:
                          - generic:
                            - generic:
                              - paragraph: Blog test-62e21334-cae7-402b-a9ce-b1e3c4efb95b
                              - paragraph: blog-test-62e21334-cae7-402b-a9ce-b1e3c4efb95b
                        - cell: draft
                        - cell: "3"
                        - cell:
                          - generic:
                            - button
                            - button
  - dialog [ref=e2]:
    - generic [ref=e3]:
      - heading "Edit blog post" [level=2] [ref=e4]
      - paragraph [ref=e5]: Published content appears on the website. Drafts are visible only in admin.
      - button "Close editor" [active] [ref=e6] [cursor=pointer]
    - generic [ref=e10]:
      - group [ref=e11]:
        - generic [ref=e12]:
          - generic [ref=e13]:
            - generic [ref=e14]: Status
            - combobox "Status" [ref=e15]:
              - option "Draft" [selected]
              - option "Published"
          - generic [ref=e16]:
            - generic [ref=e17]: Display order
            - spinbutton "Display order Lower numbers appear first." [ref=e18]: "3"
            - text: Lower numbers appear first.
        - generic [ref=e19]:
          - generic [ref=e20]:
            - generic [ref=e21]: Title *
            - textbox "Title" [ref=e22]: Blog test-62e21334-cae7-402b-a9ce-b1e3c4efb95b
          - generic [ref=e23]:
            - generic [ref=e24]: URL slug *
            - textbox "URL slug" [ref=e25]: blog-test-62e21334-cae7-402b-a9ce-b1e3c4efb95b
            - generic [ref=e26]: Lowercase words separated by hyphens. Changing this changes the public URL.
          - generic [ref=e27]:
            - generic [ref=e28]: Category *
            - textbox "Category" [ref=e29]: Company news
          - generic [ref=e30]:
            - text: Display date
            - textbox "Display date" [ref=e31]
          - generic [ref=e32]:
            - text: Reading time
            - textbox "Reading time" [ref=e33]
          - generic [ref=e34]:
            - generic [ref=e35]: Author *
            - textbox "Author" [ref=e36]: Lida editor
          - generic [ref=e37]:
            - text: Author role
            - textbox "Author role" [ref=e38]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic [ref=e41]: Cover image *
              - textbox "Cover image" [ref=e42]:
                - /placeholder: https://… or /assets/…
                - text: /assets/img/home-1/news-01.jpg
            - generic [ref=e43]:
              - generic [ref=e44] [cursor=pointer]:
                - text: Upload image
                - button "Upload Cover image" [ref=e48]
              - button "Choose from media" [ref=e49] [cursor=pointer]
              - img "Cover image preview" [ref=e50]
          - generic [ref=e51]:
            - text: Excerpt
            - textbox "Excerpt" [ref=e52]
          - generic [ref=e53]:
            - generic [ref=e54]: Article body *
            - textbox "Article body" [ref=e55]: A new article created through the admin. This is its second paragraph.
            - generic [ref=e56]: Separate paragraphs with a blank line. Text is displayed without HTML.
      - generic [ref=e57]:
        - button "Cancel" [ref=e58] [cursor=pointer]
        - button "Save draft" [ref=e59] [cursor=pointer]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | import { createHmac, randomUUID } from 'node:crypto'
  3   | import { blankFields, contentTypes } from '../../shared/content-schema.js'
  4   | 
  5   | const backend = 'http://127.0.0.1:8797'
  6   | const frontend = 'http://127.0.0.1:3004'
  7   | function token() {
  8   |   const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url')
  9   |   const payload = Buffer.from(JSON.stringify({ username: 'content-editor', role: 'admin', exp: Math.floor(Date.now() / 1000) + 3600 })).toString('base64url')
  10  |   // Match the existing Worker's base64 signature format.
  11  |   return `${header}.${payload}.${createHmac('sha256', 'local-content-integration-test-only').update(`${header}.${payload}`).digest('base64').replace(/=/g, '')}`
  12  | }
  13  | const auth = () => ({ Authorization: `Bearer ${token()}` })
  14  | const unique = () => `test-${randomUUID()}`
  15  | async function publicData(request) { const res = await request.get(`${backend}/api/site-data`); expect(res.ok()).toBeTruthy(); return res.json() }
  16  | async function create(request, kind, overrides = {}) {
  17  |   const slug = unique()
  18  |   const data = { ...blankFields(contentTypes[kind].fields), slug, status: 'draft', sortOrder: 0, ...overrides }
  19  |   const res = await request.post(`${backend}/api/admin/content/${kind}`, { headers: auth(), data })
  20  |   expect(res.status(), await res.text()).toBe(201)
  21  |   return (await res.json()).item
  22  | }
  23  | async function remove(request, kind, item) {
  24  |   const res = await request.delete(`${backend}/api/admin/content/${kind}/${item.id}?version=${item.version}`, { headers: auth() })
  25  |   expect(res.ok()).toBeTruthy()
  26  | }
  27  | 
  28  | test('admin creates, edits, publishes and deletes a blog visible on the real frontend', async ({ page, request, context }) => {
  29  |   const title = `Blog ${unique()}`
  30  |   const slug = title.toLowerCase().replace(/ /g, '-')
  31  |   await context.addCookies([{ name: 'admin-token', value: token(), domain: '127.0.0.1', path: '/' }])
  32  |   await page.goto('/blogs')
  33  |   await page.getByRole('button', { name: 'Add blog post' }).click()
  34  |   const dialog = page.getByRole('dialog')
  35  |   await dialog.getByLabel('Title', { exact: true }).fill(title)
  36  |   await dialog.getByLabel('Category', { exact: true }).fill('Company news')
  37  |   await dialog.getByLabel('Author', { exact: true }).fill('Lida editor')
  38  |   await dialog.getByLabel('Cover image', { exact: true }).fill('/assets/img/home-1/news-01.jpg')
  39  |   await dialog.getByLabel('Article body', { exact: true }).fill('A new article created through the admin.\n\nThis is its second paragraph.')
  40  |   await dialog.getByRole('button', { name: 'Save draft' }).click()
  41  |   await expect(page.getByRole('status')).toContainText('Draft saved')
  42  |   expect((await publicData(request)).insights.some(item => item.slug === slug)).toBe(false)
  43  |   await page.getByRole('button', { name: `Edit ${title}`, exact: true }).click()
> 44  |   await dialog.getByLabel('Status', { exact: true }).selectOption('published')
      |                                                      ^ Error: locator.selectOption: Test timeout of 60000ms exceeded.
  45  |   await dialog.getByRole('button', { name: 'Save and publish' }).click()
  46  |   await expect(page.getByRole('status')).toContainText('published')
  47  |   const publicPage = await context.newPage()
  48  |   await publicPage.goto(`${frontend}/insights/${slug}`)
  49  |   await expect(publicPage.getByRole('heading', { name: title, exact: true })).toBeVisible()
  50  |   await expect(publicPage.getByText('This is its second paragraph.', { exact: true })).toBeVisible()
  51  |   await page.getByRole('button', { name: `Edit ${title}`, exact: true }).click()
  52  |   await dialog.getByLabel('Article body', { exact: true }).fill('Updated through the admin and persisted in D1.')
  53  |   await dialog.getByRole('button', { name: 'Save and publish' }).click()
  54  |   await expect(page.getByRole('dialog')).toHaveCount(0)
  55  |   await publicPage.reload()
  56  |   await expect(publicPage.getByText('Updated through the admin and persisted in D1.', { exact: true })).toBeVisible()
  57  |   page.once('dialog', dialog => dialog.accept())
  58  |   await page.getByRole('button', { name: `Delete ${title}`, exact: true }).click()
  59  |   await expect(page.getByRole('status')).toContainText('deleted')
  60  |   await publicPage.reload()
  61  |   await expect(publicPage.getByRole('heading', { name: /This Page Could Not Be Found/ })).toBeVisible()
  62  | })
  63  | 
  64  | for (const kind of ['team', 'projects', 'services']) {
  65  |   test(`${kind}: persisted changes reach listing and detail pages, drafts disappear`, async ({ page, request }) => {
  66  |     const name = `Content ${unique()}`
  67  |     const base = kind === 'team' ? { name, role: 'Designer', image: '/assets/img/home-1/news-01.jpg', bio: 'A new team biography.' }
  68  |       : kind === 'projects' ? { client: name, thumb: '/assets/img/home-1/project-01.jpg', image: '/assets/img/home-1/project-01.jpg', challenge: 'A unique project challenge.' }
  69  |       : { title: name, shortTitle: name, summary: 'A new service summary.', detailImage: '/assets/img/home-1/news-01.jpg', includes: ['A new deliverable'] }
  70  |     let item = await create(request, kind, { ...base, status: 'published' })
  71  |     try {
  72  |       await page.goto(`${frontend}${contentTypes[kind].publicPath}`)
  73  |       await expect(page.locator('#preloader')).toHaveCount(0)
  74  |       if (kind === 'team') await page.getByRole('img', { name, exact: true }).first().hover()
  75  |       await expect(page.getByRole('link', { name, exact: true }).first()).toBeVisible()
  76  |       await page.goto(`${frontend}${contentTypes[kind].publicPath}/${item.slug}`)
  77  |       await expect(page.getByRole('heading', { name, exact: true }).first()).toBeVisible()
  78  |       if (kind === 'projects') await expect(page.getByText('A unique project challenge.', { exact: true })).toBeVisible()
  79  |       const res = await request.put(`${backend}/api/admin/content/${kind}/${item.id}`, { headers: auth(), data: { ...item, status: 'draft' } })
  80  |       expect(res.ok()).toBeTruthy(); item = (await res.json()).item
  81  |       await page.reload()
  82  |       await expect(page.getByRole('heading', { name: /This Page Could Not Be Found/ })).toBeVisible()
  83  |     } finally { await remove(request, kind, item) }
  84  |   })
  85  | }
  86  | 
  87  | test('backend rejects unauthenticated writes, invalid data, duplicate slugs, and stale updates', async ({ request }) => {
  88  |   expect((await request.post(`${backend}/api/admin/content/team`, { data: {} })).status()).toBe(401)
  89  |   expect((await request.get(`${backend}/api/admin/content/team`)).status()).toBe(401)
  90  |   expect((await request.post(`${backend}/api/admin/content/team`, { headers: auth(), data: { name: 'Bad' } })).status()).toBe(422)
  91  |   let item = await create(request, 'team', { name: 'Validation member', role: 'Designer', image: '/assets/img/home-1/news-01.jpg' })
  92  |   try {
  93  |     const duplicate = await request.post(`${backend}/api/admin/content/team`, { headers: auth(), data: item })
  94  |     expect(duplicate.status()).toBe(409)
  95  |     expect((await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: { ...item, social: { linkedin: 'javascript:alert(1)' } } })).status()).toBe(422)
  96  |     const original = item
  97  |     const result = await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: { ...item, bio: 'Saved revision' } })
  98  |     expect(result.ok()).toBeTruthy(); item = (await result.json()).item
  99  |     expect((await request.put(`${backend}/api/admin/content/team/${item.id}`, { headers: auth(), data: original })).status()).toBe(409)
  100 |     expect((await request.delete(`${backend}/api/admin/content/team/${item.id}?version=${original.version}`, { headers: auth() })).status()).toBe(409)
  101 |     expect((await publicData(request)).team.some(member => member.slug === item.slug)).toBe(false)
  102 |   } finally { await remove(request, 'team', item) }
  103 | })
  104 | 
  105 | test('public media can be uploaded from the editor and rendered without an admin token', async ({ page, context, request }) => {
  106 |   await context.addCookies([{ name: 'admin-token', value: token(), domain: '127.0.0.1', path: '/' }])
  107 |   await page.goto('/team')
  108 |   await page.getByRole('button', { name: 'Add team member' }).click()
  109 |   const dialog = page.getByRole('dialog')
  110 |   const response = page.waitForResponse(res => res.url().endsWith('/api/admin/media/upload'))
  111 |   await dialog.getByLabel('Upload Profile image').setInputFiles({ name: `${unique()}.png`, mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64') })
  112 |   const uploaded = await response
  113 |   expect(uploaded.status()).toBe(201)
  114 |   const { file } = await uploaded.json()
  115 |   await expect(dialog.getByLabel('Profile image', { exact: true })).toHaveValue(file.url)
  116 |   const publicFile = await request.get(file.url)
  117 |   expect(publicFile.ok()).toBeTruthy()
  118 |   expect(publicFile.headers()['content-type']).toBe('image/png')
  119 |   await request.delete(`${backend}/api/admin/media/${file.id}`, { headers: auth() })
  120 | })
  121 | 
  122 | test('empty content collections render safely and API errors offer retry', async ({ page }) => {
  123 |   const errors = []
  124 |   page.on('pageerror', error => errors.push(error.message))
  125 |   await page.route('**/api/site-data', route => route.fulfill({ json: { team: [], caseStudies: [], services: [], insights: [] } }))
  126 |   for (const path of ['/', '/team', '/work', '/services', '/insights']) {
  127 |     await page.goto(`${frontend}${path}`)
  128 |     await expect(page.getByRole('main')).toBeVisible()
  129 |   }
  130 |   expect(errors).toEqual([])
  131 |   await page.unroute('**/api/site-data')
  132 |   await page.route('**/api/site-data', route => route.fulfill({ status: 503, json: { error: 'Unavailable' } }))
  133 |   await page.reload()
  134 |   await expect(page.getByRole('alert')).toContainText('couldn’t load')
  135 |   await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible()
  136 | })
  137 | 
```