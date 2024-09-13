import Image from 'next/image'
import React from 'react'
import IconAndText from '../common/with-icons/IconAndText'
import { FaLocationDot } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io'
import FilledSocialBtn from '../common/buttons/FilledSocialBtn'
import { MdKeyboardArrowRight, MdLocalPhone } from 'react-icons/md'
import Link from 'next/link'
import CustomInput from '../common/inputs/CustomInput'
import { useTranslations } from 'next-intl'
import { GrMail } from 'react-icons/gr'

const Footer = () => {

    const t = useTranslations('Footer')
    const n = useTranslations('Navigation')

  return (
    <div className='flex flex-col gap-3 bg-primary py-5 lg:py-6 px-3 sm:px-5 md:px-10 xl:px-20' id='footer'>
        {/* Title and logo */}
        <div className='flex justify-between'>
            {/* Title */}
            <h2 className='mb-6 mt-2'>{t('title')}</h2>
            {/* Logo */}
            <Image src={'/logo.png'} width={45} height={45} alt='logo' />
        </div>

        {/* Contains Information Quick Links and Write to Us section */}
        <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-20'>
            {/* Information section */}
            <section className='flex flex-col gap-10 lg:gap-0 justify-between'>
                <div className='flex flex-col gap-3 lg:gap-6'>
                    {/* Title */}
                    <h3 className=''>{t('information')}</h3>
                    {/* Mail, phone, location container */}
                    <div className='flex flex-col gap-2'>
                        <IconAndText Icon={FaLocationDot} text='ProSAS MMC' />
                        <IconAndText Icon={GrMail} text='info@prosas.az' />
                        <IconAndText Icon={MdLocalPhone} text='+994 (50) 205 35 27' />
                    </div>
                </div>
                {/* Social media */}
                <div className='flex gap-6'>
                    <FilledSocialBtn backgroundColor='cloud' logo={IoLogoLinkedin} link='https://www.linkedin.com/in/iman-mansurov-73457084/' />
                    <FilledSocialBtn backgroundColor='cloud' logo={MdLocalPhone} link='tel:+994502053527' />
                    <FilledSocialBtn backgroundColor='cloud' logo={GrMail} link='mailto:info@prosas.az' />
                </div>
            </section>

            {/* Quick Links section */}
            <section className='flex flex-col gap-3 lg:gap-6'>
                {/* Title */}
                <h3 className=''>{t('quick_links')}</h3>
                {/* Links */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'#main'}>{n('home')}</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'#about'}>{n('about')}</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'#projects'}>{n('projects')}</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'#services'}>{n('services')}</Link></div>
                    <div className='flex items-center'><MdKeyboardArrowRight /><Link href={'#footer'}>{n('contact')}</Link></div>
                </div>
            </section>

            {/* Write to Us section */}
            <section className='flex flex-col gap-3 lg:gap-6'>
                {/* Title */}
                <h3>{t('write_to_us')}</h3>
                {/* Form */}
                <form
                 action={'https://formspree.io/f/mldrpdny'}
                 method='POST'
                 className='flex flex-col gap-2'>
                    <CustomInput bgColor='custom' type='text' title={t('fullname')} id='fName' required />
                    <CustomInput bgColor='custom' type='email' title={t('email')} id='email' required/>
                    <CustomInput bgColor='custom' type='tel' title={t('phone_number')} id='phone' required />
                    <label htmlFor='application'>{t('application_title')}:</label>
                    <textarea className='bg-[#D9D9D9] text-night-1 rounded px-2 py-3 min-w-0' id='application' placeholder={t('application_placeholder')} required></textarea>
                    <button className='bg-cloud-1 text-primary rounded py-2 px-10 self-end font-[600] mt-8' type="submit">{t('send')}</button>
                </form>
            </section>
        </main>

        {/* All rigt reserved paragraph */}
        <p className='text-center mt-6 text-sm md:text-base'>{t('copyright')}</p>
    </div>
  )
}

export default Footer