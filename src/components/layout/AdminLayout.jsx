import { Outlet, useNavigate } from 'react-router-dom'
import { Eye, LogOut, ShieldCheck } from 'lucide-react'
import Logo from '../common/Logo'
import { useAuth } from '../../hooks/useAuth'
import { startPreview, stopPreview } from '../../utils/adminPreview'

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handlePreview = () => {
    startPreview()
    navigate('/')
  }

  const handleLogout = async () => {
    stopPreview()
    await logout()
    navigate('/admin/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-3 sm:h-20">
          <div className="flex items-center gap-3">
            <Logo size="lg" />
            <span className="hidden items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-navy sm:inline-flex">
              <ShieldCheck size={13} />
              Admin panel
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" onClick={handlePreview} className="btn-secondary !px-4 !py-2 text-xs">
              <Eye size={15} />
              <span className="hidden sm:inline">View as student</span>
              <span className="sm:hidden">Preview</span>
            </button>
            <span className="hidden text-sm font-medium text-slate-500 md:block">{user?.name}</span>
            <button type="button" onClick={handleLogout} className="btn-primary !px-4 !py-2 text-xs">
              <LogOut size={15} />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}