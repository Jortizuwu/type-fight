import useCapsLock from '@/shared/hooks/useCapsLock'
import usePersistedStore from '@/store'

type RowProps = {
  arr: string[]
  showBack?: boolean
  showCaps?: boolean
}

const Row = ({ arr, showBack = false, showCaps = false }: RowProps) => {
  const { theme } = usePersistedStore()
  const capsLockActive = useCapsLock()

  return (
    <div className='keyboard__row'>
      {showCaps && (
        <div
          className='key--bottom-left key--word key--w5 relative'
          data-char='CAPSLOCK'
          style={{
            borderColor: theme.background.secondary,
            color: theme.text.primary
          }}
        >
          <span>Caps lock</span>
          <span
            className='h-2 w-2 rounded-full absolute top-1'
            style={{
              background: capsLockActive ? 'green' : 'gray'
            }}
          />
        </div>
      )}
      {arr.map((val) => (
        <div
          key={val}
          className='key--letter'
          data-char={val}
          style={{
            borderColor: theme.background.secondary,
            color: theme.text.primary
          }}
        >
          {val}
        </div>
      ))}
      {showBack && (
        <div
          className='key--bottom-right key--word key--w5'
          data-char='BACKSPACE'
          style={{
            borderColor: theme.background.secondary,
            color: theme.text.primary
          }}
        >
          <span>Backspace</span>
        </div>
      )}
    </div>
  )
}
export default Row
