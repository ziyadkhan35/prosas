import React from 'react'
import PrimaryTitle from '../common/titles/PrimaryTitle'
import PartnersCarousel from '../carousels/PartnersCarousel'
import { useTranslations } from 'next-intl'

const Partners = () => {
    // Internationalization
    const t = useTranslations("Partners")
  return (
    <div className="flex flex-col items-center gap-5 md:gap-7 lg:gap-12 mt-16 mb-10 md:mb-32">
        <div><PrimaryTitle title={t('title')} /></div>
        <div><PartnersCarousel /></div>
        <p className="text-cloud-2 font-kavivanar italic text-sm md:text-lg mt-2 md:mt-6">{t('slogan')}</p>
    </div>
  )
}

export default Partners