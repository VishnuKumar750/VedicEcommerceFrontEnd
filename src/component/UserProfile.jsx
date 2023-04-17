import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <div className='w-full sm:w-[30%] h-full px-4 border-2 my-4 sm:my-0 shadow-lg bg-white shadow-gray-300'>
      <h1 className='text-[1.4rem] font-bold border-b-2 py-2'>User Information</h1>
      <div className='my-2 flex flex-col items-center '>
       <div className='border-b-2 rounded-full p-2 shadow-md'>
        <img src={user.img} alt="img" className='w-[8em] h-[8em] rounded-full object-cover'/>
       </div>

        
         <p className='text-[1.1rem] py-4 font-serif'>Name: <span className='font-bold '>{user.username}</span></p>
         <p className='text-[1.1rem] font-serif'>Email: <span className='font-bold '>{user.email}</span></p>
      </div>
    </div>
  )
}

export default UserProfile