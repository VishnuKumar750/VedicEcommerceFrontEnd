import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div className={'text-xl flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#282828] p-3 text-[#ffffff] font-normal leading-8'}>
      <p className='text-[1rem] font-mono'>Free shipping for standard order over 500</p>
      <p className='text-[1rem] font-mono cursor-pointer '>
        <Link to={`/Account/?id=${1}`}>
          My Account
        </Link>
      </p>
    </div>
  )
}

export default Head