import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { apiFetch, getToken, setToken } from '../services/api'
import {
  fetchMe,
  googleLoginRequest,
  loginRequest,
  logoutRequest,
  updateProfileRequest,
} from '../services/authService'

export const AuthContext = createContext(null)

export const ROLES = {
  STUDENT: 'student',
  INSTRUCTOR: 'instructor',
  ADMIN: 'admin',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [initializing, setInitializing] = useState(true)
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([])
  const loadEnrollments = useCallback(async () => {
    try {
      const data = await apiFetch('/api/enrollments/me', { method: 'GET' })
      const list = Array.isArray(data) ? data : data?.enrollments || []
      const ids = list
        .map((e) => {
          if (typeof e === 'string') return e
          const c = e?.course
          if (!c) return e?.courseId || null
          if (typeof c === 'string') return c
          return c?.slug || c?._id || String(c?.id || '')
        })
        .filter(Boolean)
      setEnrolledCourseIds(ids)
    } catch {
      setEnrolledCourseIds([])
    }
  }, [])

  // Rehydrate session on mount
  useEffect(() => {
    let cancelled = false
    async function init() {
      if (!getToken()) {
        setInitializing(false)
        return
      }
      try {
        const data = await fetchMe()
        if (!cancelled) setUser(data?.user || null)
      } catch (err) {
        console.error('ME FAILED:', err?.status, err?.message)
        if (!cancelled) {
          if (err?.status === 401) setToken(null)
          setUser(null)
        }
      } finally {
        if (!cancelled) setInitializing(false)
      }
    }
    init()
    return () => {
      cancelled = true
    }
  }, [])

  // Load enrollments in the background whenever the user changes
  useEffect(() => {
    if (user) loadEnrollments()
    else setEnrolledCourseIds([])
  }, [user, loadEnrollments])

  const login = async ({ email, password }) => {
    setLoading(true)
    try {
      const data = await loginRequest({ email, password })
      if (!data?.user) {
        throw new Error('User details are missing from the login response.')
      }
      setUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }

  const googleLogin = async (credential) => {
    setLoading(true)
    try {
      const data = await googleLoginRequest({ credential })
      if (!data?.user) {
        throw new Error('User details are missing from the Google login response.')
      }
      setUser(data.user)
      return data
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await logoutRequest()
    setUser(null)
    setEnrolledCourseIds([])
  }

  const updateProfile = async (updates) => {
    const data = await updateProfileRequest(updates)
    if (data?.user) setUser(data.user)
    return data
  }

  const enrollInCourse = async (courseId, orderId) => {
    setEnrolledCourseIds((prev) => (prev.includes(courseId) ? prev : [...prev, courseId]))
    try {
      await apiFetch('/api/enrollments', {
        method: 'POST',
        body: orderId ? { courseId, orderId } : { courseId },
      })
      await loadEnrollments()
    } catch (err) {
      if (err?.status === 400 || err?.status === 401) {
        await loadEnrollments()
      }
      throw err
    }
  }

  const isEnrolledIn = useCallback(
    (courseId) => enrolledCourseIds.includes(courseId),
    [enrolledCourseIds],
  )

  const value = useMemo(
    () => ({
      user,
      loading,
      initializing,
      login,
      googleLogin,
      logout,
      updateProfile,
      isAuthenticated: Boolean(user),
      role: user?.role ?? null,
      enrolledCourseIds,
      enrollInCourse,
      isEnrolledIn,
      refreshEnrollments: loadEnrollments,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, initializing, enrolledCourseIds, isEnrolledIn, loadEnrollments],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}