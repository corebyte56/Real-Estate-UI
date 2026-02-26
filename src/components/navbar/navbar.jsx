import React, { useState } from 'react'
import NavLeft from './navLeft'
import NavCenter from './navCenter'
import NavRight from './navRight'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white flex items-center justify-evenly lg:justify-between  py-6 px-4 md:px-10 sticky top-0 z-50 ">
      
     
      <div className="flex items-center gap-4 md:gap-10">
        <NavLeft />
        
        
        <button 
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      
      <div className="hidden lg:flex items-center gap-6 lg:gap-10">
        <NavCenter />
      </div>

     
      <div className="hidden lg:block">
        <NavRight />
      </div>

      
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden z-40">
          <div className="flex flex-col items-center gap-6 py-6">
           
            <NavCenter mobile={true} />  
            
        
            <div className="flex flex-col items-center gap-6">
              <NavRight mobile={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar