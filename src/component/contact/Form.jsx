import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

const Form = () => {
   const handleSubmit = () => {

   }
  return (
    <div className='p-[1.5em] flex-1 border-b-2 sm:border-r-2 w-full'>
      <h1 className='text-center font-bold font-serif text-[1.5rem] my-4'>Send Us A Message</h1>
    <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-between border-2 p-2'>
         <AiOutlineMail className='text-[1.5rem] text-gray-500' />
         <input placeholder='E-mail' className='outline-none w-[90%] px-2'/>
      </div>
      <textarea placeholder='How can we help you ?' className='outline-none w-full my-4 border-2 px-4 h-[10em] py-4'/>

      <button className='p-3 w-full rounded-full bg-black text-white font-bold font-serif' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form