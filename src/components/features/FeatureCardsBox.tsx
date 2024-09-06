import { useTranslations } from 'next-intl'
import FeatureCard from './FeatureCard'
import { MdOutlineEngineering } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { GiEcology, GiShieldcomb } from 'react-icons/gi'
import { AiOutlineSafety } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa6'

const FeatureCardsBox = () => {
    
    // Internationalization
    const t = useTranslations("Features")

    const featureDetails = [
        {
            id: 1,
            icon: <MdOutlineEngineering />,
            header: `${t('card1_title')}`,
            text: `${t('card1_text')}`,
        },
        {
            id: 2,
            icon: <IoIosSettings />            ,
            header: `${t('card2_title')}`,
            text: `${t('card2_text')}`,
        },
        {
            id: 3,
            icon: <GiEcology />,
            header: `${t('card3_title')}`,
            text: `${t('card3_text')}`,
        },
        {
            id: 4,
            icon: <FaRegHandshake />,
            header: `${t('card4_title')}`,
            text: `${t('card4_text')}`,
        },
        {
            id: 5,
            icon: < AiOutlineSafety />,
            header: `${t('card5_title')}`,
            text: `${t('card5_text')}`,
        },
        {
            id: 6,
            icon: <GiShieldcomb />,
            header: `${t('card6_title')}`,
            text: `${t('card6_text')}`,
        },
    ]
    
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-x-9 gap-y-8 md:gap-y-11 w-11/12 lg:w-10/12'>
        {
            featureDetails.map((detail)=>(
                <div key={detail.id}>
                    <FeatureCard 
                        icon={detail.icon} 
                        header={detail.header} 
                        text={detail.text}
                    />
                </div>
            ))
        }
    </div>
  )
}

export default FeatureCardsBox