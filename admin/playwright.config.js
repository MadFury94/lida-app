import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  testIgnore: 'content.spec.js',
  use: { baseURL: 'http://127.0.0.1:5184', channel: 'msedge', headless: true },
  webServer: { command: 'npm run dev -- --port 5184', url: 'http://127.0.0.1:5184', reuseExistingServer: !process.env.CI },
})
