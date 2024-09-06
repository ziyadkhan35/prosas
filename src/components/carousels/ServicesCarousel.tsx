'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { services } from '../services/servicesData'
import ServiceCard from '../services/ServiceCard'
import { useTranslations } from 'next-intl'

const ServicesCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 2000 })])

    // Internationalization
    const t = useTranslations("Services")
    const translatedServices = services.map((service)=>({
        ...service,
        title: t(`title_${service.key}`),
        desc: t(`desc_${service.key}`)
    }))  

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
            {translatedServices.map((service, index) => (
                <div key={index} className='embla__slide flex-none basis-full lg:basis-1/4 min-w-0 lg:mr-16'>
                    <ServiceCard Icon={service.Icon} title={service.title} desc={service.desc} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default ServicesCarousel