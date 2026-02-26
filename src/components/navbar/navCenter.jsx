import React from 'react'
import { ChevronDown } from 'lucide-react';

const NavCenter = () => {
  return (
    <div className='flex items-center gap-5'>
      <li className='cursor-pointer list-none'><a className='flex gap-2.5 items-center font-medium sm:font-semibold text-[16px] sm:text-[20px] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105' href="">
        For Buyers <ChevronDown />
        </a></li>
      <li className='cursor-pointer list-none'><a className='flex gap-2.5 items-center font-medium sm:font-semibold text-[16px] sm:text-[20px] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105' href="">
        For Tenants <ChevronDown />
        </a></li>
      <li className='cursor-pointer list-none'><a className='flex gap-1 sm:gap-2.5 items-center font-medium sm:font-semibold text-[16px] sm:text-[20px] transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105' href="">
        For Dealers <ChevronDown />
        </a></li>
    </div>
  )
}

export default NavCenter
