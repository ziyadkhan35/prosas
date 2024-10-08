import Link from 'next/link'
import React from 'react'

// Props types
type SocialProps = {
  backgroundColor: string
  logo: React.ComponentType
  link: string,
  ariaLabel: string
}

// Tailwind dynamic classes
const type: any = {
  primary: 'bg-primary',
  cloud: 'bg-cloud-1 text-primary'
}

const FilledSocialBtn = ({backgroundColor, logo: Logo, link, ariaLabel }: SocialProps) => {
  return (
    <Link 
     href={`${link}`}
     className={`${type[backgroundColor]} p-2 lg:p-3 rounded border border-cloud`}
     aria-label={ariaLabel}
    >
        <div className='lg:text-xl'><Logo /></div>
    </Link>
  )
}

export default FilledSocialBtn