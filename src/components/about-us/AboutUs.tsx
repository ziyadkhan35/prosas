import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import aboutUs from '/public/common/for-about1.jpg'
import Link from 'next/link'

const AboutUs = () => {
    // Inernationalization
    const t = useTranslations('AboutUs')
  return (
    <div className='relative flex justify-center'>
      <div className='flex flex-col gap-4 md:gap-8 text-justify md:leading-7 px-3 sm:px-8 md:px-16 lg:px-32 xl:px-44'>
        <h1 className='text-center text-xl md:text-3xl font-[600] mb-4 md:mb-0'>{t('title')}</h1>
        <p>{t('text_1')}</p>

        {/* Image */}
          <Image
          className='object-cover self-center max-h-96 rounded-lg'
          alt="About-Us"
          src={aboutUs}
          sizes="100vw"
          style={{
          width: '100%',
          height: 'auto',
          }}
        />

        <p>{t('text_2')}</p>
        <p>{t('text_3')}</p>
        <Link className='text-sm text-primary underline self-start hover:text-blue-400'  href={'#footer'}>{t('text_4')}</Link>


        {/* Background texture */}
        <div className='-z-10 absolute left-0 top-0 w-28 h-28 blur-3xl bg-primary rounded-full'></div>
        <div className='-z-10 absolute left-0 top-1/4 w-16 h-16 blur-3xl bg-primary rounded-full'></div>
        <div className='-z-10 absolute left-0 top-2/4 w-10 h-10 blur-3xl bg-primary rounded-full'></div>

        <div className='-z-10 absolute right-0 bottom-0 w-28 h-28 blur-3xl bg-primary rounded-full'></div>
        <div className='-z-10 absolute right-0 bottom-1/4 w-16 h-16 blur-3xl bg-primary rounded-full'></div>
        <div className='-z-10 absolute right-0 bottom-2/4 w-10 h-10 blur-3xl bg-primary rounded-full'></div>
      </div>
    </div>
  )
}

export default AboutUs