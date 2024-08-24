'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const PartnersCarousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    
  return (
    <div className="embla overflow-hidden px-2" ref={emblaRef}>
      <div className="embla__container flex gap-2 md:gap-4">
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative flex items-center justify-center">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
        <div className="embla__slide flex-none basis-1/6 min-w-0 relative">
            <Image src={'/partners/ateksis.png'} width={150} height={150} alt='image of partner' />
        </div>
      </div>
    </div>
  )
}

export default PartnersCarousel