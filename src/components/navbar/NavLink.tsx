import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link, Pathnames} from '@/i18n/routing';

export default function NavigationLink<Pathname extends Pathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors tracking-wide lg:text-lg capitalize',
        isActive ? 'text-primary font-[600]' : ' text-cloud-1 hover:text-primary'
      )}
      href={href}
      {...rest}
    />
  );
}