import FilledSocialBtn from '@/components/common/buttons/FilledSocialBtn'
import Image from 'next/image'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io'

const EmployeeCard = ({fullName, position}: {fullName: string, position: string}) => {
  return (
    <div className='flex flex-col'>
        {/* Image of employee */}
        <div className='h-80 relative'>
            <Image className='rounded-t-xl' src={'/employees/profile1.jpg'} fill objectFit='cover' alt='Picture of employee' />
        </div>

        {/* Employee details */}
        <div className='flex flex-col items-center py-8 px-20 gap-10 bg-cloud-1 rounded-b-xl'>
            {/* Social media buttons */}
            <div className='flex gap-4'>
                <FilledSocialBtn backgroundColor='primary' logo={IoLogoWhatsapp} />
                <FilledSocialBtn backgroundColor='primary' logo={AiFillInstagram} />
                <FilledSocialBtn backgroundColor='primary' logo={IoLogoLinkedin} />
            </div>
            {/* Employee name and position */}
            <div className='flex flex-col gap-1 text-center text-primary font-[600]'>
                <h4 className='text-xl'>{fullName}</h4>
                <h5 className='text-sm'>{position}</h5>
            </div>
        </div>
    </div>
  )
}

export default EmployeeCard