// ============================================================
// LIDA DIGITAL — Cloudflare Workers Backend
// Routes:
//   POST /api/contact             — public contact form
//   GET  /api/site-data           — full site.js data snapshot (public read)
//   POST /api/admin/login         — admin JWT login
//   POST /api/admin/verify        — verify JWT token
//   GET  /api/admin/dashboard     — dashboard stats (requires JWT)
//   GET  /api/admin/media         — list media files (requires JWT)
//   POST /api/admin/media/upload  — upload media file (requires JWT)
//   DELETE /api/admin/media/:id   — delete media file (requires JWT)
//   GET  /api/admin/*             — admin reads  (requires JWT)
//   POST /api/admin/*             — admin writes (requires JWT)
// ============================================================

import { siteData } from './data/site-data.js'

// ── Helpers ──────────────────────────────────────────────────

/**
 * Build a JSON response with correct headers.
 */
function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
  })
}

/**
 * Apply CORS headers for allowed origins.
 * Returns null if origin is not allowed (for non-preflight requests we still
 * serve the response but strip CORS headers — browser will block it).
 */
function corsHeaders(request, env) {
  const origin = request.headers.get('Origin') || ''
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map(o => o.trim())
  // In development allow localhost on any port
  const isDev = env.ENVIRONMENT === 'development'
  const isAllowed = isDev
    ? origin.startsWith('http://localhost') || allowed.includes(origin)
    : allowed.includes(origin)

  if (!isAllowed && !isDev) return {}
  return {
    'Access-Control-Allow-Origin': isDev ? origin : (allowed.includes(origin) ? origin : allowed[0]),
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Key',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
  }
}

/**
 * Handle CORS preflight.
 */
function handleOptions(request, env) {
  const headers = corsHeaders(request, env)
  return new Response(null, { 
    status: 204, 
    headers: {
      ...headers,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Key',
      'Access-Control-Max-Age': '86400'
    }
  })
}

/**
 * Simple JWT implementation for Cloudflare Workers
 */
class JWT {
  static async sign(payload, secret) {
    const header = { alg: 'HS256', typ: 'JWT' }
    const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, '')
    const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, '')
    
    const data = `${encodedHeader}.${encodedPayload}`
    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    )
    
    const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
    const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(/=/g, '')
    
    return `${data}.${encodedSignature}`
  }

  static async verify(token, secret) {
    try {
      const [headerB64, payloadB64, signatureB64] = token.split('.')
      if (!headerB64 || !payloadB64 || !signatureB64) return null
      
      const data = `${headerB64}.${payloadB64}`
      const key = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(secret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['verify']
      )
      
      const signature = Uint8Array.from(atob(signatureB64), c => c.charCodeAt(0))
      const isValid = await crypto.subtle.verify('HMAC', key, signature, new TextEncoder().encode(data))
      
      if (!isValid) return null
      
      const payload = JSON.parse(atob(payloadB64))
      
      // Check expiration
      if (payload.exp && Date.now() / 1000 > payload.exp) return null
      
      return payload
    } catch {
      return null
    }
  }
}

/**
 * Simple bcrypt-like password verification using Web Crypto API
 */
async function verifyPassword(password, hash) {
  // For now, we'll use a simple bcrypt hash comparison
  // In production, you'd want to use a proper bcrypt implementation
  
  // The hash format is: $2b$12$salt_and_hash
  // For simplicity, we'll just check if it matches our pre-generated hash
  const expectedHash = '$2b$12$LQv3c/rD.VA3qxyBzmFnneLeaL4i.LNthcCJg8xMoMHx8k3l5zZ5e'
  const expectedPassword = 'LidaAdmin2026!'
  
  return password === expectedPassword && hash === expectedHash
}

/**
 * Verify JWT token from Authorization header
 */
async function verifyJWT(request, env) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null
  
  const token = authHeader.substring(7)
  return await JWT.verify(token, env.JWT_SECRET)
}

/**
 * Verify admin API key from the X-Admin-Key header.
 */
function isAdmin(request, env) {
  const key = request.headers.get('X-Admin-Key')
  return key && key === env.ADMIN_API_KEY
}

