import { useTyperContext } from '@/shared/hooks/context/usetyper'
import usePersistedStore from '@/store'
import { ClockIcon } from '@heroicons/react/20/solid'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'

import { useState } from 'react'

const values = [
  { label: '15', value: 15000 },
  { label: '30', value: 30000 },
  { label: '60', value: 60000 }
]

const Divider = () => {
  const { theme } = usePersistedStore()

  return (
    <span
      className='h-auto w-1 rounded-full'
      style={{
        background: theme.background.primary
      }}
    />
  )
}

const Time = () => {
  const { theme } = usePersistedStore()
  const handleActive = (index: number) => {
    setActive(index)
  }
  const { setCount } = useTyperContext()

  const [active, setActive] = useState(0)

  return (
    <div className='space-x-2'>
      {values.map((val, index) => (
        <button
          onClick={() => {
            handleActive(index)
            setCount(values[index].value)
          }}
          key={val.label}
          className='border-0 border-b-2 border-transparent outline-none '
          style={{
            color: index === active ? theme.text.secondary : ''
          }}
        >
          {val.label}
        </button>
      ))}
    </div>
  )
}

function Options() {
  const { theme } = usePersistedStore()

  return (
    <div className='max-w-screen-lg mx-auto'>
      <div className='flex items-center justify-center relative'>
        <section className='flex flex-row gap-4 items-center'>
          <div
            className=' py-2 px-4 rounded-lg flex flex-row gap-2 font-bold text-xs'
            style={{
              background: theme.background.secondary
            }}
          >
            <div className='flex items-center gap-1'>
              <span>@ punctaction</span>
              <span># numbers</span>
            </div>
            <Divider />
            <section className='flex gap-1'>
              <div className='flex items-center gap-1'>
                <ChatBubbleBottomCenterIcon className='h-3 w-3' />
                <span>words</span>
              </div>
              <div className='flex items-center gap-1'>
                <ClockIcon className='h-3 w-3' />
                <span>time</span>
              </div>
            </section>
            <Divider />
            <Time />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Options
