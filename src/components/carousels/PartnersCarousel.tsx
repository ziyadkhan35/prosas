'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const partnerImages = [
  '/partners/bosch.png',
  '/partners/ateksis.png',
  '/partners/ahg.png',
  '/partners/hikvision.png',
  '/partners/abv.png',
  '/partners/azerconnect.png',
  '/partners/microsoft.png',
  '/partners/komtes.png',
  '/partners/honeywell.svg',
]

const PartnersCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1000, stopOnInteraction: false })])
    
  return (
    <div className="embla overflow-hidden px-2" ref={emblaRef}>
      <div className="embla__container flex">
        {
          partnerImages.map((src, index) => (
            <div 
              key={index}
              className="embla__slide flex-none basis-1/3 sm:basis-1/6 mr-6 md:mr-8 min-w-0 relative flex items-center justify-center"
            >
              <Image src={src} width={150} height={150} alt={`partner-${index}`} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PartnersCarousel