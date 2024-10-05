'use client'
import React from 'react'
import CustomInput from '../common/inputs/CustomInput'
import { useTranslations } from 'next-intl'

const WriteUsForm = () => {

    // Internationalization
    const t = useTranslations('Footer')

    // Confirmation method for form 
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const confirmation = window.confirm("Formu göndərmək istəyirsinizmi?")

        if(confirmation){
            e.currentTarget.submit()
        }   
    }
    
  return (
    <section className='flex flex-col gap-3 lg:gap-6'>
        {/* Title */}
        <h3>{t('write_to_us')}</h3>
        {/* Form */}
        <form
            action={'https://formspree.io/f/mldrpdny'}
            method='POST'
            onSubmit={handleSubmit}
            className='flex flex-col gap-2'>
            <CustomInput bgColor='custom' type='text' title={t('fullname')} id='fName' required />
            <CustomInput bgColor='custom' type='email' title={t('email')} id='email' required/>
            <CustomInput bgColor='custom' type='tel' title={t('phone_number')} id='phone' required />
            <label htmlFor='application'>{t('application_title')}:</label>
            <textarea className='bg-[#D9D9D9] text-night-1 rounded px-2 py-3 min-w-0' id='application' placeholder={t('application_placeholder')} required></textarea>
            <button className='bg-cloud-1 text-primary rounded py-2 px-10 self-end font-[600] mt-8' type="submit">{t('send')}</button>
        </form>
    </section>
  )
}

export default WriteUsForm