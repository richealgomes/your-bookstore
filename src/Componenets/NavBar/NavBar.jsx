import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon,
    XMarkIcon, } from '@heroicons/react/24/solid'
import { Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='flex items-end justify-between bg-gray-200 mr-8 ml-8 mb-10 p-5'>
            <Link to='/' className=' inline-flex inline-center'>
                <BookOpenIcon className='w-10 h-8 text-yellow-500'></BookOpenIcon>
                <span className='ml-2 font-bold text-2xl tracking-wide text-gray-800'>Your BookStore</span>
            </Link>
            {/* nav items */}
           <ul className='items-center hidden space-x-8 lg:flex text-xl font-semibold'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/books'
              className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'text-yellow-500' : 'default')}
            >
              About us
            </NavLink>
          </li>
        </ul>
         {/* Mobile Navbar Section */}
         <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-8 text-gray-800' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BookOpenIcon className='h-6 w-6 text-yellow-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 '>
                        Your BookStore
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-8 text-gray-800 bg-gray-200 p-1 rounded' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-600 hover:bg-gray-200 hover:p-2 hover:rounded'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-600
                        hover:bg-gray-200 hover:p-2 hover:rounded'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-600
                        hover:bg-gray-200 hover:p-2 hover:rounded'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default NavBar;