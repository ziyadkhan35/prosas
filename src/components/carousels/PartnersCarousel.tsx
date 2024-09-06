'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const PartnersCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000, stopOnInteraction: false })])
    
  return (
    <div className="embla overflow-hidden px-2" ref={emblaRef}>
      <div className="embla__container flex gap-6 md:gap-8">
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/bosch.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/ahg.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/hikvision.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/abv.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/azerconnect.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/3 sm:basis-1/6 min-w-0 relative flex items-center justify-center">
          <Image src={'/partners/microsoft.png'} width={150} height={150} alt='image of partner' />
        </div>
      </div>
    </div>
  )
}

export default PartnersCarousel