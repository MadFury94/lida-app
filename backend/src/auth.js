const encoder = new TextEncoder()
const encode = value => btoa(String.fromCharCode(...value)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
const decode = value => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0))

export async function hashPassword(password, salt = crypto.getRandomValues(new Uint8Array(16))) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 100000 }, key, 256)
  return `pbkdf2-sha256$100000$${encode(salt)}$${encode(new Uint8Array(bits))}`
}

export async function verifyPassword(password, stored) {
  if (typeof password !== 'string' || password.length > 1024 || typeof stored !== 'string') return false
  try {
    const [algorithm, iterations, salt, digest] = stored.split('$')
    if (algorithm !== 'pbkdf2-sha256' || iterations !== '100000' || !salt || !digest) return false
    const calculated = (await hashPassword(password, decode(salt))).split('$')[3]
    const a = decode(calculated), b = decode(digest)
    if (a.length !== b.length) return false
    let difference = 0
    for (let i = 0; i < a.length; i++) difference |= a[i] ^ b[i]
    return difference === 0
  } catch { return false }
}

export const JWT = {
  async sign(payload, secret) {
    if (!secret) throw new Error('Authentication is not configured.')
    const data = `${encode(encoder.encode(JSON.stringify({ alg: 'HS256', typ: 'JWT' })))}.${encode(encoder.encode(JSON.stringify(payload)))}`
    const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
    return `${data}.${encode(new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(data))))}`
  },
  async verify(token, secret) {
    if (!secret || typeof token !== 'string') return null
    try {
      const parts = token.split('.')
      if (parts.length !== 3) return null
      const [header, body, signature] = parts
      if (JSON.parse(new TextDecoder().decode(decode(header))).alg !== 'HS256') return null
      const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify'])
      if (!await crypto.subtle.verify('HMAC', key, decode(signature), encoder.encode(`${header}.${body}`))) return null
      const payload = JSON.parse(new TextDecoder().decode(decode(body)))
      if (!Number.isFinite(payload.exp) || payload.exp <= Date.now() / 1000 || payload.role !== 'admin' || !payload.username) return null
      return payload
    } catch { return null }
  },
}
