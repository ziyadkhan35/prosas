import Link from 'next/link';

const NotFound = () =>  {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col gap-4'>
        <p className='text-4xl lg:text-8xl text-center'>404</p>
        <p className='text-xl lg:text-4xl font-mono'>Something went wrong</p>
        <button className='mt-10'>
          <Link className='bg-primary rounded lg:text-2xl py-2 lg:py-4 px-4 lg:px-6' href={'/'} >Go Home</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound