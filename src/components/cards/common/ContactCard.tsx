import { useTranslations } from 'next-intl'
import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'

const ContactCard = () => {
  // Intl
  const t = useTranslations('ContactUsBanner')
  return (
    <div className='flex flex-col gap-8 md:gap-14 py-5 md:py-10 bg-gradient-to-br from-primary to-teal-800 w-full text-center [text-shadow:_0_1px_0_rgb(0_0_0_/40%)]'>
      {/* Slogan */}
      <div className='flex flex-col gap-2'>
        <h2 className='capitalize'>{t('title')}</h2>
        <p className='text-sm md:text-base px-2 md:px-0'>{t('paragraph')}</p>
      </div>
      {/* Phone number */}
      <div className='flex flex-col items-center gap-3 font-[700]'>
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>{t('contact_us')}</h2>
        <div className='flex gap-3 items-center'>
          <div className='p-2 bg-cloud-1 text-primary rounded-full'><FaPhoneVolume /></div>
          <p><a href="tel:+994502053527">+994 (50) 205 3527</a></p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard