'use client';
const NavBar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg className='block h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
              <svg className='hidden h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' alt='Your Company' />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <a href='#' className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' aria-current='page'>
                  Dashboard
                </a>
                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  Team
                </a>
                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  Projects
                </a>
                <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <button
              type='button'
              className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='absolute -inset-1.5'></span>
              <span className='sr-only'>View notifications</span>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <a href='#' className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium' aria-current='page'>
            Dashboard
          </a>
          <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
            Team
          </a>
          <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
            Projects
          </a>
          <a href='#' className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
