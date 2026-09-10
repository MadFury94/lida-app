import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext(null)

const API_BASE = import.meta.env.DEV 
  ? 'http://127.0.0.1:8787' 
  : 'https://lida-backend.your-subdomain.workers.dev'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const token = Cookies.get('admin-token')
    if (token) {
      verifyToken(token)
    } else {
      setLoading(false)
    }
  }, [])

  const verifyToken = async (token) => {
    try {
      const response = await fetch(`${API_BASE}/api/admin/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      
      if (response.ok) {
        const userData = await response.json()
        setUser(userData.user)
      } else {
        // Invalid token - remove it
        Cookies.remove('admin-token')
        setUser(null)
      }
    } catch (error) {
      console.error('Token verification failed:', error)
      Cookies.remove('admin-token')
      setUser(null)
    }
    setLoading(false)
  }

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      const data = await response.json()

      if (response.ok) {
        // Store token in secure cookie (httpOnly in production)
        Cookies.set('admin-token', data.token, {
          expires: 1, // 1 day
          secure: !import.meta.env.DEV, // HTTPS only in production
          sameSite: 'Strict'
        })
        
        setUser(data.user)
        return { success: true }
      } else {
        return { success: false, error: data.error }
      }
    } catch (error) {
      return { success: false, error: 'Network error. Please try again.' }
    }
  }

  const logout = () => {
    Cookies.remove('admin-token')
    setUser(null)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}