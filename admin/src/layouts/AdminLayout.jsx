import { useEffect, useState } from 'react'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { useAuth } from '../contexts/AuthContext'
import { Button } from '../components/ui/button'
import { LayoutDashboard, Images, Users, Settings, PanelLeft, Search, Moon, Sun, LogOut, ChevronsUpDown, X, ArrowUpRight, BriefcaseBusiness, Layers, Newspaper, UsersRound } from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, group: 'General' },
  { to: '/media', label: 'Media Library', icon: Images, group: 'General' },
  { to: '/users', label: 'Users', icon: Users, group: 'General' },
  { to: '/team', label: 'Team members', icon: UsersRound, group: 'Website content' },
  { to: '/projects', label: 'Projects', icon: BriefcaseBusiness, group: 'Website content' },
  { to: '/services', label: 'Services', icon: Layers, group: 'Website content' },
  { to: '/blogs', label: 'Blogs', icon: Newspaper, group: 'Website content' },
  { to: '/settings', label: 'Settings', icon: Settings, group: 'Workspace' },
]

export default function AdminLayout() {
  const { logout, user } = useAuth()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const current = navItems.find(item => item.to === location.pathname)?.label || 'Page not found'
  const initials = (user?.username || 'Admin').slice(0, 2).toUpperCase()
  useEffect(() => {
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setSearchOpen(open => !open)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('lida-admin-theme', next ? 'dark' : 'light') } catch { /* Storage may be unavailable. */ }
  }
  const sidebar = (compact = false) => <>
    <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="flex h-16 items-center gap-3 px-4" aria-label="Lida Admin home">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary p-1"><img src="https://lida.ng/assets/img/logo/Lida%20Favicon.png" alt="" className="max-h-full max-w-full" /></span>
      {!compact && <div className="leading-tight"><span className="font-semibold">Lida Admin</span><p className="mt-1 text-xs text-muted-foreground">Administration workspace</p></div>}
    </Link>
    <nav aria-label="Main navigation" className="flex-1 space-y-6 overflow-y-auto px-2 py-4">
      {['General', 'Website content', 'Workspace'].map(group => <div key={group}>
        {!compact && <p className="mb-2 px-3 text-xs font-medium text-muted-foreground">{group}</p>}
        <div className="space-y-1">{navItems.filter(item => item.group === group).map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} title={compact ? label : undefined} aria-label={label} onClick={() => setMobileOpen(false)} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''} ${compact ? 'justify-center px-0' : ''}`}><Icon className="size-4 shrink-0" />{!compact && label}</NavLink>)}</div>
      </div>)}
    </nav>
    <div className="border-t p-2">
      <Dropdown.Root><Dropdown.Trigger asChild><button className="flex w-full items-center gap-3 rounded-md p-2 hover:bg-accent" aria-label="Account menu">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-semibold">{initials}</span>
        {!compact && <><span className="min-w-0 flex-1 text-left text-sm"><span className="block truncate font-medium">{user?.username || 'Admin'}</span><span className="text-xs text-muted-foreground">Administrator</span></span><ChevronsUpDown className="size-4" /></>}
      </button></Dropdown.Trigger><Dropdown.Portal><Dropdown.Content side="top" align="start" sideOffset={8} className="z-50 min-w-48 rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
        <Dropdown.Item asChild><Link to="/settings" onClick={() => setMobileOpen(false)} className="nav-item"><Settings className="size-4" />Settings</Link></Dropdown.Item>
        <Dropdown.Separator className="my-1 border-t" />
        <Dropdown.Item onSelect={logout} className="nav-item cursor-pointer"><LogOut className="size-4" />Sign out</Dropdown.Item>
      </Dropdown.Content></Dropdown.Portal></Dropdown.Root>
    </div>
  </>
  return <div className="flex min-h-svh">
    <a href="#main-content" className="sr-only fixed z-50 rounded bg-primary p-3 text-primary-foreground focus:not-sr-only">Skip to content</a>
    <aside className={`sticky top-0 hidden h-svh shrink-0 flex-col border-r bg-sidebar md:flex ${collapsed ? 'w-16' : 'w-64'}`}>{sidebar(collapsed)}</aside>
    <div className="flex min-w-0 flex-1 flex-col">
      <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
        <Button variant="ghost" size="icon" className="hidden md:inline-flex" aria-label="Toggle sidebar" aria-expanded={!collapsed} onClick={() => setCollapsed(!collapsed)}><PanelLeft /></Button>
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation"><PanelLeft /></Button></Dialog.Trigger>
          <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" /><Dialog.Content className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-background" aria-describedby={undefined}>
            <Dialog.Title className="sr-only">Navigation</Dialog.Title><Dialog.Close className="absolute right-2 top-2 rounded p-1" aria-label="Close navigation"><X className="size-4" /></Dialog.Close>{sidebar()}
          </Dialog.Content></Dialog.Portal>
        </Dialog.Root>
        <div className="mr-auto border-l pl-3 text-sm font-medium">{current}</div>
        <Dialog.Root open={searchOpen} onOpenChange={open => { setSearchOpen(open); if (!open) setQuery('') }}>
          <Dialog.Trigger asChild><Button variant="outline" className="text-muted-foreground sm:w-56 sm:justify-start" aria-label="Search pages"><Search /><span className="hidden sm:inline">Search pages...</span><kbd className="ml-auto hidden rounded border px-1 text-xs sm:inline">Ctrl K</kbd></Button></Dialog.Trigger>
          <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" /><Dialog.Content className="fixed left-1/2 top-[20%] z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-xl border bg-popover p-4 text-popover-foreground shadow-xl" aria-describedby={undefined}>
            <Dialog.Title className="mb-3 font-semibold">Go to page</Dialog.Title><Dialog.Close className="absolute right-4 top-4" aria-label="Close search"><X className="size-4" /></Dialog.Close>
            <input className="form-input" aria-label="Search pages" placeholder="Type a page name..." value={query} onChange={event => setQuery(event.target.value)} />
            <div className="mt-3 space-y-1">{navItems.filter(item => item.label.toLowerCase().includes(query.toLowerCase())).map(({ to, label, icon: Icon }) => <Link key={to} to={to} onClick={() => { setSearchOpen(false); setQuery('') }} className="nav-item"><Icon className="size-4" />{label}<ArrowUpRight className="ml-auto size-4" /></Link>)}
              {!navItems.some(item => item.label.toLowerCase().includes(query.toLowerCase())) && <p className="p-4 text-center text-sm text-muted-foreground">No pages found.</p>}
            </div>
          </Dialog.Content></Dialog.Portal>
        </Dialog.Root>
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun /> : <Moon />}</Button>
        <Link to="/settings" aria-label="Account settings" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">{initials}</Link>
      </header>
      <main id="main-content" className="mx-auto w-full max-w-[1600px] flex-1 p-4 md:p-6 lg:p-8"><Outlet /></main>
    </div>
  </div>
}


