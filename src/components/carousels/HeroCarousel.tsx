'use client'
import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const HeroCarousel = () => {

    // Images of carousel
    const images = [
        {name: 'hero1', id: 1},
        {name: 'hero2', id: 2},
        {name: 'hero3', id: 3},
        {name: 'hero4', id: 4},
    ]
    // Carousel settings
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
    <div className='lg:basis-2/3 overflow-hidden max-h-[35rem] relative embla' ref={emblaRef}>
        <div className='flex embla__container'>
            {
            // images.map((img) => (
            //     <div className='relative flex items-center justify-center w-full h-screen top-0 left-0 object-cover'>
            //         <Image
            //         key={img.id}
            //         className='rounded-s embla__slide basis-full flex-none object-cover'
            //         src={`/hero-carousel/${img.name}.jpg`}
            //         quality={100}
            //         fill
            //         alt='image of slide'
            //         priority
            //     />
            //     </div>
            // ))
                
           
                    <Image
                    
                    className='rounded-s embla__slide basis-full flex-none object-cover'
                    src={`/hero-carousel/hero1.jpg`}
                    quality={100}
                    fill
                    alt='image of slide'
                    priority
                />

            }
        </div>
    </div>
  )
}

export default HeroCarousel