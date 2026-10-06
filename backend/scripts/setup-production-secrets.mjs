import { randomBytes } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { hashPassword } from '../src/auth.js'

const directory = new URL('../.wrangler/solutions-media-production/', import.meta.url)
await mkdir(directory, { recursive: true })
const credentialsPath = new URL('admin-credentials.json', directory)
let credentials
try {
  credentials = JSON.parse(await readFile(credentialsPath, 'utf8'))
} catch (error) {
  if (error.code !== 'ENOENT') throw error
  credentials = { url: 'https://solutionsmedia-admin.pages.dev', username: 'admin', password: randomBytes(24).toString('base64url') }
  await writeFile(credentialsPath, JSON.stringify(credentials, null, 2) + '\n', { flag: 'wx', mode: 0o600 })
}
const secretsPath = new URL('worker-secrets.json', directory)
try {
  await readFile(secretsPath)
} catch (error) {
  if (error.code !== 'ENOENT') throw error
  await writeFile(secretsPath, JSON.stringify({
    ADMIN_USERNAME: credentials.username,
    ADMIN_PASSWORD_HASH: await hashPassword(credentials.password),
    JWT_SECRET: randomBytes(48).toString('base64url'),
  }, null, 2) + '\n', { flag: 'wx', mode: 0o600 })
}
console.log('Production credentials and Worker secrets prepared in backend/.wrangler/solutions-media-production/ (ignored by Git).')
