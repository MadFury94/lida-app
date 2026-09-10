import { useState, useEffect } from 'react'
import { Users, Upload, FileText, Activity, TrendingUp, Calendar } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalFiles: 0,
    totalSize: 0,
    recentUploads: 0,
    systemHealth: 'good'
  })

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  useEffect(() => {
    // Load dashboard stats
    const loadStats = async () => {
      try {
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin-token='))
          ?.split('=')[1]

        const API_BASE = import.meta.env.DEV 
          ? 'http://127.0.0.1:8787' 
          : 'https://lida-backend.your-subdomain.workers.dev'

        const response = await fetch(`${API_BASE}/api/admin/dashboard`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setStats(data.stats)
        }
      } catch (error) {
        console.error('Failed to load dashboard stats:', error)
      }
    }

    loadStats()
  }, [])

  const statCards = [
    {
      title: 'Total Files',
      value: stats.totalFiles,
      icon: FileText,
      color: 'blue',
      change: `+${stats.recentUploads} this week`
    },
    {
      title: 'Storage Used',
      value: formatFileSize(stats.totalSize),
      icon: Upload,
      color: 'green',
      change: 'Within limits'
    },
    {
      title: 'System Health',
      value: stats.systemHealth === 'good' ? 'Excellent' : 'Warning',
      icon: Activity,
      color: stats.systemHealth === 'good' ? 'green' : 'yellow',
      change: 'All systems operational'
    },
    {
      title: 'Last Activity',
      value: 'Just now',
      icon: Calendar,
      color: 'purple',
      change: 'Active session'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-blue-600 bg-blue-50',
      green: 'bg-green-500 text-green-600 bg-green-50',
      yellow: 'bg-yellow-500 text-yellow-600 bg-yellow-50',
      purple: 'bg-purple-500 text-purple-600 bg-purple-50'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to the Lida admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const [bgColor, textColor, cardBg] = getColorClasses(stat.color).split(' ')
          const Icon = stat.icon
          
          return (
            <div key={index} className={`${cardBg} p-6 rounded-xl shadow-sm border border-gray-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 ${bgColor} rounded-lg`}>
                  <Icon className={`h-6 w-6 text-white`} />
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm ${textColor} font-medium`}>
                  {stat.change}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Backend API</span>
              <span className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">R2 Storage</span>
              <span className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Authentication</span>
              <span className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Secure
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/media"
              className="flex items-center p-3 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Upload className="h-5 w-5 mr-3 text-orange-500" />
              Upload Media Files
            </a>
            <a
              href="/users"
              className="flex items-center p-3 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Users className="h-5 w-5 mr-3 text-blue-500" />
              Manage Users
            </a>
            <a
              href="/settings"
              className="flex items-center p-3 text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Activity className="h-5 w-5 mr-3 text-green-500" />
              System Settings
            </a>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-orange-500 mr-3" />
          <div>
            <h4 className="font-medium text-orange-900">Security Notice</h4>
            <p className="text-sm text-orange-700 mt-1">
              This admin panel is secured with JWT authentication and activity logging. 
              All actions are monitored and recorded for security purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}