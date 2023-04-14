import React from 'react'
import { FaSearch } from 'react-icons/fa'

import { GrClose } from 'react-icons/gr'

const Search = ({ setShowSearch, showSearch }) => {
  return (
    <div className={`w-full h-[100vh] absolute top-0  z-[9999] bg-white shadow-lg`}>
      <div className='border-2 w-full h-full flex items-center justify-center '>
      <GrClose className='absolute top-10 right-10 text-[2rem] cursor-pointer' onClick={() => setShowSearch(!showSearch)}/>
         <div className='border-2 relative p-8 w-[20em] rounded-md'>
         <input className='w-full outline-none border-b-2'  placeholder='search' />
         <FaSearch className='absolute top-9 right-8 cursor-pointer' />

         </div>
      </div>
    </div>
  )
}

export default Search