import { useEffect, useRef, useState } from 'react'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const GSI_SRC = 'https://accounts.google.com/gsi/client'

function loadGsi() {
  if (window.google?.accounts?.id) return Promise.resolve()
  return new Promise((resolve, reject) => {
    let script = document.querySelector(`script[src="${GSI_SRC}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = GSI_SRC
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
    script.addEventListener('load', resolve, { once: true })
    script.addEventListener('error', () => reject(new Error('Google script failed')), { once: true })
  })
}

export default function GoogleButton({ onCredential, disabled = false }) {
  const boxRef = useRef(null)
  const handlerRef = useRef(onCredential)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    handlerRef.current = onCredential
  })

  useEffect(() => {
    if (!CLIENT_ID) return undefined
    let cancelled = false
    loadGsi()
      .then(() => {
        if (cancelled || !boxRef.current) return
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (res) => {
            if (res?.credential) handlerRef.current(res.credential)
          },
        })
        window.google.accounts.id.renderButton(boxRef.current, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          text: 'continue_with',
          shape: 'pill',
          width: 320,
        })
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  // Client ID set cheyyakapothe button, divider emi kanipinchavu
  if (!CLIENT_ID) return null

  return (
    <div className={disabled ? 'pointer-events-none opacity-60' : ''}>
      <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        or
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <div ref={boxRef} className="flex justify-center" />
      {failed && (
        <p className="mt-2 text-center text-xs text-red-500">
          Google sign-in is unavailable right now. Please use email instead.
        </p>
      )}
    </div>
  )
}
