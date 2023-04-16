import React from 'react'
import women from '/women/womenDress1.jpg'

const Card = ({item}) => {
  return (
    <div className='flex p-4 '>
      <div className='w-[8em] h-[8em] mx-2'>
      <img src={item?.image} alt="img" className='w-full h-full object-cover'/>
      </div>
      <div className='mx-4 flex flex-col justify-between w-full border-2'>
         <div className='px-4 py-2'>
      <h1 className='text-[1.2rem] font-bold font-mono'>{item?.title}</h1>
      <p className='my-2 font-medium text-gray-900'><span className='text-gray-700 '>{item?.quantity}</span> x <span className='text-gray-700  '>&#8377; {item?.price}</span></p>
         </div>
      <div className='border-t-2 w-full flex items-center justify-end px-4 py-1'>
         <p className='text-gray-700 font-medium'>Total: <span className='text-gray-900'>&#8377; {item?.quantity * item?.price}</span></p>
      </div>
      </div>
    </div>
  )
}

export default Card