export const isBrowser = typeof window !== 'undefined'

export const scrollToElement = (id: string, offset = 0) => {
  if (!isBrowser) return
  const element = document.getElementById(id)
  if (element) {
    const elementOffset = element.offsetTop || 0
    window.scrollTo({
      top: elementOffset - offset,
      behavior: 'smooth'
    })
  }
}

export const setBodyOverflow = (value: 'hidden' | 'unset' | 'auto' | 'visible') => {
  if (!isBrowser) return
  document.body.style.overflow = value
} 