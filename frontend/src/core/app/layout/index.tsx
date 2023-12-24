import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar'
import Footer from './components/footer'
import usePersistedStore from '@/store'
import { Modal } from '@/shared/components/ui/modal'
import { useEffect } from 'react'

function RootLayout() {
  const { theme, isModalOpen } = usePersistedStore()

  useEffect(() => {
    const openPublication = () => {
      if (isModalOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
    openPublication()
  }, [isModalOpen])

  return (
    <div
      style={{
        background: theme.background.primary,
        color: theme.text.primary
      }}
      className='transition-all relative min-h-screen flex flex-col justify-between overflow-hidden supports-[overflow:clip]:overflow-clip'
    >
      <div className='relative w-full '>
        <Navbar />
        <div className='relative w-auto h-full mx-auto p-2 mt-5'>
          <main className='w-full mx-auto'>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
      {isModalOpen && <Modal />}
    </div>
  )
}

export default RootLayout
