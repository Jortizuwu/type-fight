import { useEffect, useState } from 'react'
import {
  calculateAccuracy,
  calculateErrorPercentage,
  calculateWPM
} from '../utils'

type useGetResultsProps = {
  totalWord: string
  totalCharacterTyped: string
  time: number
  countdown: number
}

export const useGetResults = ({
  totalWord,
  totalCharacterTyped,
  time,
  countdown
}: useGetResultsProps) => {
  const [history, setHistory] = useState({
    wordHistory: '',
    typedHistory: ''
  })

  const [results, setResults] = useState({
    accuracy: 0,
    wpm: 0,
    cpm: 0,
    error: 0
  })

  useEffect(() => {
    if (countdown === 0) {
      const { accuracy } = calculateAccuracy(totalWord, totalCharacterTyped)
      const { wpm, cpm } = calculateWPM(totalCharacterTyped, accuracy, time)

      const error = calculateErrorPercentage(accuracy)

      setResults({
        accuracy,
        wpm,
        cpm,
        error
      })

      setHistory({
        wordHistory: totalWord,
        typedHistory: totalCharacterTyped
      })
    }
  }, [countdown, time, totalCharacterTyped, totalWord])

  return {
    results,
    history
  }
}
