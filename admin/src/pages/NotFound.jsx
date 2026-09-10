import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Page Not Found</h2>
          <p className="text-gray-600 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            to="/dashboard"
            className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-gray-500">
            If you think this is an error, please contact the administrator.
          </p>
        </div>
      </div>
    </div>
  )
}