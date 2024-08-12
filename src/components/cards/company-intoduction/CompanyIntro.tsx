import PrimaryTitle from '@/components/common/titles/PrimaryTitle'
import Image from 'next/image'
import React from 'react'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import { FaChevronCircleRight } from 'react-icons/fa'
import { GoDot } from 'react-icons/go'

const CompanyIntro = () => {

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
    <div className='flex gap-12 mx-36'>
        {/* Image */}
        <div className='basis-1/3 relative'>
            <Image className='rounded-xl' src={'/common/introduction.jpg'} objectFit='cover' fill alt='image of intro' />
        </div>

        {/* About company */}
        <div className='basis-2/3 flex flex-col gap-20 px-10'>
            {/* Title */}
            <div>
                <PrimaryTitle title='Welcome our company' />
            </div>

            {/* About us section */}
            <div className='flex flex-col gap-10 pb-12'>
                <h2 className='text-3xl font-[600] tracking-wide'>About Us</h2>

                {/* Details */}
                <div className='flex flex-col gap-6 '>
                    <Paragraph 
                     title='Company overview'
                     text='ProSAS is a leading civil engineering firm dedicated to delivering innovative and sustainable solutions for a better tomorrow. Our mission is to exceed client expectations through exceptional service, quality workmanship, and a commitment to excellence.' />
                    <div className='flex flex-col gap-3'>
                        <Paragraph
                         title='Leadership Team'
                         text='Meet our visionary leaders driving our success'/>
                        <div className='flex flex-col gap-3 mx-8'>
                            <div className='flex gap-3'>
                                <div><GoDot /></div>
                                <p>John Smith, CEO: A seasoned civil engineer with over 20 years of experience, John leads with a passion for innovation and client satisfaction.</p>
                            </div>
                            <div className='flex gap-3'>
                                <div><GoDot /></div>
                                <p>Emily Johnson, COO: With a background in project management, Emily ensures seamless operations and project delivery.</p>
                            </div>
                        </div>
                    </div>
                    <Paragraph
                     title='Detailed Service Offerings'
                     text='Structural Engineering, Site Development, Project Management, Environmental Engineering, and more.' />
                    <Paragraph
                     title='Industries Served'
                     text='Residential, Commercial, Industrial, Infrastructure, and Government sectors.' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CompanyIntro