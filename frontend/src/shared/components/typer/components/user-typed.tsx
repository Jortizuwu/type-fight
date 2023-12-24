import { useMemo } from 'react'
import Character from './character'
import { useTyperContext } from '@/shared/hooks/context/usetyper'

const UserTyped = () => {
  const { word, checkCharacter, charTyped } = useTyperContext()

  const characters = useMemo(() => {
    return charTyped.split('')
  }, [charTyped])

  return (
    <div className='character absolute left-0 top-0 z-10 break-all font-mono text-xl lg:text-2xl'>
      {characters.map((_, index) => {
        return (
          <Character
            key={index}
            character={word.charAt(index)}
            state={checkCharacter(index)}
          />
        )
      })}
    </div>
  )
}

export default UserTyped
