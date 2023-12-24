import { useEffect, useState } from 'react'

const useCapsLock = () => {
  const [capsLockActive, setCapsLockActive] = useState(false)

  const handleKeyPress = (e: KeyboardEvent) => {
    const isCapsLockOn = e.getModifierState('CapsLock')
    setCapsLockActive(isCapsLockOn)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('keyup', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('keyup', handleKeyPress)
    }
  }, [])

  return capsLockActive
}

export default useCapsLock
