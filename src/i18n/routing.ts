import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['az', 'ru', 'en'],
  defaultLocale: 'az',
  pathnames: {
    '/': '/',
    '/about': {
      az: '/haqqinda',
      ru: '/o-nas',
      en: '/about'
    },
    '/contact': {
      az: '/elaqe',
      en: '/contact',
      ru: '/kontakt'
    },
    '/projects': {
      az: '/layiheler',
      en: '/projects',
      ru: '/proyekty'
    },
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation(routing);