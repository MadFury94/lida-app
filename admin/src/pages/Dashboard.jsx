import { API_BASE } from '../lib/api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { FileText, HardDrive, Activity, Upload, ArrowUpRight, Images, Users, Settings, RefreshCw } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [attempt, setAttempt] = useState(0)
  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(`${API_BASE}/api/admin/dashboard`, { headers: { Authorization: `Bearer ${Cookies.get('admin-token')}` }, signal: controller.signal })
        if (!response.ok) throw new Error('Unable to load dashboard statistics.')
        const data = await response.json()
        setStats(data.stats)
      } catch (err) { if (err.name !== 'AbortError') setError('Unable to load dashboard statistics. Check your connection and try again.') }
      finally { if (!controller.signal.aborted) setLoading(false) }
    }
    load()
    return () => controller.abort()
  }, [attempt])
  const size = (bytes = 0) => bytes < 1024 * 1024 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`
  const cards = [
    { label: 'Total Files', value: stats?.totalFiles, detail: 'Files in your media library', icon: FileText },
    { label: 'Storage Used', value: stats ? size(stats.totalSize) : null, detail: 'Total uploaded file size', icon: HardDrive },
    { label: 'Recent Uploads', value: stats?.recentUploads, detail: 'Uploaded in the last 7 days', icon: Upload },
    { label: 'System Health', value: stats ? (stats.systemHealth === 'good' ? 'Healthy' : 'Needs attention') : null, detail: 'Latest reported system status', icon: Activity },
  ]
  return <div className="space-y-6">
    <div className="flex flex-wrap items-center justify-between gap-4"><div><h1 className="page-heading">Dashboard</h1><p className="page-description">Welcome back. Here’s an overview of your workspace.</p></div><Button asChild><Link to="/media"><Upload />Upload files</Link></Button></div>
    <div className="border-b pb-3"><span className="rounded-md bg-muted px-3 py-1.5 text-sm font-medium">Overview</span></div>
    {error && <div role="alert" className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm"><span>{error}</span><Button variant="outline" size="sm" onClick={() => setAttempt(value => value + 1)}><RefreshCw />Retry</Button></div>}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-busy={loading}>{cards.map(({ label, value, detail, icon: Icon }) => <Card key={label} className="gap-3"><CardHeader className="flex flex-row items-center justify-between"><CardTitle className="text-sm font-medium">{label}</CardTitle><Icon className="size-4 text-muted-foreground" /></CardHeader><CardContent><div className="text-2xl font-bold tracking-tight">{loading ? <span className="inline-block h-8 w-24 animate-pulse rounded bg-muted" aria-label="Loading" /> : error ? '—' : value ?? '—'}</div><p className="mt-1 text-xs text-muted-foreground">{detail}</p></CardContent></Card>)}</div>
    <div className="grid gap-4 lg:grid-cols-7">
      <Card className="lg:col-span-4"><CardHeader><CardTitle>Media overview</CardTitle><CardDescription>Your files and recent upload activity.</CardDescription></CardHeader><CardContent className="space-y-6">
        <div className="flex min-h-48 flex-col items-center justify-center rounded-lg border border-dashed bg-muted/30 p-6 text-center"><Images className="mb-4 size-9 text-muted-foreground" /><h2 className="font-semibold">{loading ? 'Loading your library…' : error ? 'Statistics unavailable' : stats?.totalFiles ? `${stats.totalFiles} files in your library` : 'Your library starts here'}</h2><p className="mt-2 max-w-sm text-sm text-muted-foreground">Upload images and documents, find your assets, and manage everything in one place.</p><Button asChild variant="outline" className="mt-5"><Link to="/media">Open media library<ArrowUpRight /></Link></Button></div>
        <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Uploads this week</span><span className="font-medium">{loading || error ? '—' : stats?.recentUploads ?? 0}</span></div>
      </CardContent></Card>
      <Card className="lg:col-span-3"><CardHeader><CardTitle>Workspace</CardTitle><CardDescription>Quick access to your administration tools.</CardDescription></CardHeader><CardContent className="space-y-2">{[
        { to: '/media', title: 'Media Library', description: 'Upload and organize your files', icon: Images },
        { to: '/users', title: 'Users', description: 'View your workspace users', icon: Users },
        { to: '/settings', title: 'Settings', description: 'Manage your workspace preferences', icon: Settings },
      ].map(({ to, title, description, icon: Icon }) => <Link key={to} to={to} className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-accent"><span className="flex size-10 shrink-0 items-center justify-center rounded-full border"><Icon className="size-4" /></span><div className="flex-1"><p className="text-sm font-medium">{title}</p><p className="mt-1 text-xs text-muted-foreground">{description}</p></div><ArrowUpRight className="size-4 text-muted-foreground" /></Link>)}</CardContent></Card>
    </div>
  </div>
}
