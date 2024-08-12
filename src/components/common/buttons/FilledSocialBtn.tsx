import Link from 'next/link'
import React from 'react'

// Props types
type SocialProps = {
  backgroundColor: string
  logo: React.ComponentType
}

// Tailwind dynamic classes
const type: any = {
  primary: 'bg-primary',
  cloud: 'bg-cloud-1 text-primary'
}

const FilledSocialBtn = ({backgroundColor, logo: Logo}: SocialProps) => {
  return (
    <Link href={'/'} className={`${type[backgroundColor]} p-3 rounded`}>
        <div className='text-xl'><Logo /></div>
    </Link>
  )
}

export default FilledSocialBtn