import { useTyperContext } from '@/shared/hooks/context/usetyper'
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline'

import Countdown from './count-down'

type WordWrapperProps = {
  children: React.ReactNode
}

const WordWrapper = ({ children }: WordWrapperProps) => {
  const { focused, setFocused } = useTyperContext()

  return (
    <div className='max-w-4xl mx-auto mt-10'>
      <div
        className={`${
          focused ? 'opacity-0' : 'opacity-100'
        } flex items-center justify-center flex-row max-w-4xl w-full gap-3 transition-all duration-100 absolute mx-auto top-1/4`}
      >
        <CursorArrowRaysIcon className='h-5 w-5' />
        <span className='text-center font-mono text-lg'>
          Click here or start typing to focus
        </span>
      </div>
      <div
        className={`relative mt-5 focus:border-0 focus:border-none focus:outline-none ${
          focused ? 'blur-none' : 'cursor-pointer blur-md'
        } `}
        tabIndex={0}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <Countdown />
        <div
          className={`relative mt-5 focus:border-0 focus:border-none focus:outline-none`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default WordWrapper
