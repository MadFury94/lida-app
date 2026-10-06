import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

const account = 'e260983617003d3a7092441acdfcd4f4'
const config = await readFile(join(process.env.APPDATA, 'xdg.config/.wrangler/config/default.toml'), 'utf8')
const token = process.env.CLOUDFLARE_API_TOKEN || config.match(/^oauth_token\s*=\s*"([^"]+)"/m)?.[1]
if (!token) throw new Error('Run Wrangler whoami to authenticate first.')
async function api(path, method = 'GET', body) {
  const response = await fetch(`https://api.cloudflare.com/client/v4${path}`, { method, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined })
  const data = await response.json()
  if (!response.ok || !data.success) throw new Error(JSON.stringify(data.errors))
  return data.result
}
if (process.argv.includes('--configure-site')) {
  const path = `/accounts/${account}/pages/projects/solutionsmedia-app`
  const project = await api(path)
  await api(path, 'PATCH', { deployment_configs: { production: { env_vars: {
    ...project.deployment_configs.production.env_vars,
    VITE_API_BASE_URL: { type: 'plain_text', value: 'https://solutions-media-backend.onochieazukaeme.workers.dev' },
    VITE_CONTENT_SOURCE: { type: 'plain_text', value: 'admin' },
  } } } })
  console.log('Solutions Media production build environment connected to its admin backend.')
  process.exit(0)
}
if (process.argv.includes('--add-admin-domain')) {
  const path = `/accounts/${account}/pages/projects/solutionsmedia-admin/domains`
  const domains = await api(path)
  const existing = domains.find(domain => domain.name === 'admin.solutionmediadigital.com')
  console.log(JSON.stringify(existing || await api(path, 'POST', { name: 'admin.solutionmediadigital.com' }), null, 2))
  process.exit(0)
}
if (process.argv.includes('--cleanup-unintended-worker')) {
  const path = `/accounts/${account}/workers/scripts/solutionsmedia-admin`
  const current = await api(`${path}/deployments`)
  if (!current.deployments?.[0]?.versions?.some(version => version.version_id === 'f7e6b114-e8fc-4b41-8d8c-65b3bb8e2000')) {
    throw new Error('Worker changed since its unintended creation; refusing cleanup.')
  }
  await api(path, 'DELETE')
  console.log('Removed the unintended API Worker; the admin Pages project is unchanged.')
  process.exit(0)
}
for (const project of ['solutionsmedia-app', 'lida-admin']) {
  const data = await api(`/accounts/${account}/pages/projects/${project}`)
  console.log(JSON.stringify({ project, subdomain: data.subdomain, domains: data.domains, production_branch: data.production_branch, build_config: data.build_config, source: data.source, production_environment_keys: Object.keys(data.deployment_configs?.production?.env_vars || {}) }, null, 2))
}
console.log('Worker subdomain:', JSON.stringify(await api(`/accounts/${account}/workers/subdomain`)))
console.log('Domain zone:', JSON.stringify((await api('/zones?name=solutionmediadigital.com')).map(({id,name,status}) => ({id,name,status}))))
