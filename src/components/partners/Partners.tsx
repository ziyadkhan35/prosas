import React from 'react'
import PrimaryTitle from '../common/titles/PrimaryTitle'
import PartnersCarousel from '../carousels/PartnersCarousel'
import { useTranslations } from 'next-intl'

const Partners = () => {
    // Internationalization
    const t = useTranslations("Partners")
  return (
    <div className="flex flex-col items-center gap-7 lg:gap-12 mt-16 mb-10 md:mb-32 px-4 sm:px-16 lg:px-28">
        <h1 className='text-center text-xl md:text-3xl font-[600] mb-8'>{t('title')}</h1>
        <div><PartnersCarousel /></div>
        <p className="text-cloud-2 font-kavivanar italic text-sm md:text-lg mt-6">{t('slogan')}</p>
    </div>
  )
}

export default Partners