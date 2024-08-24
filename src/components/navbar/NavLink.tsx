import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const NavLink = ({text, link}: {text: string, link: string}) => {

  return (
    // Navbar Link
    <div className=''>
      <Link className='font-[600] tracking-wide lg:text-lg text-cloud-1 hover:text-primary hover:border-b-2 border-b-primary px-1 py-3 duration-100 capitalize' href={link}>
        {text}
      </Link>
    </div>
  )
}

export default NavLink
