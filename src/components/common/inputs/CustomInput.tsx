import React from 'react'

const CustomInput = ({title, bgColor, type, id}: {title:string, bgColor:string, type:string, id:string}) => {

    const colorVariants:any = {
        custom: 'bg-[#D9D9D9] text-night-1'
    }

  return (
    <form className='flex flex-col gap-1'>
        <label htmlFor={id}>{title}:</label>
        <input className={`${colorVariants[bgColor]} rounded px-2 py-3`} type={type} id={id} />
    </form>
  )
}

export default CustomInput