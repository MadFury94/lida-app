import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

try {
  document.documentElement.classList.toggle('dark', localStorage.getItem('lida-admin-theme') === 'dark')
} catch { /* Use the light theme when storage is unavailable. */ }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
