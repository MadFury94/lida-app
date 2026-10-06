import { useEffect, useState } from 'react'
import { adminApi } from '../lib/api'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'

export default function Settings() {
  const [settings, setSettings] = useState(null)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    adminApi('/settings', { signal: controller.signal }).then(data => { setSettings(data.settings); setError('') }).catch(err => { if (err.name !== 'AbortError') setError(err.message) })
    return () => controller.abort()
  }, [attempt])
  async function save(event) {
    event.preventDefault(); setSaving(true); setError(''); setMessage('')
    try {
      const data = await adminApi('/settings', { method: 'PUT', body: JSON.stringify(settings) })
      setSettings(data.settings); setMessage('Settings saved successfully!')
    } catch (err) { setError(err.message) }
    finally { setSaving(false) }
  }
  return <div className="max-w-4xl space-y-6">
    <div><h1 className="page-heading">Settings</h1><p className="page-description">Manage media uploads for your workspace.</p></div>
    {error && <div role="alert" className="rounded-lg border p-4 text-destructive">{error} <Button variant="outline" onClick={() => setAttempt(n => n + 1)}>Retry</Button></div>}
    {message && <p role="status" className="rounded-lg border p-4">{message}</p>}
    {!settings ? <p role="status">Loading settings?</p> : <form onSubmit={save} className="space-y-6">
      <Card><CardHeader><CardTitle>File upload settings</CardTitle></CardHeader><CardContent className="space-y-4">
        <label className="block space-y-2"><span>Maximum upload size (MB)</span><input className="form-input" type="number" min="1" max="25" required value={settings.maxUploadSize} onChange={e => setSettings({ ...settings, maxUploadSize: e.target.value })} /></label>
        <label className="block space-y-2"><span>Allowed file types</span><textarea className="form-input" required rows="3" value={settings.allowedFileTypes} onChange={e => setSettings({ ...settings, allowedFileTypes: e.target.value })} /></label>
        <p className="text-sm text-muted-foreground">Supported types: image/jpeg, image/png, image/webp, image/gif, application/pdf.</p>
      </CardContent></Card>
      <Card><CardHeader><CardTitle>Workspace access</CardTitle></CardHeader><CardContent><p className="text-sm text-muted-foreground">Sign-in is required for all administration actions. Your account credentials are managed by the site administrator.</p></CardContent></Card>
      <Button type="submit" disabled={saving}>{saving ? 'Saving?' : 'Save Settings'}</Button>
    </form>}
  </div>
}
