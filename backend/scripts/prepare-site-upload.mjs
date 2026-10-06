import { cp, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { basename } from 'node:path'

const source = new URL('../../client/dist/', import.meta.url)
const destination = new URL(`../.wrangler/site-upload-${Date.now()}/`, import.meta.url)
await mkdir(destination, { recursive: true })
await cp(source, destination, {
  recursive: true,
  filter: path => {
    const name = basename(path)
    return !name.startsWith('themeforest-') && !name.toLowerCase().endsWith('.zip') && !name.startsWith('Lida ')
  },
})
console.log(fileURLToPath(destination))
