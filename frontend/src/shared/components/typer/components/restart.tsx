import { useTyperContext } from '@/shared/hooks/context/usetyper'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

function Restart() {
  const { restartTest } = useTyperContext()

  return (
    <div className='flex items-center justify-center w-full mt-10'>
      <button
        onClick={restartTest}
        className='transform hover:rotate-180 transition-transform outline-none'
      >
        <ArrowPathIcon className='h-7 w-7' />
      </button>
    </div>
  )
}

export default Restart
