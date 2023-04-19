import React, { useState } from 'react'

import women  from '/women/women.jpg'

import { FaMinus, FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import { cate } from '../../dummyData'

const Hero = () => {
  const [index, setIndex] = useState(0);

  const decrementIndex = (index) => {
    index--;
    if(index < 0) index = cate.length - 1;
    setIndex(index);
  }

  const incrementIndex = (index) => {
    index++;
    index = index % cate.length;
    setIndex(index);
  }
  return (
    <div className='w-full h-[90vh] md:h-[30em] lg:h-[30em] bg-cover  bg-no-repeat relative' style={{ backgroundImage: `url(${cate[index].image}) `}}>
      <div className='absolute top-64 left-0 w-full flex justify-between z-[99]'>
      <FaCaretLeft className='text-[3rem] cursor-pointer' onClick={() => decrementIndex(index)}/>
      <FaCaretRight className='text-[3rem] cursor-pointer' onClick={() => incrementIndex(index)}/>

      </div>
      <div className='absolute top-[1rem] flex flex-col items-start justify-center  w-full h-full'>
      <h1 className='px-8 py-8 text-[3rem] mx-8 font-semibold'>{cate[index].title}</h1>
      <p className='px-8 w-[90%] mx-8 sm:w-[50%] text-[1.2rem] text-gray-600'>{cate[index].des}</p>
      <button className='mx-16 py-2 mt-8 font-bold font-mono border-b-2 transition delay-300 text-[1.2rem] ease-in hover:border-gray-900'>Shop Now</button>
      </div>
    </div>
  )
}

export default Hero