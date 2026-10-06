const TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf']

export async function uploadSettings(env) {
  const row = await env.CONTENT_DB.prepare("SELECT data FROM settings WHERE id = 'uploads'").first()
  return row ? JSON.parse(row.data) : {
    maxUploadSize: String(Number(env.MAX_UPLOAD_SIZE || 10485760) / 1024 / 1024),
    allowedFileTypes: env.ALLOWED_FILE_TYPES || TYPES.join(','),
  }
}

export async function handleSettings(request, env) {
  if (!env.CONTENT_DB) return Response.json({ error: 'Database is not configured.' }, { status: 503 })
  if (request.method === 'GET') return Response.json({ settings: await uploadSettings(env) })
  if (request.method !== 'PUT') return Response.json({ error: 'Method not allowed.' }, { status: 405 })
  let input
  try { input = await request.json() } catch { return Response.json({ error: 'Invalid JSON.' }, { status: 400 }) }
  const size = Number(input?.maxUploadSize)
  const types = typeof input?.allowedFileTypes === 'string' ? [...new Set(input.allowedFileTypes.split(',').map(t => t.trim()).filter(Boolean))] : []
  if (!Number.isInteger(size) || size < 1 || size > 25 || !types.length || types.some(t => !TYPES.includes(t))) {
    return Response.json({ error: 'Choose a size from 1 to 25 MB and supported image or PDF types.' }, { status: 422 })
  }
  const settings = { maxUploadSize: String(size), allowedFileTypes: types.join(',') }
  await env.CONTENT_DB.prepare("INSERT INTO settings (id, data) VALUES ('uploads', ?) ON CONFLICT(id) DO UPDATE SET data = excluded.data").bind(JSON.stringify(settings)).run()
  return Response.json({ settings, success: true })
}
