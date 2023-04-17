import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_CART } from '../redux/cart';
import { Link, useNavigate } from 'react-router-dom';
import paymentSuccess from '/about/success.svg'

const Success = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clearCartItems = () => {
    dispatch(CLEAR_CART())
    localStorage.removeItem('cartItems');

    setTimeout(() => {
      navigate('/', { replace: true })
    }, 2000);
  }


  return (
    <div className='w-full h-full bg-gray-400 fixed top-0 z-[999]'>
    <div className='w-full h-full fixed top-0 z-[99999]  bg-black bg-opacity-30 flex items-center justify-center '>
      <div className='h-[24em] py-4 px-3 w-[70%] flex flex-col items-center justify-center bg-white shadow-xl'>
        <div className='w-[4em] h-[4em]'>
          <img src={paymentSuccess} alt="success" className='w-full h-full' />
        </div>
        <h1 className='text-[3rem] font-serif text-green-400 font-bold'>SUCCESS</h1>
        <p className='text-center mx-2 my-4 text-gray-400 leading-5'>Thank you for purchasing Our Products.We will be very Greatful that you became part of Vedic family.</p>
      <p className='text-gray-700 text-[1.2rem] font-sans font-medium border-b-2 hover:border-red-400 p-2 ' onClick={clearCartItems}>
          Go to HomePage
        </p>
      </div>


    </div>
    </div>
  )
}

export default Success