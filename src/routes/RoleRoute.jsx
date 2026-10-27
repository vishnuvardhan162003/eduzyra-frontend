import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Spinner from '../components/common/Spinner'

export default function RoleRoute({ allow = [], children }) {
  const { isAuthenticated, role, initializing } = useAuth()
  const location = useLocation()

  if (initializing) {
    return <Spinner label="Checking session" />
  }

  if (!isAuthenticated) {
    const loginPath = allow.includes('admin') ? '/admin/login' : '/login'
    return <Navigate to={loginPath} replace state={{ from: location.pathname }} />
  }

  const currentRole = String(role || '').toLowerCase()
  if (!allow.includes(currentRole)) {
    const fallback = currentRole === 'admin' ? '/admin' : '/dashboard'
    return <Navigate to={fallback} replace />
  }

  return children
}