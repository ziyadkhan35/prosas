import { useTranslations } from 'next-intl';
import Link from 'next/link';

const NotFoundPage = () =>  {
  const t = useTranslations("NotFoundPage")
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col gap-4'>
        <p className='text-8xl text-center'>404</p>
        <p className='text-4xl font-mono'>{t('title')}</p>
        <button className='mt-10'>
          <Link className='bg-primary rounded text-2xl py-4 px-6' href={'/'} >{t('button')}</Link>
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage