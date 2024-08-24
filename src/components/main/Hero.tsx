import Image from 'next/image'
import React from 'react'
import background from '/public/background.jpg'
import HeroCarousel from '../carousels/HeroCarousel'
import { useTranslations } from 'next-intl'
 

const Hero = () => {
  const t = useTranslations('Hero')

  return (
    <div className='relative flex items-center justify-center w-full h-screen top-0 left-0 object-cover'>
      {/* Image of background */}
      <Image
        className='-z-10'
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        priority
      />
                                              
      {/* Banner with slider for main page */}
      <div className='flex flex-col lg:flex-row max-h-screen w-11/12 xl:w-9/12 lg:mt-6'>
      
        {/* Carousel */}
        <HeroCarousel />

        {/* Text of banner slide */}
        <div className='lg:basis-1/3 flex flex-col justify-between px-6 py-5 kg:py-10 rounded-e bg-[rgba(65,165,149,0.51)]'>
          {/* Title and paragraph */}
          <div className='flex flex-col gap-3 lg:gap-6 font-lora'>
            <h4 className='font-[600] text-xl md:text-2xl lg:text-3xl tracking-wide uppercase'>{t('slogan')}</h4>
            <p className='text-cloud-2 text-sm lg:text-base'>{t('paragraph')}</p>
          </div>
          {/* Contact button and slider dots */}
          <div className='flex mt-8'>
            <button className='rounded bg-primary py-2 px-4 font-[600] hover:bg-cloud-1 hover:text-primary duration-150 capitalize'>{t('contact_us')}</button>
          </div>
        </div>  

      </div>

    </div>
  )
}

export default Hero