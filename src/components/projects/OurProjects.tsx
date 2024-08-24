'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'

const OurProjects = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Internatonalization
  const t = useTranslations('OurProjects')


  return (
    // Project section for main page
    <div className='relative flex flex-col gap-6 bg-primary pb-52 sm:pb-56 pt-10 sm:ps-4 md:ps-16 w-full mb-36'> 
      {/* Title */}
      <div className='flex items-center gap-2 ms-4 sm:ms-0'>
        <div className='bg-cloud-1 h-[0.10rem] w-12'></div>
        <h2 className='capitalize'>{t('title')}</h2>
        <div className='bg-cloud-1 h-[0.10rem] w-12'></div> 
      </div>
      {/* Slogan */}
      <p className='md:text-xl font-shantell_sans italic md:tracking-wide me-2 ms-4 sm:ms-0'>{t('slogan')}</p>
      {/* Slider buttons */}
      <div className='flex gap-3 self-end me-16'>
        <button onClick={scrollPrev} className='p-3 text-2xl rounded-full bg-cloud-1 hover:scale-110 duration-300 text-primary'><MdKeyboardArrowLeft /></button>
        <button onClick={scrollNext} className='p-3 text-2xl rounded-full bg-cloud-1 hover:scale-110 duration-300 text-primary'><MdKeyboardArrowRight /></button>
      </div>

      {/* Project gallery with embla carousel*/}
      <div className='embla absolute bottom-[-25%] sm:bottom-[-35%] overflow-hidden px-2 sm:px-6'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container flex gap-4 sm:gap-8'>
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/bilgah-beach-hotel.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/intourist-hotel-baku.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/mariott-hotel-boulevard.jpg'} width={400} height={300} alt='picture of project'/>
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/cresent-mall.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/port-baku-mall.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded lg:rounded-xl object-cover embla__slide' src={'/projects/jumeirah-bilgah-beach.jpg'} width={400} height={300} alt='picture of project'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OurProjects