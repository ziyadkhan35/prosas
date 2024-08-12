'use client'
import Image from 'next/image'
import React from 'react'
import background from '/public/background.jpg'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
 

const Hero = () => {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  // Images' name of carousel
  const carousel_images = ['hero1', 'hero2', 'hero3', 'hero4']

  return (
    <div className='relative flex items-center justify-center w-full h-screen top-0 left-0'>
      {/* Image of background */}
      <Image
        className='-z-10'
        alt="Background"
        src={background}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        objectFit='cover'
        priority
      />
                                              
      {/* Banner with slider for main page */}
      <div className='flex w-9/12 mt-6'>
        
        {/* Image of banner slide */}
        <div className='basis-2/3 overflow-hidden relative embla' ref={emblaRef}>
          <div className='flex embla__container'>
            <Image
              className='rounded-s embla__slide basis-full flex-none'
              src={'/hero-carousel/hero1.jpg'}
              objectFit='cover'
              quality={100}
              width={100}
              height={100}
              sizes="100vw"
              alt='image of slide'
            />
            <Image
              className='rounded-s embla__slide flex-none basis-full'
              src={'/hero-carousel/hero2.jpg'}
              objectFit='cover'
              quality={100}
              width={100}
              height={100}
              sizes="100vw"
              alt='image of slide'
            />
            <Image
              className='rounded-s flex-none basis-full'
              src={'/hero-carousel/hero3.jpg'}
              objectFit='cover'
              quality={100}
              width={100}
              height={100}
              sizes="100vw"
              alt='image of slide'
            />
            <Image
              className='rounded-s embla__slide basis-full flex-none'
              src={'/hero-carousel/hero4.jpg'}
              objectFit='cover'
              quality={100}
              width={100}
              height={100}
              sizes="100vw"
              alt='image of slide'
            />
          </div>
        </div>

        {/* Text of banner slide */}
        <div className='basis-1/3 flex flex-col justify-between px-6 py-10 rounded-e bg-[rgba(65,165,149,0.51)]'>
          {/* Title and paragraph */}
          <div className='flex flex-col gap-8'>
            <h4 className='font-kameron font-[600] text-3xl tracking-wide'>LEAVE YOUR WORK TO THE PROFESSIONALS</h4>
            <p className='text-cloud-2 font-kameron'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, consequatur. Expedita</p>
          </div>
          {/* Contact button and slider dots */}
          <div className='flex'>
            <button className='rounded bg-primary py-2 px-4 font-[600] hover:bg-cloud-1 hover:text-primary duration-150'>Contact us</button>
          </div>
        </div>  

      </div>

    </div>
  )
}

export default Hero