import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { isPreviewing } from '../utils/adminPreview'

// Student site: admin ki block, "View as student" preview lo matrame allow.
export default function StudentSiteGuard() {
  const { role } = useAuth()
  if (role === 'admin' && !isPreviewing()) return <Navigate to="/admin" replace />
  return <Outlet />
}