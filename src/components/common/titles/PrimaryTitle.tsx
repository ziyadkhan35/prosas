import React from 'react'

const PrimaryTitle = ({title}: {title:string}) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <div className='bg-primary w-12 py-[0.05rem]'></div>
      <h2 className='text-primary capitalize text-center'>{title}</h2>
      <div className='bg-primary px-6 py-[0.05rem]'></div>
    </div>
  )
}

export default PrimaryTitle