'use client'
import React, { useEffect, useState } from 'react'
import NavLink from '../navbar/NavLink'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FaBars } from 'react-icons/fa6'
import Link from 'next/link'
import LocaleSwitcher from '../navbar/LocaleSwitcher'
import { GrClose } from 'react-icons/gr'


const projects = [{name: 'Bilgah Beach Hotel', id: 1}, {name: 'Intourist Hotel Baku', id: 2}, {name: 'Baku Marriott Hotel Boulevard', id: 3}]

const Header = () => {

// İnternationalization
  const t = useTranslations("Navigation")
    
  // Change navbar color when scrolling
  const [color, setColor] = useState(false)
  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 90){
        setColor(true)
      } else{
        setColor(false)
      }  
    }

    window.addEventListener('scroll', changeColor)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  })
    
  

  // Mobile menu toggle
  const [menu, setMenu] = useState(false)
  
  return (
    <div className={`flex flex-row-reverse md:flex-row fixed items-center justify-between top-0 z-50 w-full px-3 sm:px-8 lg:px-16 duration-300 ${color ? 'bg-[rgba(21,42,56,0.85)] backdrop-blur-lg': 'bg-transparent'}`}>     
      {/* Logo */}
      <div className="relative z-[-1] flex gap-6 place-items-center">
        <div className='flex md:hidden'><LocaleSwitcher /></div> {/* Change language button */}
        {/* Logo */}
        <Link href={'/'}>
          <Image
            className='w-[75px] h-auto'
            src="/logo.png"
            alt="ProSAS Logo"
            width={2000}
            height={2000}
            priority
          />
        </Link>
      </div>
      

      {/* Links */}
      <div className='hidden md:flex gap-8 lg:gap-12 items-center'>
        <NavLink href='/'>{t('home')}</NavLink>
        <NavLink href='/about'>{t('about')}</NavLink>
        <NavLink href='/projects'>{t('projects')}</NavLink>
        <NavLink href='/contact'>{t('contact')}</NavLink>
        {/* Change language button */}
        <LocaleSwitcher />
      </div>

      {/* Mobile navigation toggle */}
      <button
       className='md:hidden text-2xl'
       onClick={() => setMenu(!menu)}
       aria-label='Open menu'
       title='Open menu'
       >
        {/* Bars icon */}
        <FaBars aria-hidden />
      </button>




      {/* --------------------------- Mobile menu---------------------------- */}

      <div className={`absolute top-0 min-h-screen pt-6 w-full bg-[rgba(27,44,59,0.95)] backdrop-blur-xl duration-300 ${menu ? 'left-0' : '-left-full'}`}>
        {/* Mobile navigation toggle */}
        <button
         className='text-2xl ms-3 sm:ms-8'
         onClick={() => setMenu(!menu)}
         aria-label={menu ? 'Close menu' : 'Open menu'}
         title={menu ? 'Close menu' : 'Open menu'}
        >
          {/* Close icon */}
          <GrClose aria-hidden="true"/> 
        </button>
        {/* Links */}
        <div className='flex flex-col gap-6 lg:gap-12 items-center'>
          <NavLink href={'/'} onClick={() => setMenu(!menu)}>{t('home')}</NavLink>
          <NavLink href={'/about'} onClick={() => setMenu(!menu)}>{t('about')}</NavLink>
          <NavLink href={'/projects'} onClick={() => setMenu(!menu)}>{t('projects')}</NavLink>
          <NavLink href={'/contact'} onClick={() => setMenu(!menu)}>{t('contact')}</NavLink>
          {/* Change language button */}
          <LocaleSwitcher />
        </div>
      </div>
    </div>

    
  )
}

export default Header
