import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='flex flex-col gap-4'>
            <p className='text-8xl text-center'>404</p>
            <p className='text-4xl font-mono'>Opps! This page could not be found.</p>
            <button className='mt-10'>
                <Link className='bg-primary rounded text-2xl py-4 px-6' href={'/'} >Go Home</Link>
            </button>
        </div>
    </div>
  )
}

export default NotFound