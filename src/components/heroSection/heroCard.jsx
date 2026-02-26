import React from 'react'

const HeroCard = ({ links }) => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 
                    bg-[rgba(242,242,242,0.95)] rounded-2xl shadow-xl 
                    w-[90%] md:w-[70%] p-6  ">

      <div className="flex flex-wrap justify-center gap-6 text-[18px]">
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-500 hover:text-black font-light transition"
          >
            {item}
          </a>
        ))}
      </div>

    </div>
  )
}

export default HeroCard