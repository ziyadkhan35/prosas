import CompanyOverview from "@/components/about-us/CompanyOverview"
import PartnersCarousel from "@/components/carousels/PartnersCarousel";
import { getTranslations } from "next-intl/server"

export default async function about(){

    // Internationalization
    const t = await getTranslations('AboutPage');

    return(
        <div className="flex flex-col my-28 md:my-36 px-4 sm:px-8 lg:ps-16 gap-10 relative text-justify">
            <div className="flex flex-col gap-7 md:w-3/4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-[600] tracking-wide">{t('title')}</p>
                <p className="">{t('text')}</p>
            </div>
            
            {/* Company overview with filter buttons */}
            <div><CompanyOverview /></div>

            <div className="mt-20"><PartnersCarousel /></div>

            {/* Filter effect */}
            <div className="w-1/2 h-96 bg-gradient-to-bl from-cyan-300/10 to-gray-800/35 absolute top-0 right-0 blur-3xl -z-10"></div>
        </div>
    )
}