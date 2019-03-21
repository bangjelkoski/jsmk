export const scrollIt = element => {
  const rect = element.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop

  window.scrollTo({
    behavior: 'smooth',
    left: 0,
    top: rect.top + scrollTop
  })
}
