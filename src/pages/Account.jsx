import React from 'react'
import Order from '../component/Order'
import UserProfile from '../component/UserProfile'

const Account = () => {

  return (
    <>
    <div className='hidden sm:block h-[10em] w-full bg-gray-200 bg-opacity-30'></div>
    <div className='w-full relative flex flex-col justify-around sm:flex-row px-4 bg-gray-200 bg-opacity-30'>
      <UserProfile />
      <Order />
    </div>
    </>
  )
}

export default Account