import { Outlet, NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, Shield, Upload, Users, Settings, BarChart3 } from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { to: '/media', label: 'Media Library', icon: Upload },
  { to: '/users', label: 'Users', icon: Users },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout() {
  const { logout, user } = useAuth()

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout()
    }
  }

  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-orange-500 text-white shadow-lg'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 flex flex-col shadow-xl">
        <div className="px-6 py-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-orange-500" />
            <div>
              <span className="text-white text-xl font-bold">Lida Admin</span>
              <p className="text-gray-400 text-xs">Secure Panel</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={linkClass}>
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="px-4 py-4 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-400">
              <p className="font-medium text-gray-300">{user?.username}</p>
              <p className="text-xs">Administrator</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-500">
            v1.0.0 • Secure Mode
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm px-6 py-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-800 font-semibold text-xl">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-gray-600">System Active</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
