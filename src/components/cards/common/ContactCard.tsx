import React from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'

const ContactCard = () => {
  return (
    <div className='flex flex-col gap-14 py-10 bg-gradient-to-r from-primary via-primary to-cloud-1 w-full text-center'>
        {/* Slogan */}
        <div className='flex flex-col gap-2'>
            <h2 className=''>Building Excellence, Delivering Trust.</h2>
            <p className=''>Partner with us for innovative solutions, exceptional quality, and a commitment to your success.</p>
        </div>
        {/* Phone number */}
        <div className='flex flex-col items-center gap-3 font-[700]'>
            <h2 className='text-5xl'>Contact with us</h2>
            <div className='flex gap-3 items-center'>
                <div className='p-2 bg-cloud-1 text-primary rounded-full'><FaPhoneVolume /></div>
                <p><a href="tel:+555555555">+994 (55) 661 9711</a></p> 
            </div>
        </div>
    </div>
  )
}

export default ContactCard