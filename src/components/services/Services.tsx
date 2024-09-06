import { useTranslations } from 'next-intl'
import React from 'react'
import ServicesCarousel from '../carousels/ServicesCarousel'

const Services = () => {
    const t = useTranslations("Services")

  return (
    <div className='flex flex-col items-center justify-center gap-14 md:gap-20 overflow-hidden'>
        <h1 className='text-center text-xl md:text-3xl font-[600] lg:mb-4'>{t('header')}</h1>
        {/* Carousel */}
        <div className='lg:px-16'>
          <ServicesCarousel />
        </div>
    </div>
  )
}

export default Services