'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'

const projectImages = [
  '/projects/bilgah-beach-hotel.jpg',
  '/projects/intourist-hotel-baku.jpg',
  '/projects/mariott-hotel-boulevard.jpg',
  '/projects/cresent-mall.jpg',
  '/projects/port-baku-mall.jpg',
  '/projects/jumeirah-bilgah-beach.jpg',
  '/projects/ganja-olympic-sports-complex.jpg',
]

const OurProjects = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

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
    <div className='relative flex flex-col gap-6 bg-primary/90 pb-4 sm:pb-5 pt-10 sm:ps-4 md:ps-16 w-full mb-36'> 
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
        <button onClick={scrollPrev} className='p-3 text-2xl rounded-full bg-cloud-1 sm:hover:scale-110 active:bg-cloud-2 duration-300 text-primary' title='Previous project button' aria-label='Previous project button'><MdKeyboardArrowLeft /></button>
        <button onClick={scrollNext} className='p-3 text-2xl rounded-full bg-cloud-1 sm:hover:scale-110 active:bg-cloud-2 duration-300 text-primary' title='Next project button' aria-label='Next project button'><MdKeyboardArrowRight /></button>
      </div>

      {/* Project gallery with embla carousel*/}
      <div className="embla relative bottom-[-25%] sm:bottom-[-35%] overflow-hidden px-2 sm:px-6">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {projectImages.map((src, i) => (
              <div
                key={i}
                className="embla__slide relative flex-shrink-0 w-[300px] sm:w-[400px] h-[220px] sm:h-[300px] mr-4 sm:mr-8"
              >
                <Image
                  src={src}
                  alt="project image"
                  fill
                  className="rounded-lg lg:rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default OurProjects