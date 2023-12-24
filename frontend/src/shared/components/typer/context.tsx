import { Dispatch, SetStateAction, createContext } from 'react'

export type TyperContextProps = {
  charTyped: string
  countdown: number
  focused: boolean
  word: string
  totalCharacterTyped: string
  totalWord: string
  count: number
  checkCharacter: (index: number) => boolean
  resetCountdown: () => void
  restartTest: () => void
  setCount: React.Dispatch<React.SetStateAction<number>>
  setFocused: Dispatch<SetStateAction<boolean>>
  startCountdown: () => void
}

export const TyperContext = createContext<TyperContextProps | null>(null)
