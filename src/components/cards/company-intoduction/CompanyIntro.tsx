import PrimaryTitle from '@/components/common/titles/PrimaryTitle'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import { FaChevronCircleRight } from 'react-icons/fa'
import { GoDot } from 'react-icons/go'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'

const CompanyIntro = () => {

    // Internationalization
    const t = useTranslations('CompanyIntro')

    // Paragraph component for about section
    const Paragraph = ({title, text}: {title:string, text:string}) => {
        return (
            <div className='flex gap-3'>
                {/* Icon */}
                <div className='text-primary text-xl'><FaChevronCircleRight/></div>
                {/* Text */}
                <p><span className='text-primary'>{title}: </span>{text}</p>
            </div>
        )
    }

  return (
    <div className='flex flex-col lg:flex-row gap-16 lg:gap-3 2xl:gap-12 lg:mx-16 2xl:mx-36'>
        {/* Image */}
        <div className='relative lg:basis-1/3 h-[32rem] lg:h-auto w-11/12 lg:w-auto'>
            <Image className='rounded-se lg:rounded-xl object-cover' src={'/common/introduction.jpg'} fill alt='image of intro' />
            {/* Project count container */}
            <div className='absolute -bottom-5 -right-5 flex items-center justify-center rounded lg:rounded-xl bg-cloud-1'>
                <div className='flex items-center p-6 gap-3'>
                    <div className='text-orange-400 text-4xl'><IoCheckmarkDoneCircle /></div>
                    <div className='flex flex-col text-primary'>
                        <h5 className='font-[600] text-xl'>10+</h5>
                        <p>{t('project_done')}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* About company */}
        <div className='lg:basis-2/3 flex flex-col gap-8 lg:gap-16 xl:gap-20 px-3 md:px-5 lg:px-10'>
            {/* Title */}
            <div>
                <PrimaryTitle title={t('header')} />
            </div>

            {/* About us section */}
            <div className='flex flex-col gap-6 lg:gap-10 pb-12'>
                <h2 className='xl:text-3xl font-[600] tracking-wide'>{t('title')}</h2>

                {/* Details */}
                <div className='flex flex-col gap-3 lg:gap-6'>
                    <Paragraph 
                     title={t('par1_title')}
                     text={t('par1_text')} />
                    <div className='flex flex-col gap-3'>
                        <Paragraph
                         title={t('par2_title')}
                         text={t('par2_text')} />
                        <div className='flex flex-col gap-3 mx-8'>
                            <div className='flex gap-3'>
                                <div><GoDot /></div>
                                <p>{t('par5_text')}</p>
                            </div>
                            <div className='flex gap-3'>
                                <div><GoDot /></div>
                                <p>{t('par6_text')}</p>
                            </div>
                        </div>
                    </div>
                    <Paragraph
                     title={t('par3_title')}
                     text={t('par3_text')} />
                    <Paragraph
                     title={t('par4_title')}
                     text={t('par4_text')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyIntro