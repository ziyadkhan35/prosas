import Link from 'next/link'
import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const NavSlctLink = ({text, options}: {text: string, options: Array<string>}) => {
  return (
    <div>
        <div className='group relative'>
            {/* Link title */}
            <div className='flex items-center justify-center gap-1  pb-3'>
                <Link className='font-[600] tracking-wide text-xl text-cloud-1 py-2 px-1' href={'/'}>{text}</Link>
                {/* Arrow icon */}
                <IoMdArrowDropdown />
            </div>

            {/* Dropdownn menu */}
            <div className='font-[400] tracking-wide  invisible absolute flex flex-col group-hover:visible bg-cloud-1 text-night-1 px-6 py-3 gap-3 rounded'>
                {
                  options.map((opt) => (
                    <p className='border-b px-8 hover:text-primary'>{opt}</p>
                  ))
                }
            </div>
        </div>
    </div>  
  )
}

export default NavSlctLink