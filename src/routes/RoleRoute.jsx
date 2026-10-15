import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import Spinner from '../components/common/Spinner'

export default function RoleRoute({ allow = [], children }) {
const { user, initializing } = useAuth()

if (initializing) {
return <Spinner label="Checking session" />
}

if (!user) {
return <Navigate to="/admin/login" replace />
}

if (!allow.includes(user.role)) {
return <Navigate to="/admin/login" replace />
}

return children
}
