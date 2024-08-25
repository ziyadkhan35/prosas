import React from 'react'

const FeatureCard = ({
    icon, header, text, type
    }: {
    icon: string,
    header: string,
    text: string,
    type: string 
    }) => {

    const featureType: any = {
        primary: 'bg-primary text-cloud-1',
        cloud: 'bg-cloud-1 text-night-1'
    }
  return (
        <div
            className={`${featureType[type]} flex flex-col items-center gap-4 rounded-lg px-4 py-6 w-full h-full`}
        >
            {/* Feature icon */}
            <img
                className='w-8 lg:w-12'
                src={`/pngs/features-cards/${icon}`}
                alt='feature-icon' 
            />
            <div className='flex flex-col items-center gap-3'>
                {/* Feature name */}
                <h4 className='font-bold tracking-wide'>{header}</h4>
                {/* Feature text */}
                <p className='text-center text-sm'>{text}</p>
            </div> 
        </div>
  )
}

export default FeatureCard