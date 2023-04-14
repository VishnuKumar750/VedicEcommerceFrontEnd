import React from 'react'

import about from '/about/about.jpg'

const Banner = ({ title }) => {
  return (
    <div className='w-full h-[90%] relative bg-cover bg-no-repeat flex items-center justify-center' style={{ backgroundImage: `url(${about})`}}>
      <div className='absolute w-full h-full backdrop-blur-sm'></div>
      <h1 className='z-[99] text-[3rem] text-white font-bold font-serif'>{title}</h1>
    </div>
  )
}

export default Banner