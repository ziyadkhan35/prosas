/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://prosas.az',
    generateRobotsTxt: true,      
    sitemapSize: 7000,            
    changefreq: 'week',          
    priority: 0.7,               
    exclude: ['/admin/*'],       
};
  