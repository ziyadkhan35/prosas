import React from 'react'

const IconAndText = ({Icon, text}: {Icon:React.ComponentType, text:string}) => {

  return (
    <div className='flex gap-2 items-center'>
        <div><Icon /></div>
        <p>{text}</p>
    </div>
  )
}

export default IconAndText