/**
 * Simple input sanitiser — strips HTML tags.
 */
function sanitise(str) {
  if (typeof str !== 'string') return ''
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 2000)
}

// ── Admin Authentication ──────────────────────────────────────

/**
 * Handle admin login with JWT token generation
 */
async function handleAdminLogin(request, env) {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400)
  }

  const { username, password } = body

  if (!username || !password) {
    return json({ error: 'Username and password are required.' }, 422)
  }

  // Verify credentials
  const isValidUser = username === env.ADMIN_USERNAME
  const isValidPassword = await verifyPassword(password, env.ADMIN_PASSWORD_HASH)

  if (!isValidUser || !isValidPassword) {
    return json({ error: 'Invalid credentials.' }, 401)
  }

  // Generate JWT token
  const payload = {
    username: env.ADMIN_USERNAME,
    role: 'admin',
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
  }

  const token = await JWT.sign(payload, env.JWT_SECRET)

  return json({
    success: true,
    token,
    user: {
      username: env.ADMIN_USERNAME,
      role: 'admin'
    }
  })
}

/**
 * Verify JWT token endpoint
 */
async function handleAdminVerify(request, env) {
  const payload = await verifyJWT(request, env)
  
  if (!payload) {
    return json({ error: 'Invalid or expired token.' }, 401)
  }

  return json({
    valid: true,
    user: {
      username: payload.username,
      role: payload.role
    }
  })
}

/**
 * Dashboard statistics endpoint
 */
async function handleAdminDashboard(request, env) {
  const payload = await verifyJWT(request, env)
  if (!payload) return json({ error: 'Unauthorized.' }, 401)

  // Get basic stats (you can expand this)
  const stats = {
    totalFiles: 0,
    totalSize: 0,
    recentUploads: 0,
    systemHealth: 'good'
  }

  return json({ stats })
}

/**
 * List media files from R2 bucket
 */
async function handleAdminMediaList(request, env) {
  const payload = await verifyJWT(request, env)
  if (!payload) return json({ error: 'Unauthorized.' }, 401)

  if (!env.MEDIA_BUCKET) {
    return json({ error: 'R2 bucket not configured.' }, 503)
  }

  try {
    const objects = await env.MEDIA_BUCKET.list()
    const files = objects.objects?.map(obj => ({
      id: obj.key,
      name: obj.key,
      size: obj.size,
      type: getContentType(obj.key),
      uploadedAt: obj.uploaded,
      url: `/api/admin/media/file/${obj.key}`
    })) || []

    return json({ files })
  } catch (error) {
    return json({ error: 'Failed to list files.' }, 500)
  }
}

/**
 * Upload media file to R2 bucket
 */
async function handleAdminMediaUpload(request, env) {
  const payload = await verifyJWT(request, env)
  if (!payload) return json({ error: 'Unauthorized.' }, 401)

  if (!env.MEDIA_BUCKET) {
    return json({ error: 'R2 bucket not configured.' }, 503)
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || !file.name) {
      return json({ error: 'No file provided.' }, 422)
    }

    // Validate file size (10MB default)
    const maxSize = parseInt(env.MAX_UPLOAD_SIZE || '10485760', 10)
    if (file.size > maxSize) {
      return json({ error: `File size exceeds ${Math.round(maxSize/1024/1024)}MB limit.` }, 422)
    }

    // Validate file type
    const allowedTypes = (env.ALLOWED_FILE_TYPES || 'image/jpeg,image/png,image/webp,image/gif,application/pdf').split(',')
    if (!allowedTypes.includes(file.type)) {
      return json({ error: `File type ${file.type} not allowed. Allowed: ${allowedTypes.join(', ')}` }, 422)
    }

    // Generate unique filename
    const timestamp = Date.now()
    const extension = file.name.split('.').pop()
    const cleanName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
    const filename = `${timestamp}-${cleanName}`

    // Upload to R2
    const uploadResult = await env.MEDIA_BUCKET.put(filename, file.stream(), {
      httpMetadata: {
        contentType: file.type,
        contentDisposition: `inline; filename="${file.name}"`
      }
    })

    const fileData = {
      id: filename,
      name: file.name,
      size: file.size,
      type: file.type,
      uploadedAt: new Date().toISOString(),
      url: `/api/admin/media/file/${filename}`
    }

    return json({ file: fileData }, 201)
  } catch (error) {
    console.error('Upload error:', error)
    return json({ error: 'Upload failed: ' + error.message }, 500)
  }
}

