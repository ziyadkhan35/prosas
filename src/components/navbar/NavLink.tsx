import Link from 'next/link'
import React from 'react'

const NavLink = ({text}: {text: string}) => {
  return (
    // Navbar Link
    <h2 className=''>
      <Link className='font-[600] tracking-wide text-xl text-cloud-1 hover:text-primary hover:border-b-2 border-b-primary px-1 py-3 duration-100' href={'/'}>
        {text} 
      </Link>
    </h2>
  )
}

export default NavLink
