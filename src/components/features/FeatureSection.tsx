import React from 'react'
import FeatureCardsBox from './FeatureCardsBox'
import { useTranslations } from 'next-intl'

const FeatureSection = () => {

    // Internationalization
    const t = useTranslations("Features")

  return (
    <div className="flex flex-col gap-12 items-center pt-5 lg:pt-10">
        {/* Title and paragraph */}
        <div className="flex flex-col items-center gap-3">
            <h2 className="capitalize">{t('title')}</h2>
            <p className="text-[#DEDBDB]  md:w-2/3 text-center text-sm px-2">{t('subtitle')}</p>
        </div>
        {/* Features cards */}
        <FeatureCardsBox />
    </div>
  )
}

export default FeatureSection