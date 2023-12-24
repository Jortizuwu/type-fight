import usePersistedStore from '@/store'
import { PaintBrushIcon } from '@heroicons/react/24/outline'
import ThemeComponent from './components/theme'

function Footer() {
  const { showModal, theme } = usePersistedStore()

  return (
    <footer className='max-w-screen-lg mx-auto w-full p-8 flex justify-between items-center'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between'>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <a
              href='#'
              color='blue-gray'
              className='font-normal transition-colors '
            >
              gitHub
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={() => showModal(<ThemeComponent />)}
        className='flex flex-row flex-wrap items-center justify-center gap-1 text-center md:justify-between cursor-pointer'
      >
        <PaintBrushIcon className='h-4 w-4' />
        <span>{theme.name}</span>
      </button>
    </footer>
  )
}

export default Footer
