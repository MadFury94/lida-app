import { defineConfig } from '@playwright/test'

export default defineConfig({
  outputDir: './test-output/content',
  testDir: './tests',
  testMatch: ['content.spec.js', 'backend.spec.js'],
  timeout: 60000,
  expect: { timeout: 15000 },
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:5194', channel: 'msedge', headless: true },
  webServer: [
    { command: 'node ../backend/scripts/content-test-server.mjs', url: 'http://127.0.0.1:8797/api/health', timeout: 180000 },
    { command: 'node node_modules/vite/bin/vite.js --host 127.0.0.1 --port 5194', url: 'http://127.0.0.1:5194', timeout: 120000, env: { VITE_API_BASE_URL: 'http://127.0.0.1:8797', VITE_SITE_URL: 'http://127.0.0.1:3004' } },
    { command: 'node ../client/node_modules/vite/bin/vite.js ../client --host 127.0.0.1 --port 3004', url: 'http://127.0.0.1:3004', timeout: 120000, env: { VITE_API_BASE_URL: 'http://127.0.0.1:8797' } },
  ],
})
