/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://prosas.az',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'],
    alternateRefs: [
        { href: 'https://prosas.az/az', hreflang: 'az' },
        { href: 'https://prosas.az/en', hreflang: 'en' },
        { href: 'https://prosas.az/ru', hreflang: 'ru' },
    ],
};
