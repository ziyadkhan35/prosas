import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ru', 'aze'],
 
  // Used when no locale matches
  defaultLocale: 'aze'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ru|en|aze)/:path*']
};