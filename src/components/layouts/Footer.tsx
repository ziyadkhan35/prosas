import Image from 'next/image'
import React from 'react'
import IconAndText from '../common/with-icons/IconAndText'
import { FaFacebook, FaLocationDot } from 'react-icons/fa6'
import { IoIosMail, IoLogoWhatsapp } from 'react-icons/io'
import { BsTelephoneFill } from 'react-icons/bs'
import FilledSocialBtn from '../common/buttons/FilledSocialBtn'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import CustomInput from '../common/inputs/CustomInput'

const Footer = () => {
  return (
    <div className='flex flex-col gap-6 bg-primary py-10 px-20'>
        {/* Title and logo */}
        <div className='flex justify-between'>
            {/* Title */}
            <h2 className='mb-6'>Contact Us</h2>
            {/* Logo */}
            <Image src={'/next.svg'} width={45} height={45} alt='logo' />
        </div>

        {/* Contains Information Quick Links and Write to Us section */}
        <main className='flex gap-16'>
            {/* Information section */}
            <section className='flex flex-col justify-between'>
                <div className='flex flex-col gap-6'>
                    {/* Title */}
                    <h3 className=''>Information</h3>
                    {/* Mail, phone, location container */}
                    <div className='flex flex-col gap-2'>
                        <IconAndText Icon={FaLocationDot} text='380 St Kilda Road, Jackson New Store, United State' />
                        <IconAndText Icon={IoIosMail} text='username@domain.com' />
                        <IconAndText Icon={BsTelephoneFill} text='+994 (55) 555 55 55' />
                    </div>
                </div>
                {/* Social media */}
                <div className='flex gap-6'>
                    <FilledSocialBtn backgroundColor='cloud' logo={PiInstagramLogoFill} />
                    <FilledSocialBtn backgroundColor='cloud' logo={FaFacebook} />
                    <FilledSocialBtn backgroundColor='cloud' logo={IoLogoWhatsapp} />
                </div>
            </section>

            {/* Quick Links section */}
            <section className='flex flex-col gap-6'>
                {/* Title */}
                <h3 className=''>Quick Links</h3>
                {/* Links */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'/'}>Home</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'/'}>Home</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'/'}>Home</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'/'}>Home</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'/'}>Home</Link></div>
                </div>
            </section>

            {/* Write to Us section */}
            <section className='flex flex-col ms-16 w-1/3 gap-6'>
                {/* Title */}
                <h3>Write to Us</h3>
                {/* Form */}
                <div className='flex flex-col gap-2'>
                    <CustomInput bgColor='custom' type='text' title='Name and Surname' id='fName' />
                    <CustomInput bgColor='custom' type='email' title='Email' id='email' />
                    <CustomInput bgColor='custom' type='tel' title='Phone number' id='phone' />
                    <label>Your application </label>
                    <textarea className='bg-[#D9D9D9] text-night-1 rounded px-2 py-3' rows={4} cols={40}>I have a job offer for you.</textarea>
                    <input className='bg-cloud-1 text-primary rounded py-2 px-10 self-end font-[600] mt-8' type="submit" value="Send" />
                </div>
            </section>
        </main>

        {/* All rigt reserved paragraph */}
        <p className='text-center mt-6'>© "ProSas MMC - All Rights Reserved"</p>
    </div>
  )
}

export default Footer