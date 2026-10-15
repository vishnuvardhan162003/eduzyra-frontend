import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

// Buy / enroll / dashboard pages: admin ki eppudu block (preview lo kuda).
export default function StudentOnly({ children }) {
  const { role } = useAuth()
  if (role === 'admin') return <Navigate to="/admin" replace />
  return children
}