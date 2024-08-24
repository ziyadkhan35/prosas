import Link from 'next/link'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

type Item = {
  name: string;
  id: number;
};

const NavSlctLink = ({text, options}: {text: string, options: Item[]}) => {
  return (
    <div className='group relative'>
      {/* Link title */}
      <div className='flex items-center justify-center gap-1'>
        <Link className='font-[600] tracking-wide lg:text-lg text-cloud-1 py-3 px-1 capitalize' href={'#projects'}>{text}</Link>
        {/* Arrow icon */}
        <div><IoMdArrowDropdown /></div>
      </div>  

      {/* Dropdownn menu */}
      <div className='font-[400] tracking-wide invisible absolute flex flex-col group-hover:visible bg-cloud-1 text-night-1 px-3 py-3 gap-3 rounded'>
        {
          options.map((opt) => (
            <Link href={'#projects'} className='border-b px-2 hover:text-primary capitalize text-nowrap cursor-pointer' key={opt.id}>{opt.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default NavSlctLink