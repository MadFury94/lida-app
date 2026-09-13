import Cookies from 'js-cookie'
import { API_BASE } from '../lib/api'
import { useState } from 'react'
import { Save, Key, Shield, Database, Globe, AlertTriangle } from 'lucide-react'

export default function Settings() {
  const [settings, setSettings] = useState({
    maxUploadSize: '10',
    allowedFileTypes: 'image/jpeg,image/png,image/webp,image/gif,application/pdf',
    requireAuth: true,
    logActivity: true,
    autoCleanup: false,
    cleanupDays: '30'
  })

  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage({ type: '', text: '' })

    try {
      const token = Cookies.get('admin-token')

      const response = await fetch(`${API_BASE}/api/admin/settings`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      })

      if (response.ok) {
        setMessage({ type: 'success', text: 'Settings saved successfully!' })
      } else {
        const error = await response.json()
        setMessage({ type: 'error', text: error.error || 'Failed to save settings' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    }

    setSaving(false)
  }

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure your admin panel and system preferences</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      {/* File Upload Settings */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="flex items-center mb-4">
          <Database className="h-5 w-5 text-primary mr-3" />
          <h2 className="text-lg font-semibold text-foreground">File Upload Settings</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Maximum Upload Size (MB)
            </label>
            <input
              type="number"
              aria-label="Maximum upload size (MB)"
              name="maxUploadSize"
              value={settings.maxUploadSize}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              min="1"
              max="100"
            />
            <p className="text-sm text-muted-foreground mt-1">Maximum file size in megabytes</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Allowed File Types
            </label>
            <textarea
              aria-label="Allowed file types"
              name="allowedFileTypes"
              value={settings.allowedFileTypes}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="image/jpeg,image/png,application/pdf"
            />
            <p className="text-sm text-muted-foreground mt-1">Comma-separated MIME types</p>
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="flex items-center mb-4">
          <Shield className="h-5 w-5 text-blue-500 mr-3" />
          <h2 className="text-lg font-semibold text-foreground">Security Settings</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-foreground">Require Authentication</label>
              <p className="text-sm text-muted-foreground">Force login for all admin operations</p>
            </div>
            <input
              type="checkbox"
              aria-label="Require authentication"
              name="requireAuth"
              checked={settings.requireAuth}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-ring border-input rounded"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-foreground">Log Activity</label>
              <p className="text-sm text-muted-foreground">Record all admin actions for security</p>
            </div>
            <input
              type="checkbox"
              aria-label="Log activity"
              name="logActivity"
              checked={settings.logActivity}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-ring border-input rounded"
            />
          </div>
        </div>
      </div>

      {/* Maintenance Settings */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="flex items-center mb-4">
          <Globe className="h-5 w-5 text-green-500 mr-3" />
          <h2 className="text-lg font-semibold text-foreground">Maintenance Settings</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-foreground">Auto Cleanup</label>
              <p className="text-sm text-muted-foreground">Automatically delete old files</p>
            </div>
            <input
              type="checkbox"
              aria-label="Auto cleanup"
              name="autoCleanup"
              checked={settings.autoCleanup}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-ring border-input rounded"
            />
          </div>
          
          {settings.autoCleanup && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Cleanup After (Days)
              </label>
              <input
                type="number"
                aria-label="Cleanup after (days)"
              name="cleanupDays"
                value={settings.cleanupDays}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                min="1"
                max="365"
              />
            </div>
          )}
        </div>
      </div>

      {/* System Information */}
      <div className="bg-card rounded-xl shadow-sm border border-border p-6">
        <div className="flex items-center mb-4">
          <Key className="h-5 w-5 text-purple-500 mr-3" />
          <h2 className="text-lg font-semibold text-foreground">System Information</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Environment</h3>
            <p className="text-sm text-muted-foreground">{import.meta.env.DEV ? 'Development' : 'Production'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Version</h3>
            <p className="text-sm text-muted-foreground">Admin Panel v1.0.0</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">API Endpoint</h3>
            <p className="text-sm text-muted-foreground font-mono">
              {import.meta.env.DEV ? 'localhost:8787' : 'lida-backend.workers.dev'}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Security</h3>
            <p className="text-sm text-green-600">✓ JWT Authentication Active</p>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
          <h2 className="text-lg font-semibold text-red-900">Danger Zone</h2>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-red-700">
            These actions are permanent and cannot be undone. Please proceed with caution.
          </p>
          
          <div className="flex space-x-3">
            <button className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
              Clear All Logs
            </button>
            <button className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
              Reset Settings
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4 mr-2" />
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  )
}