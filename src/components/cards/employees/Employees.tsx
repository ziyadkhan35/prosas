import EmployeesCarousel from '@/components/carousels/EmployeesCarousel'
import PrimaryTitle from '@/components/common/titles/PrimaryTitle'
import { useTranslations } from 'next-intl'
import React from 'react'

const Employees = () => {
    // Internationalization
    const t = useTranslations("Employees")

  return (
    <div className="flex flex-col items-center gap-8 sm:gap-16 my-8 sm:my-16 lg:my-32">
        {/* Titles ans subtitles */}
        <div className="flex flex-col gap-3 items-center text-center">
          <div><PrimaryTitle title={t('title')} /></div>
          <h4 className='text-base md:text-lg px-2'>{t('subtitle')}</h4>
        </div>
        {/* Carousel */}
        <div className="flex items-center w-5/6 xl:w-2/3 ">
         <EmployeesCarousel />
        </div>
    </div>
  )
}

export default Employees