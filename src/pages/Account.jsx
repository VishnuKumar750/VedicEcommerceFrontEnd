import React from 'react'
import womenDress1 from '/women/womenDress1.jpg'

const Account = () => {
  return (
    <div className='w-full relative'>
      <div className='flex items-center   flex-col sm:flex-row sm:h-[80vh] w-full justify-center'>
         <div className=' w-[10em] h-[10em] sm:w-[16em] sm:h-[16em] my-5 rounded-full border-4 mx-8'>
            <img src={womenDress1} alt='usr-img' className='w-full h-full object-cover rounded-full' />
         </div>
         <form className='my-2 mx-4 flex flex-col'>
            <input placeholder='User Name' className='text-2xl mx-4 outline-none py-2 border-b-2'/> 
            <input placeholder='Email' className='text-2xl mx-4 outline-none border-b-2 py-2'/>
            <input placeholder='Password' className='text-2xl mx-4 outline-none border-b-2 py-2'/>
            <input type='submit' className='px-2 py-2 bg-sky-500 my-4 rounded-full text-[1.2rem] font-bold text-white cursor-pointer'/>
         </form>
      </div>
    </div>
  )
}

export default Account