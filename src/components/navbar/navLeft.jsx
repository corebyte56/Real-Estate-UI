import React from 'react'
import logo from '../../assets/logo/logo.png'
import { ChevronDown } from 'lucide-react';


const NavLeft = () => {
  return (
    <div className='flex items-center gap-5'>
      <img src={logo} alt="Logo" />
      <button className='px-3 py-2  font-bold bg-[#EAEAEA] rounded-full flex items-center gap-2 cursor-pointer transform-3d transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:scale-105'>
         ALL USA <ChevronDown />
        </button>
    </div>
  )
}

export default NavLeft
