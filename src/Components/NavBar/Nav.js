import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // Import faTimes for close icon

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className='bg-white border-solid border-4 m-0 p-0'>
        <div className='flex items-center font-medium justify-between px-4 md:px-20  w-full'>
          <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
            <img src='/wodweslogo.png' alt="logo" className='md:cursor-pointer h-14' />

            <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
              <FontAwesomeIcon icon={open ? faTimes : faBars} /> {/* Toggle between faBars and faTimes */}
            </div>
          </div>

          <ul className='md:flex hidden items-center gap-5 flex-grow justify-end'>
            <li>
              <Link to='/' className='py-7 px-3 inline-block text-2xl hover:text-pink-600'>Home</Link>
            </li>
            <NavLinks />
          </ul>

          <div className='ml-4 md:block hidden'>
            <Button />
          </div>

          {/* Mobile Nav */}
          <ul className={`
            md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
            max-w-full box-border duration-500
            ${open ? 'left-0' : 'left-[-100%]'}  {/* Only show menu when open is true */}
          `}>
            <li>
              <Link to='/' className='py-7 px-3 inline-block text-xl'>Home</Link>
            </li>
            <NavLinks />
            <div className='py-5'>
              <Button />
            </div>
          </ul>
        </div>
      </nav>

      
    </>
  )
}

export default Nav;
