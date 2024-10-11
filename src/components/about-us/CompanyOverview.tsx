'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const CompanyOverview = () => {

    // Internationalization
    const t = useTranslations('AboutPage')

    const [selectedSection, setSelectedSection] = useState('mission')
    
  return (
    <div className='flex flex-col gap-6'>
        {/* Titles */}
        <div className="flex justify-around flex-wrap sm:justify-start gap-1 sm:gap-3 mb-2">  
            <button className={`py-2 px-2 sm:px-4 rounded hover:bg-cyan-600/30 ${selectedSection == 'mission' ? 'bg-gradient-to-br from-cyan-300/50 text-gray-200 font-[500]' : 'bg-cyan-900/30 text-gray-400'}`} onClick={() => setSelectedSection('mission')} title={`${t('companyOverview.mission.title')}`} aria-label={`${t('companyOverview.mission.title')}`} >{t('companyOverview.mission.title')}</button>
            <button className={`py-2 px-2 sm:px-4 rounded hover:bg-cyan-600/30 ${selectedSection == 'services' ? 'bg-gradient-to-br from-cyan-300/50 text-gray-200 font-[500]' : 'bg-cyan-900/30 text-gray-400'}`} onClick={() => setSelectedSection('services')} title={`${t('companyOverview.services.title')}`} aria-label={`${t('companyOverview.services.title')}`} >{t('companyOverview.services.title')}</button>
            <button className={`py-2 px-2 sm:px-4 rounded hover:bg-cyan-600/30 ${selectedSection == 'values' ? 'bg-gradient-to-br from-cyan-300/50 text-gray-200 font-[500]' : 'bg-cyan-900/30 text-gray-400'}`} onClick={() => setSelectedSection('values')} title={`${t('companyOverview.values.title')}`} aria-label={`${t('companyOverview.values.title')}`} >{t('companyOverview.values.title')}</button>
        </div>

        {/* Overview */}
            <div className='md:w-3/4'>
                {
                    selectedSection == 'mission' ? 
                    <p>
                        {t('companyOverview.mission.text')}
                    </p>

                    : selectedSection == 'services' ? 
                    <ul className='list-disc list-inside flex flex-col gap-2 sm:gap-4'>
                        <li>{t('companyOverview.services.service_1')}</li>
                        <li>{t('companyOverview.services.service_2')}</li>
                        <li>{t('companyOverview.services.service_3')}</li>
                        <li>{t('companyOverview.services.service_4')}</li>
                        <li>{t('companyOverview.services.service_5')}</li>
                        <li>{t('companyOverview.services.service_6')}</li>
                    </ul>
                    
                    : 
                    <ul className='list-inside list-disc flex flex-col gap-2 sm:gap-4'>
                        <li>{t('companyOverview.values.value_1')}</li>
                        <li>{t('companyOverview.values.value_2')}</li>
                        <li>{t('companyOverview.values.value_3')}</li>
                        <li>{t('companyOverview.values.value_4')}</li>
                    </ul>
                }
            </div>
    </div>
  )
}

export default CompanyOverview