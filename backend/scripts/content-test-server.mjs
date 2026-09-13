import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const cwd = fileURLToPath(new URL('..', import.meta.url))
const cli = fileURLToPath(new URL('../node_modules/wrangler/bin/wrangler.js', import.meta.url))
const run = args => spawn(process.execPath, [cli, ...args], { cwd, stdio: 'inherit', windowsHide: true })
const migration = run(['d1', 'migrations', 'apply', 'CONTENT_DB', '--local', '--config', 'tests/wrangler.toml', '--persist-to', '.wrangler/content-tests'])
const exitCode = await new Promise(resolve => migration.on('exit', resolve))
if (exitCode !== 0) process.exit(exitCode || 1)
const server = run(['dev', '--config', 'tests/wrangler.toml', '--ip', '127.0.0.1', '--port', '8797', '--persist-to', '.wrangler/content-tests'])
process.on('SIGTERM', () => server.kill())
process.on('SIGINT', () => server.kill())
server.on('exit', code => process.exit(code || 0))

