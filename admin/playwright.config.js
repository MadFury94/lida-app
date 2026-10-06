import { defineConfig } from '@playwright/test'
export default defineConfig({
  timeout: 60000,
  expect: { timeout: 15000 },
  outputDir: './test-output/admin',
  testDir: './tests',
  testIgnore: ['content.spec.js', 'backend.spec.js'],
  use: { baseURL: 'http://127.0.0.1:5184', channel: 'msedge', headless: true },
  webServer: { command: 'node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5184', url: 'http://127.0.0.1:5184', reuseExistingServer: false },
})