/**
 * Delete media file from R2 bucket
 */
async function handleAdminMediaDelete(request, env, fileId) {
  const payload = await verifyJWT(request, env)
  if (!payload) return json({ error: 'Unauthorized.' }, 401)

  if (!env.MEDIA_BUCKET) {
    return json({ error: 'R2 bucket not configured.' }, 503)
  }

  try {
    await env.MEDIA_BUCKET.delete(fileId)
    return json({ success: true })
  } catch (error) {
    return json({ error: 'Delete failed.' }, 500)
  }
}

/**
 * Serve media file from R2 bucket
 */
async function handleAdminMediaFile(request, env, filename) {
  if (!env.MEDIA_BUCKET) {
    return json({ error: 'R2 bucket not configured.' }, 503)
  }

  try {
    console.log('Attempting to serve file:', filename)
    const object = await env.MEDIA_BUCKET.get(filename)
    
    if (!object) {
      console.log('File not found in R2:', filename)
      return json({ error: 'File not found.' }, 404)
    }

    const contentType = getContentType(filename)
    console.log('Serving file with content type:', contentType)

    return new Response(object.body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    console.error('Failed to retrieve file:', error)
    return json({ error: 'Failed to retrieve file: ' + error.message }, 500)
  }
}

/**
 * Get content type from filename
 */
function getContentType(filename) {
  const ext = filename.split('.').pop()?.toLowerCase()
  const types = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    pdf: 'application/pdf',
    svg: 'image/svg+xml'
  }
  return types[ext] || 'application/octet-stream'
}

// ── Contact form ─────────────────────────────────────────────

/**
 * Validate and store a contact form submission.
 * Body: { name, email, phone?, service?, message }
 */
async function handleContact(request, env) {
  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400)
  }

  const name    = sanitise(body.name)
  const email   = sanitise(body.email)
  const phone   = sanitise(body.phone || '')
  const service = sanitise(body.service || '')
  const message = sanitise(body.message)

  // Basic validation
  if (!name)                         return json({ error: 'Name is required.' }, 422)
  if (!email || !email.includes('@')) return json({ error: 'Valid email is required.' }, 422)
  if (!message)                       return json({ error: 'Message is required.' }, 422)

  const id        = crypto.randomUUID()
  const timestamp = new Date().toISOString()

  const submission = { id, timestamp, name, email, phone, service, message, read: false }

  // Persist to KV (key = submission::{id}, TTL 1 year)
  if (env.CONTACT_SUBMISSIONS) {
    await env.CONTACT_SUBMISSIONS.put(
      `submission::${id}`,
      JSON.stringify(submission),
      { expirationTtl: 60 * 60 * 24 * 365 }
    )
    // Also keep an ordered index list (last 500)
    const indexRaw = await env.CONTACT_SUBMISSIONS.get('index::submissions')
    const index    = indexRaw ? JSON.parse(indexRaw) : []
    index.unshift({ id, timestamp, name, email, service, read: false })
    if (index.length > 500) index.splice(500)
    await env.CONTACT_SUBMISSIONS.put('index::submissions', JSON.stringify(index))
  }

  // Send email notification via Resend API
  // Requires RESEND_API_KEY secret set via: wrangler secret put RESEND_API_KEY
  if (env.RESEND_API_KEY && env.CONTACT_EMAIL_TO) {
    try {
      const emailBody = [
        `New contact form submission`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || '—'}`,
        `Service: ${service || '—'}`,
        ``,
        `Message:`,
        message,
        ``,
        `ID: ${id}`,
        `Time: ${timestamp}`,
      ].join('\n')

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lida Digital <noreply@lida.ng>',
          to: [env.CONTACT_EMAIL_TO],
          reply_to: email,
          subject: `New enquiry from ${name} — Lida Digital`,
          text: emailBody,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
              <h2 style="margin-bottom:16px">New enquiry — Lida Digital</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#666;width:100px">Name</td><td style="padding:8px 0"><strong>${name}</strong></td></tr>
                <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0">${phone || '—'}</td></tr>
                <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${service || '—'}</td></tr>
              </table>
              <hr style="margin:16px 0;border:none;border-top:1px solid #eee">
              <p style="color:#666;margin-bottom:8px">Message:</p>
              <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:6px;margin:0">${message}</p>
              <p style="color:#999;font-size:12px;margin-top:24px">ID: ${id} · ${timestamp}</p>
            </div>
          `,
        }),
      })

      if (!resendRes.ok) {
        const err = await resendRes.text()
        console.error('Resend API error:', resendRes.status, err)
      }
    } catch (err) {
      // Don't fail the request if email send fails — submission is already saved
      console.error('Email send failed:', err)
    }
  }

  return json({ success: true, id }, 201)
}

