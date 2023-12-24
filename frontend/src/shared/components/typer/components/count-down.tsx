import { useTyperContext } from '@/shared/hooks/context/usetyper'
import usePersistedStore from '@/store'
import { useEffect } from 'react'

const Countdown = () => {
  const { theme } = usePersistedStore()

  const { countdown, resetCountdown } = useTyperContext()

  useEffect(() => {
    resetCountdown()
  }, [resetCountdown])

  const formatedCountdown = {
    minutes: new Date(countdown).getUTCMinutes(),
    seconds: new Date(countdown).getUTCSeconds()
  }

  return (
    <div className='flex justify-start'>
      <span
        className='text-right font-bold text-lg lg:text-xl transition-all'
        style={{
          color: theme.text.primary
        }}
      >
        {formatedCountdown.minutes < 10
          ? `0${formatedCountdown.minutes}`
          : formatedCountdown.minutes}
        :
        {formatedCountdown.seconds < 10
          ? `0${formatedCountdown.seconds}`
          : formatedCountdown.seconds}
      </span>
    </div>
  )
}

export default Countdown
