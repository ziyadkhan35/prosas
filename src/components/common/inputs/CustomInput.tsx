import React from 'react'

const CustomInput = ({title, bgColor, type, id, required}: {title:string, bgColor:string, type:string, id:string, required:boolean}) => {

    const colorVariants:any = {
        custom: 'bg-[#D9D9D9] text-night-1'
    }

  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={id}>{title}:</label>
      <input className={`${colorVariants[bgColor]} rounded px-2 py-2 md:py-3 capitalize`} type={type} id={id} required={required} />
    </div>
  )
}

export default CustomInput