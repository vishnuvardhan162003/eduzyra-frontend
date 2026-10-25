import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from '../components/auth/GoogleButton'
import { useAuth } from '../hooks/useAuth'

export default function Signup() {
  const { googleLogin, logout, loading } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleGoogle = async (credential) => {
    setError('')
    try {
      const data = await googleLogin(credential)
      if (data?.user?.role === 'admin') {
        await logout()
        setError('This is an admin account. Please use the admin login.')
        return
      }
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setError(err?.message || 'Google sign-in failed. Please try again.')
    }
  }

  return (
    <div className="container-page flex min-h-[70vh] items-center justify-center py-12">
      <div className="card-surface w-full max-w-sm p-8">
        <span className="eyebrow">Get started</span>
        <h1 className="mt-2 font-display text-2xl font-bold">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500">
          Start a path in under two minutes. Google verifies your email, so there is no code to enter.
        </p>

        <div className="mt-6">
          <GoogleButton standalone onCredential={handleGoogle} disabled={loading} />
        </div>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-navy hover:text-navy-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
