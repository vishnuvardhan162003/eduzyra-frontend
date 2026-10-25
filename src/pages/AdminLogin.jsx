import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import Logo from '../components/common/Logo'
import AuthForm from '../components/auth/AuthForm'
import { useAuth } from '../hooks/useAuth'

export default function AdminLogin() {
  const { login, logout, loading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  // Admin kaani account aithe logout chesi block chestundi
  const finish = async (data) => {
    if (data?.user?.role !== 'admin') {
      await logout()
      setError('This is not an admin account. Students, please use the student login.')
      return
    }
    navigate('/admin', { replace: true })
  }

  const handleSubmit = async (form) => {
    setError('')
    try {
      const data = await login({ email: form.email, password: form.password })
      await finish(data)
    } catch (err) {
      setError(err?.message || 'Login failed. Check your email and password.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-5 py-12">
      <div className="card-surface w-full max-w-sm p-8">
        <Logo size="lg" />

        <span className="eyebrow mt-6 inline-flex items-center gap-1.5">
          <ShieldCheck size={14} />
          Admin access
        </span>
        <h1 className="mt-2 font-display text-2xl font-bold">Admin login</h1>
        <p className="mt-1 text-sm text-slate-500">Restricted area. Authorised staff only.</p>

        <div className="mt-6">
          <AuthForm mode="login" onSubmit={handleSubmit} loading={loading} />
        </div>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}

        <p className="mt-6 text-center text-sm text-slate-500">
          Not an admin?{' '}
          <Link to="/login" className="font-semibold text-navy hover:text-navy-700">
            Student login
          </Link>
        </p>
      </div>
    </div>
  )
}
