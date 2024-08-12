'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const OurProjects = () => {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    // Project section for main page
    <div className='relative flex flex-col gap-6 bg-primary pb-56 pt-10 ps-16 w-full mb-36'> 
      {/* Title */}
      <div className='flex items-center gap-2'>
        <div className='bg-cloud-1 h-[0.10rem] w-16'></div>
        <h1 className='text-2xl font-[600]'>Recent Works</h1>
        <div className='bg-cloud-1 h-[0.10rem] w-16'></div>
      </div>
      {/* Slogan */}
      <p className='text-xl font-kalam'>"ProSAS Solutions: Building the Future, One Project at a Time."</p>
      {/* Slider buttons */}
      <div className='flex gap-3 self-end me-16'>
          <button onClick={scrollPrev} className='p-3 text-2xl rounded-full bg-cloud-1 hover:scale-110 duration-300 text-primary'><MdKeyboardArrowLeft /></button>
          <button onClick={scrollNext} className='p-3 text-2xl rounded-full bg-cloud-1 hover:scale-110 duration-300 text-primary'><MdKeyboardArrowRight /></button>
      </div>

      {/* Project gallery with embla carousel*/}
      <div className="embla absolute bottom-[-35%] overflow-hidden px-6">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex gap-8">
            <Image className='rounded-xl' src={'/projects/project1.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded-xl' src={'/projects/project2.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded-xl' src={'/projects/project3.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded-xl' src={'/projects/project4.jpg'} width={400} height={300} alt='picture of project' />
            <Image className='rounded-xl' src={'/projects/project5.jpg'} width={400} height={300} alt='picture of project' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default OurProjects