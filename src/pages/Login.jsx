import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AuthForm from '../components/auth/AuthForm'
import GoogleButton from '../components/auth/GoogleButton'
import { useAuth } from '../hooks/useAuth'

const ROLE_HOME = { student: '/dashboard', instructor: '/instructor', admin: '/admin' }

export default function Login() {
  const { login, googleLogin, logout, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const [adminBlocked, setAdminBlocked] = useState(false)

  // Admin account ikkada login ayithe logout chesi admin login ki pampistundi
  const finish = async (data) => {
    const role = data?.user?.role || 'student'
    if (role === 'admin') {
      await logout()
      setAdminBlocked(true)
      setError('This is an admin account. Please use the admin login.')
      return
    }
    navigate(location.state?.from || ROLE_HOME[role] || '/dashboard', { replace: true })
  }

  const handleSubmit = async (form) => {
    setError('')
    setAdminBlocked(false)
    try {
      await finish(await login({ email: form.email, password: form.password }))
    } catch (err) {
      setError(err?.message || 'Login failed. Check your email and password.')
    }
  }

  const handleGoogle = async (credential) => {
    setError('')
    setAdminBlocked(false)
    try {
      await finish(await googleLogin(credential))
    } catch (err) {
      setError(err?.message || 'Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="card-surface w-full max-w-sm p-8">
        <span className="eyebrow">Welcome back</span>
        <h1 className="mt-2 font-display text-2xl font-bold">Log in to Eduzyra</h1>
        <p className="mt-1 text-sm text-slate-500">Continue your learning path.</p>

        <div className="mt-6">
          <AuthForm mode="login" onSubmit={handleSubmit} loading={loading} />
          <GoogleButton onCredential={handleGoogle} disabled={loading} />
        </div>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}

        {adminBlocked && (
          <p className="mt-2 text-center text-sm">
            <Link to="/admin/login" className="font-semibold text-navy hover:text-navy-700">
              Go to admin login
            </Link>
          </p>
        )}

        <p className="mt-6 text-center text-sm text-slate-500">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-navy hover:text-navy-700">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}