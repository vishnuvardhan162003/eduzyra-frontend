import { useState } from 'react'
import { Menu, X, LayoutDashboard, LogOut, ShieldCheck, GraduationCap, Search } from 'lucide-react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import Logo from '../common/Logo'
import { NAV_LINKS } from '../../constants/site'
import { useAuth } from '../../hooks/useAuth'
import { stopPreview } from '../../utils/adminPreview'

const ROLE_HOME = {
  student: { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  instructor: { to: '/instructor', label: 'Instructor', icon: GraduationCap },
  admin: { to: '/admin', label: 'Admin', icon: ShieldCheck },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, user, role, logout } = useAuth()
  const navigate = useNavigate()
  const home = ROLE_HOME[role] ?? ROLE_HOME.student
  const isAdminPreview = isAuthenticated && role === 'admin'

  const linkClasses = ({ isActive }) =>
    `font-display text-xs uppercase tracking-[0.16em] font-bold transition-all duration-200 px-3 py-1.5 rounded-full ${
      isActive
        ? 'text-white bg-white/20'
        : 'text-white/85 hover:text-white hover:bg-white/10'
    }`

  const handleLogout = () => {
    stopPreview()
    logout()
    setIsOpen(false)
    navigate('/')
  }

  const backToAdmin = () => {
    stopPreview()
    setIsOpen(false)
    navigate('/admin')
  }

  return (
    <header className="sticky top-0 z-40 bg-circle-teal text-white border-b border-white/10 shadow-sm">
      {isAdminPreview && (
        <div className="bg-[#1C444D] px-4 py-1.5 text-center font-mono text-[11px] uppercase tracking-wider text-white">
          Previewing as student ·{' '}
          <button type="button" onClick={backToAdmin} className="font-semibold underline text-peach">
            Back to Admin Panel
          </button>
        </div>
      )}

      <div className="container-page flex h-18 sm:h-20 items-center justify-between">
        <Logo variant="light" size="lg" />

        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            to="/courses"
            aria-label="Search courses"
            className="text-white/80 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
          >
            <Search size={18} />
          </Link>

          {isAuthenticated ? (
            isAdminPreview ? (
              <button
                type="button"
                onClick={backToAdmin}
                className="rounded-full bg-white text-[#1D353A] px-5 py-2 font-display text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-100 transition-all"
              >
                <ShieldCheck size={14} className="inline mr-1.5" />
                Admin Panel
              </button>
            ) : (
              <>
                <NavLink
                  to={home.to}
                  className="rounded-full bg-white/15 text-white border border-white/30 px-5 py-2 font-display text-xs font-bold uppercase tracking-wider hover:bg-white/25 transition-all inline-flex items-center gap-1.5"
                >
                  <home.icon size={14} />
                  <span>{user?.name || home.label}</span>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="rounded-full bg-white text-[#1D353A] px-5 py-2 font-display text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-100 transition-all inline-flex items-center gap-1.5"
                >
                  <LogOut size={14} />
                  Log out
                </button>
              </>
            )
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-full bg-white text-[#1D353A] px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-100 transition-all"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className="rounded-full bg-peach text-[#1D353A] px-6 py-2.5 font-display text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#DE997B] transition-all"
              >
                Start for free
              </NavLink>
            </>
          )}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/15 bg-circle-tealdark text-white md:hidden animate-in fade-in duration-200">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/' || link.to === ''}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2.5 font-display text-xs uppercase tracking-wider font-bold transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-3 flex flex-col gap-2.5 border-t border-white/15 pt-3">
              {isAuthenticated ? (
                isAdminPreview ? (
                  <button type="button" onClick={backToAdmin} className="btn-primary w-full text-center">
                    <ShieldCheck size={14} />
                    Back to Admin Panel
                  </button>
                ) : (
                  <>
                    <NavLink to={home.to} onClick={() => setIsOpen(false)} className="btn-secondary w-full text-center">
                      <home.icon size={14} />
                      {home.label}
                    </NavLink>
                    <button onClick={handleLogout} className="btn-primary w-full text-center">
                      <LogOut size={14} />
                      Log out
                    </button>
                  </>
                )
              ) : (
                <>
                  <NavLink to="/login" onClick={() => setIsOpen(false)} className="btn-secondary w-full text-center">
                    Sign In
                  </NavLink>
                  <NavLink to="/signup" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                    Start for free
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
