import React from 'react'
import HeroBG from './heroBG'
import HeroText from './heroText'
import HeroCard from './heroCard'


const Hero = () => {
    const Cardlinks = [
    { badges: 'Buy' },
    { badges: 'Rent' },
    { badges: 'Projects' },
    { badges: 'Commercial' },
    { badges: 'New launch' },
    { badges: 'Post Free Proparty Ad' }
  ];


  return (
    <div className='container mx-auto relative py-10'>
      <HeroBG />
        <HeroText />
        <div className='absolute bottom-20 h-auto left-1/4 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='flex flex-row gap-4 '>
            {Cardlinks.map((link, index) => (
              <a key={index} className='decoration-none hover:underline p-4 ' href="#">{link.badges}</a>
            ))}
          </div>
        </div>
        
    </div>
  )
}

export default Hero
