import FeatureCard from './FeatureCard'

const FeatureCardsBox = () => {
    const featureDetails = [
        {
            id: 1,
            icon: "engineer.png",
            header: "Harnessing Top Talent",
            text: "Recognizing the value of innovation and professionalism, we collaborate with top experts to make this a reality. Our team is committed to pushing the boundaries of what is possible.",
            type: 'cloud',
        },
        {
            id: 2,
            icon: "settings.png",
            header: "Advanced Technology",
            text: "We leverage the latest technologies to deliver solutions that meet the highest standards of excellence. Our forward-thinking approach ensures that we stay ahead of the curve.",
            type: 'primary',
        },
        {
            id: 3,
            icon: "biodegradable.png",
            header: "Eco-Friendly Approaches",
            text: "Our commitment to sustainability drives us to incorporate eco-friendly practices in all our projects. We strive to minimize our environmental impact while maximizing efficiency.",
            type: 'cloud',
        },
        {
            id: 4,
            icon: "guarantee.png",
            header: "Client-Centric Focus",
            text: "We prioritize our clients' needs by offering customized solutions that address their specific challenges. Our client-centric approach ensures satisfaction and long-term partnerships.",
            type: 'primary',
        },
        {
            id: 5,
            icon: "handshake.png",
            header: "Safety First",
            text: "Safety is our top priority. We adhere to rigorous safety protocols to protect our team, our clients, and the community. Our dedication to safety underpins everything we do.",
            type: 'cloud',
        },
        {
            id: 6,
            icon: "shield.png",
            header: "Quality Assurance",
            text: "We maintain the highest standards of quality in every project. Our meticulous attention to detail and commitment to excellence guarantee exceptional outcomes every time.",
            type: 'primary',
        },
    ]
    
  return (
    <div className='grid grid-cols-3 gap-x-10 gap-y-12'>
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