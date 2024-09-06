import React from 'react'

const ServiceCard = ({Icon, title, desc}: {Icon: React.ReactNode, title: string, desc:string}) => {
  return (

    <div className='flex flex-col gap-5 md:gap-3 items-center justify-center select-none'>
        {/* Icon */}
        <div className="text-6xl lg:text-8xl text-primary">{Icon}</div>
        {/* Title */}
        <div className="text-lg lg:text-xl font-[600] text-center">{title}</div>
        {/* Description */}
        <p className='text-center text-cloud-2 w-1/3 sm:w-1/2 lg:w-full'>{desc}</p>
    </div>
  )
}

export default ServiceCard