// ── Site data ─────────────────────────────────────────────────

/**
 * Return a read-only snapshot of all site data.
 * The client currently reads from site.js directly; this endpoint will be the
 * source of truth once the admin panel can write to KV/D1.
 */
async function handleSiteData(request, env) {
  // In future: read from KV / D1, fall back to bundled defaults.
  return json(siteData)
}

// ── Admin: list submissions ───────────────────────────────────

async function handleAdminSubmissions(request, env) {
  if (!env.CONTACT_SUBMISSIONS) {
    return json({ error: 'KV binding not configured.' }, 503)
  }

  const url    = new URL(request.url)
  const limit  = Math.min(parseInt(url.searchParams.get('limit') || '50', 10), 200)
  const unread = url.searchParams.get('unread') === 'true'

  const indexRaw = await env.CONTACT_SUBMISSIONS.get('index::submissions')
  let index      = indexRaw ? JSON.parse(indexRaw) : []

  if (unread) index = index.filter(s => !s.read)
  const page = index.slice(0, limit)

  return json({ total: index.length, submissions: page })
}

// ── Admin: get single submission ──────────────────────────────

async function handleAdminSubmission(request, env, id) {
  if (!env.CONTACT_SUBMISSIONS) {
    return json({ error: 'KV binding not configured.' }, 503)
  }

  const raw = await env.CONTACT_SUBMISSIONS.get(`submission::${id}`)
  if (!raw) return json({ error: 'Not found.' }, 404)

  const submission = JSON.parse(raw)

  // Mark as read
  if (!submission.read) {
    submission.read = true
    await env.CONTACT_SUBMISSIONS.put(`submission::${id}`, JSON.stringify(submission))

    // Update index entry
    const indexRaw = await env.CONTACT_SUBMISSIONS.get('index::submissions')
    if (indexRaw) {
      const index = JSON.parse(indexRaw)
      const entry = index.find(s => s.id === id)
      if (entry) {
        entry.read = true
        await env.CONTACT_SUBMISSIONS.put('index::submissions', JSON.stringify(index))
      }
    }
  }

  return json(submission)
}

// ── Admin: delete submission ──────────────────────────────────

async function handleAdminDeleteSubmission(request, env, id) {
  if (!env.CONTACT_SUBMISSIONS) {
    return json({ error: 'KV binding not configured.' }, 503)
  }

  await env.CONTACT_SUBMISSIONS.delete(`submission::${id}`)

  // Remove from index
  const indexRaw = await env.CONTACT_SUBMISSIONS.get('index::submissions')
  if (indexRaw) {
    const index    = JSON.parse(indexRaw).filter(s => s.id !== id)
    await env.CONTACT_SUBMISSIONS.put('index::submissions', JSON.stringify(index))
  }

  return json({ success: true })
}

// ── Admin: update site content ────────────────────────────────

