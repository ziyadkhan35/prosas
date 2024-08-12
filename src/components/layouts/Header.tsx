'use client'
import React, { useState } from 'react'
import NavLink from '../navbar/NavLink'
import NavSlctLink from '../navbar/NavSlctLink'
import ChangeLang from '../navbar/ChangeLang'
import Image from 'next/image'


const Header = () => {

  // Change navbar color when scrolling
  const [color, setColor] = useState(false)
  
  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true)
    } else{
      setColor(false)
    }  
  }
  
  window.addEventListener('scroll', changeColor)

  return (
    // Navbar Link Container
    <nav className={`fixed top-0 flex items-center justify-between z-50 w-full py-1 px-16 duration-300 ${color ? 'bg-[rgba(27,44,59,0.95)]': 'bg-transparent'}`}>
      {/* Logo */}
      <div className="relative z-[-1] flex place-items-center">
        <Image
          className="relative"
          src="/logo.png"
          alt="ProSAS Logo"
          width={60}
          height={60}
          priority
        />
      </div>

      {/* Links */}
      <div className='flex gap-12'>
        <NavLink text='Home' />
        <NavLink text='About' />
        <NavSlctLink 
          text='Projects'
          options={['Project1', 'Project2', 'Project3']}
         />
        <NavLink text='Contact' />

        {/* Change language button */}
        <ChangeLang />
      </div>
    </nav>
  )
}

export default Header
