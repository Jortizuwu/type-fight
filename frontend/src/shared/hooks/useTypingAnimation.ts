function useTypingAnimation(char: string) {
  const key = document.querySelector(
    '[data-char="' + char.toUpperCase() + '"]'
  )
  if (!key) {
    return
  }
  key.setAttribute('data-pressed', 'on')
  setTimeout(function () {
    key.removeAttribute('data-pressed')
  }, 200)
}

export default useTypingAnimation
