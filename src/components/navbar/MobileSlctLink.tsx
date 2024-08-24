import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const MobileSlctLink = () => {

    // İnternationalization
    const t = useTranslations("Navigation")

  return (
    <div className='group flex flex-col font-[600] items-center tracking-wide text-cloud-1 px-1 py-3 capitalize'>
        <div className='mb-3 flex items-center justify-between gap-2'>
          <h4 className=''>{t('projects')}</h4>
          <div><MdKeyboardArrowDown /></div>
        </div>
        <div className='flex-col gap-2 hidden group-hover:flex text-center text-sm text-cloud-2'>
          <Link className='border-b py-1' href={'#projects'}>Bilgah Beach Hotel</Link>
          <Link className='border-b py-1' href={'#projects'}>Intourist Hotel Baku</Link>
          <Link className='border-b py-1' href={'#projects'}>Baku Marriott Hotel Boulevard</Link>
        </div>
    </div>
  )
}

export default MobileSlctLink