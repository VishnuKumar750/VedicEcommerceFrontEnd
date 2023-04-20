import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LOGOUT } from '../../redux/user'

const Head = ({ setShowLogin, showLogin }) => {
  const { isAuthenticated } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(LOGOUT())
 }

  return (
    <div className={'text-xl flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#282828] p-3 text-[#ffffff] font-normal leading-8'}>
      <p className='text-[1rem] font-mono'>Free shipping for standard order over 500</p>
      
      {isAuthenticated ? (
        <>
        <p className='text-[1rem] font-mono cursor-pointer'>
        <Link to={`/Account/`}>
          My Account
        </Link>
        </p>
        <p className='text-[1rem] font-mono cursor-pointer' onClick={handleLogout}>LogOut</p>
        </>

      ) : (
        <div className='flex items-center'>
          <p className='text-[1rem] font-mono cursor-pointer' onClick={() => setShowLogin(!showLogin)}>
          Login / Register
      </p>
      </div>
      )}
      
    </div>
  )
}

export default Head