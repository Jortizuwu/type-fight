import usePersistedStore from '@/store'

type CharactersProps = {
  state?: boolean
  character: string
  className?: string
}

const Character = ({ state, character, className }: CharactersProps) => {
  const { theme } = usePersistedStore()

  return (
    <span
      style={{
        color:
          state === undefined
            ? ''
            : state === true
              ? theme.text.primary
              : '#f00',
        backgroundColor: state === false && character === ' ' ? '#f00' : ''
      }}
      className={`${className}`}
    >
      {character}
    </span>
  )
}

export default Character