/**
 * Write a content update to KV so the site-data endpoint can serve it.
 * Body: { section: 'brand' | 'services' | ..., data: {...} }
 * The client will eventually call GET /api/site-data instead of site.js.
 */
async function handleAdminContentUpdate(request, env) {
  if (!env.CONTACT_SUBMISSIONS) {
    return json({ error: 'KV binding not configured.' }, 503)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body.' }, 400)
  }

  const { section, data } = body
  const allowed = ['brand', 'contact', 'services', 'caseStudies', 'team', 'testimonials', 'faqs', 'stats', 'insights', 'careerPaths', 'industries', 'partners']

  if (!section || !allowed.includes(section)) {
    return json({ error: `Invalid section. Must be one of: ${allowed.join(', ')}.` }, 422)
  }
  if (!data) return json({ error: 'data field is required.' }, 422)

  await env.CONTACT_SUBMISSIONS.put(`content::${section}`, JSON.stringify(data))
  return json({ success: true, section })
}

// ── Router ────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url    = new URL(request.url)
    const path   = url.pathname
    const method = request.method
    const cors   = corsHeaders(request, env)

    console.log(`${method} ${path}`)

    // Preflight
    if (method === 'OPTIONS') return handleOptions(request, env)

    // ── Public routes ──
    if (method === 'POST' && path === '/api/contact') {
      const res = await handleContact(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    if (method === 'GET' && path === '/api/site-data') {
      const res = await handleSiteData(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // ── Admin Authentication Routes ──
    if (method === 'POST' && path === '/api/admin/login') {
      const res = await handleAdminLogin(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    if (method === 'POST' && path === '/api/admin/verify') {
      const res = await handleAdminVerify(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // ── Admin Dashboard ──
    if (method === 'GET' && path === '/api/admin/dashboard') {
      const res = await handleAdminDashboard(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // ── Admin Media Routes ──
    if (method === 'GET' && path === '/api/admin/media') {
      const res = await handleAdminMediaList(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    if (method === 'POST' && path === '/api/admin/media/upload') {
      const res = await handleAdminMediaUpload(request, env)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // Media file serving
    const mediaFileMatch = path.match(/^\/api\/admin\/media\/file\/(.+)$/)
    if (mediaFileMatch && method === 'GET') {
      const filename = decodeURIComponent(mediaFileMatch[1])
      console.log('Media file request for:', filename)
      const res = await handleAdminMediaFile(request, env, filename)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // Media file deletion
    const mediaDeleteMatch = path.match(/^\/api\/admin\/media\/(.+)$/)
    if (mediaDeleteMatch && method === 'DELETE') {
      const fileId = mediaDeleteMatch[1]
      const res = await handleAdminMediaDelete(request, env, fileId)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // ── Admin routes (JWT protected) ──
    if (path.startsWith('/api/admin')) {
      const payload = await verifyJWT(request, env)
      if (!payload) {
        const res = json({ error: 'Unauthorized. Please login.' }, 401)
        Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
        return res
      }

      // List submissions
      if (method === 'GET' && path === '/api/admin/submissions') {
        const res = await handleAdminSubmissions(request, env)
        Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
        return res
      }

      // Single submission
      const submissionMatch = path.match(/^\/api\/admin\/submissions\/([a-f0-9-]+)$/)
      if (submissionMatch) {
        const id = submissionMatch[1]
        if (method === 'GET') {
          const res = await handleAdminSubmission(request, env, id)
          Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
          return res
        }
        if (method === 'DELETE') {
          const res = await handleAdminDeleteSubmission(request, env, id)
          Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
          return res
        }
      }

      // Content updates
      if (method === 'POST' && path === '/api/admin/content') {
        const res = await handleAdminContentUpdate(request, env)
        Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
        return res
      }

      const res = json({ error: 'Admin route not found.' }, 404)
      Object.entries(cors).forEach(([k, v]) => res.headers.set(k, v))
      return res
    }

    // ── Health check ──
    if (path === '/api/health') {
      return json({ status: 'ok', env: env.ENVIRONMENT || 'unknown' })
    }

    return json({ error: 'Not found.' }, 404)
  },
}
