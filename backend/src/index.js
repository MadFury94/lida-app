// ============================================================
// LIDA DIGITAL — Cloudflare Workers Backend
// Routes:
//   POST /api/contact          — public contact form
//   GET  /api/site-data        — full site.js data snapshot (public read)
//   GET  /api/admin/*          — admin reads  (requires ADMIN_API_KEY header)
//   POST /api/admin/*          — admin writes (requires ADMIN_API_KEY header)
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

  if (!isAllowed) return {}
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Key',
    'Access-Control-Max-Age': '86400',
  }
}

/**
 * Handle CORS preflight.
 */
function handleOptions(request, env) {
  const headers = corsHeaders(request, env)
  return new Response(null, { status: 204, headers })
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

    // ── Admin routes (require X-Admin-Key) ──
    if (path.startsWith('/api/admin')) {
      if (!isAdmin(request, env)) {
        return json({ error: 'Unauthorized.' }, 401)
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

      return json({ error: 'Admin route not found.' }, 404)
    }

    // ── Health check ──
    if (path === '/api/health') {
      return json({ status: 'ok', env: env.ENVIRONMENT || 'unknown' })
    }

    return json({ error: 'Not found.' }, 404)
  },
}
