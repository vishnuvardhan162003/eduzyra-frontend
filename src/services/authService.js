// Auth API wrappers around the Eduzyra Node backend (/api/auth/*).
// Backend contract (OTP signup and password reset were removed server-side):
//   POST  /api/auth/google   { credential } -> { user, token, isNewUser }   (only signup path)
//   POST  /api/auth/login    { email, password } -> { user, token }
//   GET   /api/auth/me                       -> { user }
//   PATCH /api/auth/me       { name?, email?, ... } -> { user }

import { apiFetch, setToken } from './api'

export async function googleLoginRequest({ credential }) {
  const data = await apiFetch('/api/auth/google', {
    method: 'POST',
    body: { credential },
    auth: false,
  })
  if (data?.token) setToken(data.token)
  return data
}

export async function loginRequest({ email, password }) {
  const data = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: { email, password },
    auth: false,
  })
  if (data?.token) setToken(data.token)
  return data
}

export async function fetchMe() {
  return apiFetch('/api/auth/me', { method: 'GET' })
}

export async function updateProfileRequest(updates) {
  return apiFetch('/api/auth/me', { method: 'PATCH', body: updates })
}

export async function logoutRequest() {
  try {
    await apiFetch('/api/auth/logout', { method: 'POST' })
  } catch {
    // logout endpoint is best-effort; clearing the local token is what matters
  }
  setToken(null)
}
export async function signupRequest() {
  throw new Error('Email signup is no longer available. Please continue with Google.')
}

export async function verifyOtpRequest() {
  throw new Error('OTP verification is no longer available.')
}

export async function resendOtpRequest() {
  throw new Error('OTP verification is no longer available.')
}
