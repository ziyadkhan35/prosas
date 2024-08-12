import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const ChangeLang = () => {
  return (
    <div className='group'>
       
        <div className='flex py-3'>
            <img src='/pngs/flags/uk.png' className='w-6' />
            <IoMdArrowDropdown />
        </div>

        <div className='absolute invisible group-hover:visible'>
            <img src='/pngs/flags/uk.png' className='w-6' />
            <img src='/pngs/flags/ru.png' className='w-6' />
            <img src='/pngs/flags/aze.png' className='w-6' />
        </div>

    </div>
  )
}

export default ChangeLang