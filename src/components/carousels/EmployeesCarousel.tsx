'use client'
import React, { useCallback } from 'react'
import EmployeeCard from '../cards/employees/EmployeeCard'
import useEmblaCarousel from 'embla-carousel-react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

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
            <div className="embla__container flex gap-8">
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
                <div className="embla__slide basis-1/3 min-w-0 flex-none"><EmployeeCard fullName='Chon Smith' position='Mechanical Engineer' /></div>
            </div>
        </div>
        
        {/* Previous button */}
        <button className='embla__prev absolute left-5 top-1/2 -translate-y-1/2 drop-shadow-2xl hover:scale-110 duration-150 rounded-full bg-cloud-1 text-primary text-2xl p-3' onClick={scrollPrev}><MdKeyboardArrowLeft /></button>
        {/* Next button */}
        <button className='embla__next absolute right-5 top-1/2 -translate-y-1/2 drop-shadow-2xl hover:scale-110 duration-150 rounded-full bg-cloud-1 text-primary text-2xl p-3' onClick={scrollNext}><MdKeyboardArrowRight /></button>
    </div>
  )
}

export default EmployeesCarousel