import { useTranslations } from 'next-intl'
import FeatureCard from './FeatureCard'

const FeatureCardsBox = () => {
    
    // Internationalization
    const t = useTranslations("Features")

    const featureDetails = [
        {
            id: 1,
            icon: "engineer.png",
            header: `${t('card1_title')}`,
            text: `${t('card1_text')}`,
            type: 'cloud',
        },
        {
            id: 2,
            icon: "settings.png",
            header: `${t('card2_title')}`,
            text: `${t('card2_text')}`,
            type: 'primary',
        },
        {
            id: 3,
            icon: "biodegradable.png",
            header: `${t('card3_title')}`,
            text: `${t('card3_text')}`,
            type: 'cloud',
        },
        {
            id: 4,
            icon: "guarantee.png",
            header: `${t('card4_title')}`,
            text: `${t('card4_text')}`,
            type: 'primary',
        },
        {
            id: 5,
            icon: "handshake.png",
            header: `${t('card5_title')}`,
            text: `${t('card5_text')}`,
            type: 'cloud',
        },
        {
            id: 6,
            icon: "shield.png",
            header: `${t('card6_title')}`,
            text: `${t('card6_text')}`,
            type: 'primary',
        },
    ]
    
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-y-8 md:gap-y-11 w-11/12 lg:w-10/12 '>
        {
            featureDetails.map((detail)=>(
                <div key={detail.id}>
                    <FeatureCard 
                        icon={detail.icon} 
                        header={detail.header} 
                        text={detail.text} 
                        type={detail.type}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default FeatureCardsBox