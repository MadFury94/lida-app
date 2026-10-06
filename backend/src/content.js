import { contentTypes, validateContent } from '../../shared/content-schema.js'

const json = (data, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } })
const record = row => ({ ...JSON.parse(row.data), id: row.id, status: row.status, sortOrder: row.sort_order, version: row.version, updatedAt: row.updated_at })

export async function publicContent(env) {
  if (!env.CONTENT_DB) throw new Error('Content database is not configured.')
  const { results } = await env.CONTENT_DB.prepare("SELECT kind, data FROM content WHERE status = 'published' ORDER BY sort_order, created_at, id").all()
  const sections = Object.fromEntries(Object.values(contentTypes).map(type => [type.section, []]))
  for (const row of results) {
    if (contentTypes[row.kind]) sections[contentTypes[row.kind].section].push(JSON.parse(row.data))
  }
  return sections
}

async function readBody(request) {
  // Bound streamed request size as well as Content-Length; never buffer unbounded JSON.
  if (Number(request.headers.get('Content-Length')) > 262144) throw new Error('Content must be smaller than 256 KB.')
  const reader = request.body?.getReader()
  if (!reader) throw new Error('A JSON body is required.')
  const chunks = []
  let size = 0
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > 262144) { await reader.cancel(); throw new Error('Content must be smaller than 256 KB.') }
    chunks.push(value)
  }
  const bytes = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength }
  try { return JSON.parse(new TextDecoder().decode(bytes)) } catch { throw new Error('Invalid JSON body.') }
}

// Authentication is enforced by the Worker's admin router before calling this handler.
export async function handleContent(request, env, kind, id) {
  if (!Object.hasOwn(contentTypes, kind)) return json({ error: 'Unknown content type.' }, 404)
  if (!env.CONTENT_DB) return json({ error: 'Content database is not configured.' }, 503)
  const db = env.CONTENT_DB
  try {
    if (request.method === 'GET') {
      if (id) {
        const item = await db.prepare('SELECT * FROM content WHERE kind = ? AND id = ?').bind(kind, id).first()
        return item ? json({ item: record(item) }) : json({ error: 'Content not found.' }, 404)
      }
      const { results } = await db.prepare('SELECT * FROM content WHERE kind = ? ORDER BY sort_order, created_at, id').bind(kind).all()
      return json({ items: results.map(record) })
    }
    if (request.method === 'DELETE' && id) {
      const version = Number(new URL(request.url).searchParams.get('version'))
      if (!Number.isInteger(version) || version < 1) return json({ error: 'A valid record version is required.' }, 422)
      const result = await db.prepare('DELETE FROM content WHERE kind = ? AND id = ? AND version = ?').bind(kind, id, version).run()
      return result.meta.changes ? json({ success: true }) : json({ error: 'This record changed or was deleted. Reload before trying again.' }, 409)
    }
    if ((request.method === 'POST' && !id) || (request.method === 'PUT' && id)) {
      let body, data
      try {
        body = await readBody(request)
        if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Content must be an object.')
        data = validateContent(kind, body)
        if (!['draft', 'published'].includes(body.status)) throw new Error('Status must be draft or published.')
        if (!Number.isInteger(body.sortOrder) || body.sortOrder < 0 || body.sortOrder > 100000) throw new Error('Display order must be a whole number between 0 and 100000.')
        if (id && (!Number.isInteger(body.version) || body.version < 1)) throw new Error('A valid record version is required.')
      } catch (error) { return json({ error: error.message }, 422) }
      const now = new Date().toISOString()
      const itemId = id || crypto.randomUUID()
      if (id) {
        const result = await db.prepare('UPDATE content SET slug = ?, data = ?, status = ?, sort_order = ?, version = version + 1, updated_at = ? WHERE kind = ? AND id = ? AND version = ?')
          .bind(data.slug, JSON.stringify(data), body.status, body.sortOrder, now, kind, id, body.version).run()
        if (!result.meta.changes) return json({ error: 'This record changed or was deleted. Reload before saving again.' }, 409)
      } else {
        await db.prepare('INSERT INTO content (id, kind, slug, data, status, sort_order, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
          .bind(itemId, kind, data.slug, JSON.stringify(data), body.status, body.sortOrder, now, now).run()
      }
      return json({ item: { ...data, id: itemId, status: body.status, sortOrder: body.sortOrder, version: id ? body.version + 1 : 1, updatedAt: now } }, id ? 200 : 201)
    }
    return json({ error: 'Method not allowed.' }, 405)
  } catch (error) {
    if (/UNIQUE constraint/i.test(error.message)) return json({ error: 'That URL slug is already in use. Choose another slug.' }, 409)
    console.error('Content database request failed', { kind, method: request.method, message: error.message })
    return json({ error: 'Content storage is unavailable. Check the database binding and migrations.' }, 503)
  }
}
