import useTypingAnimation from '@/shared/hooks/useTypingAnimation'
import './keyboard.css'
import { useKeyDown } from '@/shared/hooks/useKeyDown'
import usePersistedStore from '@/store'
import Row from './row'

const zero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=']
const first = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const second = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const three = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

function Keyboard() {
  const { keyPress } = useKeyDown(true)
  const { theme } = usePersistedStore()
  useTypingAnimation(keyPress)

  return (
    <div className='flex flex-col items-center mt-10'>
      <Row arr={zero} showBack />
      <Row arr={first} />
      <Row arr={second} showCaps />
      <Row arr={three} />

      <div className='keyboard__row keyboard__row--h3'>
        <div
          className='key--double key--right key--space'
          data-char=' '
          style={{
            borderColor: theme.background.secondary,
            color: theme.text.primary
          }}
        >
          &nbsp;
        </div>
      </div>
    </div>
  )
}

export default Keyboard
