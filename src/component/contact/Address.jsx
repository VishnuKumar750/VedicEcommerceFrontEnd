import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const Address = () => {
  return (
    <div className='flex-1 w-full'>
      <div className='flex p-4'>
         <GoLocation className='text-[1.5rem] my-2'/>
         <div className=''>
         <h1 className='text-[1.5rem] font-serif mx-2 font-bold my-2'>Address</h1>
         <p className='mx-2 text-[1rem] text-gray-400 '>Haryana, India</p>
         </div>
      </div>

      <div className='flex p-4'>
         <AiOutlinePhone className='text-[1.5rem] my-2'/>
         <div className=''>
         <h1 className='text-[1.5rem] font-serif mx-2 font-bold my-2'>Lets Talk</h1>
         <p className='mx-2 text-[1rem] text-blue-500'>+91 982xxxxx90</p>
         </div>
      </div>


      <div className='flex p-4'>
         <AiOutlineMail className='text-[1.5rem] my-2'/>
         <div className=''>
         <h1 className='text-[1.5rem] font-serif mx-2 font-bold my-2'>Sale Support</h1>
         <p className='mx-2 text-[1rem] text-blue-500'>contact@example.com</p>
         </div>
      </div>
      
    </div>
  )
}

export default Address