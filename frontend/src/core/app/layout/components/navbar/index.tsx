import { UserIcon } from '@heroicons/react/24/outline'

function NavbarComponent() {
  return (
    <nav className='max-w-screen-lg mx-auto flex relative justify-between items-center  px-8 h-20'>
      <div className='inline-flex'>
        <a href='/'>logo</a>
      </div>

      <div className='flex-initial'>
        <div className='block'>
          <div className='inline relative'>
            <button type='button' className=''>
              <UserIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarComponent
