import { randomBytes } from 'node:crypto'
import { writeFile, access } from 'node:fs/promises'
import { hashPassword } from '../src/auth.js'
const path = new URL('../.dev.vars.dev', import.meta.url)
try { await access(path); console.log('Local credentials already exist in backend/.dev.vars.dev; kept unchanged.'); process.exit(0) } catch {}
const password = randomBytes(18).toString('base64url')
await writeFile(path, `# Local development only. Do not reuse in production.\n# Sign-in password: ${password}\nADMIN_USERNAME="admin"\nADMIN_PASSWORD_HASH="${await hashPassword(password)}"\nJWT_SECRET="${randomBytes(32).toString('base64url')}"\n`, { flag: 'wx' })
console.log('Local admin created. Username: admin. Find the generated password in backend/.dev.vars.dev.')
