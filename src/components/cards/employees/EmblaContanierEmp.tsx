import React, { useEffect, useState } from 'react'
import FilledSocialBtn from '@/components/common/buttons/FilledSocialBtn';
import Image from 'next/image';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';

type Employee = {
    id: number,
    name: string,
    surname: string,
    fullname: string,
    position: string,
    email: string,
    phone: string,
    picture: string,
    socialMedia: {
        whatsapp: string,
        instagram: string,
        linkedin: string
    }
}

const EmblaContanierEmp = () => {

    // Data Fetching
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await fetch('/data/employees.json');
            const data = await response.json();
            setEmployees(data);        
        };

        fetchEmployees();
    }, []);
    
  return (
    <div className="embla__container flex sm:gap-4 lg:gap-8">
        {employees.map((employee: Employee) => (
            <div className="embla__slide basis-full sm:basis-1/2 lg:basis-1/3 min-w-0 flex-none" key={employee.id}>      
                <div className='flex flex-col'>
                    {/* Image of employee */}
                    <div className='h-80 relative'>
                        <Image className='rounded-t lg:rounded-t-xl object-cover' src={employee.picture} fill alt='Picture of employee' />
                    </div>

                    {/* Employee details */}
                    <div className='flex flex-col items-center py-4 lg:py-8 gap-5 lg:gap-10 bg-cloud-1 rounded-b lg:rounded-b-xl'>
                        {/* Social media buttons */}
                        <div className='flex gap-4'>
                            <FilledSocialBtn backgroundColor='primary' logo={IoLogoLinkedin} link={employee.socialMedia.linkedin} />
                            <FilledSocialBtn backgroundColor='primary' logo={MdLocalPhone} link={employee.phone} />
                            <FilledSocialBtn backgroundColor='primary' logo={GrMail} link={employee.email} />
                        </div>
                        {/* Employee name and position */}
                        <div className='flex flex-col gap-1 text-center text-primary font-[600]'>
                            <h4 className='text-lg lg:text-xl'>{employee.fullname}</h4>
                            <h5 className='text-sm'>{employee.position}</h5>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default EmblaContanierEmp