import { useState, useEffect, useCallback } from 'react'

import { useCursorPosition } from './useCursorPosition'
import { isAllowedCode } from '@/shared/utils'

type TypingState = 'idle' | 'start' | 'typing'

export const useKeyDown = (active: boolean) => {
  const [typingState, setTypingState] = useState<TypingState>('idle')
  const [keyPress, setKeyPress] = useState<string>('')
  const [charTyped, setCharTyped] = useState<string>('')
  const [totalCharacterTyped, setTotalCharacterTyped] = useState<string>('')

  const { cursorPosition, updateCursorPosition, resetCursorPointer } =
    useCursorPosition()

  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      setKeyPress(key)
      if (!active || !isAllowedCode(code)) return

      if (key === 'Backspace') {
        if (charTyped.length > 0 && cursorPosition > 0) {
          setCharTyped((prev) => prev.slice(0, charTyped.length - 1))
          setTotalCharacterTyped((prev) =>
            prev.slice(0, totalCharacterTyped.length - 1)
          )
          updateCursorPosition('decrease')
        }
        return
      }

      if (typingState === 'idle') {
        setTypingState('start')
      }

      setCharTyped((prev) => prev + key)
      setTotalCharacterTyped((prev) => prev + key)
      updateCursorPosition('increase')
    },
    [
      active,
      charTyped,
      cursorPosition,
      updateCursorPosition,
      typingState,
      totalCharacterTyped
    ]
  )

  const resetCharTyped = () => {
    setCharTyped('')
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return {
    charTyped,
    keyPress,
    cursorPosition,
    totalCharacterTyped,
    typingState,
    resetCharTyped,
    resetCursorPointer,
    setTotalCharacterTyped,
    setTypingState
  }
}
