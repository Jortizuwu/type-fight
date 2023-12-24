import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import usePersistedStore from '@/store'
import { theme as themeList } from '@/shared/utils'

function ThemeComponent() {
  const { setTheme, theme, closeModal } = usePersistedStore()
  const [filter, setFilter] = useState('')

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    setFilter(e.target.value)
  }
  return (
    <div className='w-full cursor-default relative'>
      <div className='relative mt-1 w-full px-2'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <MagnifyingGlassIcon className='h-5 w-5' />
        </div>
        <input
          type='text'
          name='search'
          className={`text-sm block w-full pl-10 p-2 outline-none mb-3 ${theme.background.secondary}`}
          placeholder='Search theme'
          style={{
            background: theme.background.secondary,
            borderColor: theme.text.secondary
          }}
          onChange={handleFilter}
        />
      </div>
      <ul className='text-center'>
        {themeList
          .filter((ele) =>
            ele.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((val) => (
            <li
              key={val.name}
              className={`flex justify-between items-center py-1 cursor-pointer hover:bg-black px-4`}
              onClick={() => {
                setTheme(val.name)
                closeModal()
              }}
            >
              <p
                style={{
                  color: theme.text.primary
                }}
              >
                {val.name}
              </p>
              <div
                className='rounded-xl p-1 flex justify-between items-center gap-2'
                style={{
                  background: val.background.secondary
                }}
              >
                {Object.values(val.text).map((color, idx) => (
                  <span
                    key={idx}
                    className='h-3 w-3 rounded-full m-0'
                    style={{
                      background: color
                    }}
                  />
                ))}
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ThemeComponent
