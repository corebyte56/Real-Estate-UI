import React from 'react'
import heroBg from '../../assets/logo/hero-bg.png'

const HeroBG = () => {
  return (
    <div className="w-full relative  bg-cover bg-center h-125 rounded-lg" style={{ backgroundImage: `url(${heroBg})` }}>
      
    </div>
  )
}

export default HeroBG
