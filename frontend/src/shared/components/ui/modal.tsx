import usePersistedStore from '@/store'
import ReactDOM from 'react-dom'

export const Modal = () => {
  const { theme, closeModal, component } = usePersistedStore()

  return ReactDOM.createPortal(
    <>
      <div
        className='h-full w-full backdrop-blur-sm cursor-pointer absolute top-0  z-10'
        onClick={(e) => {
          e.stopPropagation()
          closeModal()
        }}
      />
      <div
        className='z-20 fixed flex flex-col inset-0  slide-fwd-center max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-md py-5 border-2 cursor-default'
        style={{
          background: theme.background.secondary,
          borderColor: theme.text.secondary,
          left: 'calc(50% - 350px)',
          top: 80
        }}
      >
        {component}
      </div>
    </>,
    document.getElementById('app-modal')!
  )
}
