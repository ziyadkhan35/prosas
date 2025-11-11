'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const UnderConstruction = () => {
    const t = useTranslations("UnderConstruction")
  return (
    <div className='flex flex-wrap gap-12 lg:gap-3 lg:flex-nowrap my-28 px-4 sm:px-8 lg:px-16 relative'>
        
        <div className='flex flex-col gap-12 justify-center'>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl md:text-2xl xl:text-4xl font-[600]'>{t('title')}</h2>
                <p className='lg:text-lg'>{t('description')}</p>
            </div>

            <div className='flex flex-col gap-3'>
                <p className=' text-cloud-2'>{t('contact_info')}</p>
                <p className='text-cyan-600'><a href="tel:+994502053527">+994 (70) 205 35 27</a></p>
                <p className='text-cyan-600'><a href="mailto:info@prosas.az">info@prosas.az</a></p>
                <p className='font-shantell_sans mt-6'>{t('thanks')}</p>
            </div>
        </div>

        <Image className='lg:w-1/2' src={'/common/under_construction.svg'} width={800} height={800} alt='under-construction-image' />

    </div>
  )
}

export default UnderConstruction