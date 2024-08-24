'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import EmblaContanierEmp from '../cards/employees/EmblaContanierEmp'

const EmployeesCarousel = () => {
    // For embla carousel
    const [emblaRef, emblaApi] = useEmblaCarousel()

    // carousel buttons methods
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])

  return (
    <div className="embla overflow-hidden relative">
      <div className='embla_viewport' ref={emblaRef}>
        <EmblaContanierEmp />
      </div>
        
      {/* Previous button */}
      <button className='embla__prev absolute left-1 sm:left-5 top-1/2 -translate-y-1/2 drop-shadow-2xl hover:scale-110 duration-150 rounded-full bg-cloud-1 text-primary text-2xl p-3' onClick={scrollPrev}><MdKeyboardArrowLeft /></button>
      {/* Next button */}
      <button className='embla__next absolute right-1 sm:right-5 top-1/2 -translate-y-1/2 drop-shadow-2xl hover:scale-110 duration-150 rounded-full bg-cloud-1 text-primary text-2xl p-3' onClick={scrollNext}><MdKeyboardArrowRight /></button>
    </div>
  )
}

export default EmployeesCarousel
