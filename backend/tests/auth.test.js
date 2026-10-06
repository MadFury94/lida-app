import { test } from 'node:test'
import assert from 'node:assert/strict'
import { JWT, hashPassword, verifyPassword } from '../src/auth.js'

test('password verification uses a salted hash and rejects incorrect or malformed credentials', async () => {
  const hash = await hashPassword('test-only-password')
  assert.notEqual(hash, await hashPassword('test-only-password'))
  assert.equal(await verifyPassword('test-only-password', hash), true)
  assert.equal(await verifyPassword('incorrect', hash), false)
  assert.equal(await verifyPassword({}, hash), false)
  assert.equal(await verifyPassword('test-only-password', 'invalid'), false)
})

test('JWT verification rejects altered, expired, missing-expiry and non-admin tokens', async () => {
  const secret = 'test-only-signing-secret'
  const payload = { username: 'editor', role: 'admin', exp: Math.floor(Date.now() / 1000) + 600 }
  const token = await JWT.sign(payload, secret)
  assert.deepEqual(await JWT.verify(token, secret), payload)
  assert.equal(await JWT.verify(token, 'wrong-secret'), null)
  assert.equal(await JWT.verify(token + '.extra', secret), null)
  assert.equal(await JWT.verify(await JWT.sign({ ...payload, exp: 1 }, secret), secret), null)
  assert.equal(await JWT.verify(await JWT.sign({ ...payload, exp: undefined }, secret), secret), null)
  assert.equal(await JWT.verify(await JWT.sign({ ...payload, role: 'viewer' }, secret), secret), null)
  assert.equal(await JWT.verify(token, undefined), null)
})
