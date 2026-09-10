import { useState, useEffect } from 'react'
import { Upload, Search, Trash2, Download, Eye, Filter, Grid, List } from 'lucide-react'

export default function MediaLibrary() {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [filterType, setFilterType] = useState('all')

  const API_BASE = import.meta.env.DEV 
    ? 'http://127.0.0.1:8787' 
    : 'https://lida-backend.your-subdomain.workers.dev'

  useEffect(() => {
    loadFiles()
  }, [])

  const loadFiles = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin-token='))
        ?.split('=')[1]

      const response = await fetch(`${API_BASE}/api/admin/media`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setFiles(data.files || [])
      }
    } catch (error) {
      console.error('Failed to load files:', error)
    }
    setLoading(false)
  }

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files)
    if (selectedFiles.length === 0) return

    setUploading(true)

    for (const file of selectedFiles) {
      try {
        console.log('Uploading file:', file.name, 'Type:', file.type, 'Size:', file.size)
        
        const formData = new FormData()
        formData.append('file', file)

        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin-token='))
          ?.split('=')[1]

        if (!token) {
          alert('Authentication token not found. Please login again.')
          setUploading(false)
          return
        }

        console.log('Making upload request to:', `${API_BASE}/api/admin/media/upload`)

        const response = await fetch(`${API_BASE}/api/admin/media/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        })

        console.log('Upload response status:', response.status)
        
        if (response.ok) {
          const result = await response.json()
          console.log('Upload successful:', result)
          setFiles(prev => [result.file, ...prev])
        } else {
          const error = await response.json()
          console.error('Upload error:', error)
          alert(`Failed to upload ${file.name}: ${error.error}`)
        }
      } catch (error) {
        console.error(`Upload failed for ${file.name}:`, error)
        alert(`Upload failed for ${file.name}: ${error.message}`)
      }
    }

    setUploading(false)
    event.target.value = '' // Reset file input
  }

  const handleDelete = async (fileId, fileName) => {
    if (!confirm(`Are you sure you want to delete "${fileName}"?`)) return

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin-token='))
        ?.split('=')[1]

      const response = await fetch(`${API_BASE}/api/admin/media/${fileId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        setFiles(prev => prev.filter(f => f.id !== fileId))
      } else {
        const error = await response.json()
        alert(`Failed to delete file: ${error.error}`)
      }
    } catch (error) {
      console.error('Delete failed:', error)
      alert('Failed to delete file')
    }
  }

  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || file.type.startsWith(filterType)
    return matchesSearch && matchesFilter
  })

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) {
      return <img src={file.url} alt={file.name} className="w-full h-32 object-cover rounded" />
    }
    return (
      <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
        <span className="text-gray-500 text-xs text-center">{file.type}</span>
      </div>
    )
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
          <p className="text-gray-600">Manage your uploaded files and media assets</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <input
            type="file"
            multiple
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer disabled:opacity-50"
          >
            <Upload className="h-4 w-4 mr-2" />
            {uploading ? 'Uploading...' : 'Upload Files'}
          </label>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Files</option>
            <option value="image">Images</option>
            <option value="application">Documents</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Files Grid/List */}
      {filteredFiles.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No files found</p>
          <p className="text-gray-400 text-sm">Upload some files to get started</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <div key={file.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="p-4">
                {getFileIcon(file)}
                <div className="mt-3">
                  <p className="font-medium text-gray-900 truncate" title={file.name}>
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button
                    onClick={() => window.open(file.url, '_blank')}
                    className="flex-1 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                  >
                    <Eye className="h-3 w-3 inline mr-1" />
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(file.id, file.name)}
                    className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uploaded</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredFiles.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8">
                        {file.type.startsWith('image/') ? (
                          <img src={file.url} alt={file.name} className="h-8 w-8 object-cover rounded" />
                        ) : (
                          <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">DOC</span>
                          </div>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{file.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatFileSize(file.size)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(file.uploadedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => window.open(file.url, '_blank')}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(file.id, file.name)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}