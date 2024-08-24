import Link from 'next/link';
 
 const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='flex flex-col gap-4'>
            <p className='text-8xl text-center'>404</p>
            <p className='text-4xl font-mono'>Something went wrong</p>
            <button className='mt-10'>
              <Link className='bg-primary rounded text-2xl py-4 px-6' href={'/'} >Go Home</Link>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

export default NotFound