import { useCallback, useEffect, useState } from 'react'

import { TyperContext, TyperContextProps } from './context'
import { useCountdown } from '@/shared/hooks/useCountDown'
import { useKeyDown } from '@/shared/hooks/useKeyDown'
import { useWord } from '@/shared/hooks/useWord'
import UserTyped from './components/user-typed'
import WordContainer from './components/word-container'
import WordWrapper from './components/word-wrapper'
import Options from './components/options'
import Restart from './components/restart'
import usePersistedStore from '@/store'
import Results from './components/results'

interface ITyperProps {
  children: React.ReactNode | React.ReactNode[]
}

interface TyperComponent extends React.FC<ITyperProps> {
  WordContainer: typeof WordContainer
  UserTyped: typeof UserTyped
}

const Typer: TyperComponent = ({ children }) => {
  const { isModalOpen } = usePersistedStore()
  const [focused, setFocused] = useState(false)
  const [count, setCount] = useState<number>(15000)

  const {
    charTyped,
    resetCharTyped,
    resetCursorPointer,
    setTypingState,
    setTotalCharacterTyped,
    totalCharacterTyped,
    typingState
  } = useKeyDown(focused || isModalOpen)
  const { word, updateWord, totalWord } = useWord(count / 800)
  const { countdown, resetCountdown, startCountdown } = useCountdown(count)
  const { showModal } = usePersistedStore()

  const checkCharacter = useCallback(
    (index: number) => {
      if (charTyped[index] === word[index]) {
        return true
      } else {
        return false
      }
    },
    [charTyped, word]
  )

  if (word.length === charTyped.length) {
    updateWord()
    resetCharTyped()
    resetCursorPointer()
  }

  useEffect(() => {
    if (countdown === 0) {
      showModal(
        <Results {...{ countdown, totalCharacterTyped, totalWord, count }} />
      )
    }
  }, [count, countdown, showModal, totalCharacterTyped, totalWord])

  if (typingState === 'start') {
    startCountdown()
    setTypingState('typing')
  }

  useEffect(() => {
    if (focused) {
      startCountdown()
    }
  }, [startCountdown, focused])

  useEffect(() => {
    updateWord(true)
  }, [count, updateWord])

  const restartTest = useCallback(() => {
    resetCountdown()
    updateWord(true)
    resetCursorPointer()
    resetCharTyped()
    setTypingState('idle')
    setTotalCharacterTyped('')
  }, [
    resetCountdown,
    updateWord,
    resetCursorPointer,
    resetCharTyped,
    setTypingState,
    setTotalCharacterTyped
  ])

  const value: TyperContextProps = {
    charTyped,
    focused,
    word,
    countdown,
    totalCharacterTyped,
    totalWord,
    count,
    checkCharacter,
    restartTest,
    setFocused,
    startCountdown,
    setCount,
    resetCountdown
  }

  return (
    <TyperContext.Provider value={value}>
      <div className='max-w-screen-lg mx-auto'>
        <Options />
        <WordWrapper>{children}</WordWrapper>
        <Restart />
      </div>
    </TyperContext.Provider>
  )
}

Typer.WordContainer = WordContainer
Typer.UserTyped = UserTyped

export default Typer
