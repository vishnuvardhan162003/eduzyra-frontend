const KEY = 'eduzyra_admin_preview'

export const isPreviewing = () => {
  try {
    return sessionStorage.getItem(KEY) === '1'
  } catch {
    return false
  }
}

export const startPreview = () => {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    // ignore
  }
}

export const stopPreview = () => {
  try {
    sessionStorage.removeItem(KEY)
  } catch {
    // ignore
  }
}