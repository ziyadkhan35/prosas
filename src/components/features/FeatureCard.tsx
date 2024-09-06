import React from 'react'

type FeatureCardProps = {
    icon: React.ReactNode;
    header: string;
    text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({icon, header, text}) => {

  return (
        <div
            className='flex flex-col items-center gap-2 rounded-lg px-4 py-6 w-full h-full backdrop-blur-sm bg-primary/30'
        >
            {/* Feature icon */}
            <div className='text-primary text-2xl'>{icon}</div>
            <div className='flex flex-col items-center gap-3'>
                {/* Feature name */}
                <h4 className='font-bold tracking-wide text-center'>{header}</h4>
                {/* Feature text */}
                <p className='text-center text-sm'>{text}</p>
            </div> 
        </div>
  )
}

export default FeatureCard