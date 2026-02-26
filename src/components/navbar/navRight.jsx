import React from 'react'
import mood from '../../assets/Logo/mode.png'
import user from '../../assets/Logo/user-Login.png'
import { Plus } from 'lucide-react';

const NavRight = () => {
  return (
    <div className='flex justify-around gap-5 items-center'>
      <img className='cursor-pointer' src={mood} alt="Mood Icon" />
        <img className='cursor-pointer' src={user} alt="User Icon" />
        <button className='flex items-center gap-2 bg-[#1586DB] font-semibold text-white px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 hover:scale-105'>
            <Plus /> Add Property
        </button>
    </div>
  )
}

export default NavRight
