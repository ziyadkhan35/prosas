import React from 'react'
import FeatureCardsBox from './FeatureCardsBox'
import { useTranslations } from 'next-intl'

const FeatureSection = () => {

    // Internationalization
    const t = useTranslations("Features")

  return (
    <div className="flex flex-col gap-12 items-center pt-5">
        {/* Title */}
        <h2 className="capitalize">{t('title')}</h2>
        {/* Features cards */}
        <FeatureCardsBox />
    </div>
  )
}

export default FeatureSection