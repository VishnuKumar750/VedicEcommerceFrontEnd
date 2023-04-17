import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_CART } from '../redux/cart';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Success = () => {
   const dispatch = useDispatch();
   const { cartItems } = useSelector(state => state.cart);
   const { user, isAuthenticated } = useSelector(state => state.user)

   useEffect(() => {
      const createOrder = async () => {
        const order = cartItems.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.Price,
          title: item.title,
          image: item.image,
      }));
      // console.log(order);

          const response = await axios.post(`${BASE_URL}/clientOrder/create-order/${user._id}`, {
            
              order,
              userId: user._id,
          }, {
            headers: {
               'Content-Type': 'application/json',
               token: `Bearer ${Cookies.get('accessToken')}`,
            }
          });
          // console.log(response);
      }
      createOrder();
      
      dispatch(CLEAR_CART());
   }, [user])

  return (
    <div className='w-full h-full bg-gray-400 fixed top-0 z-[999]'>
    <div className='w-full h-full fixed top-0 z-[99999]  bg-black bg-opacity-30 flex items-center justify-center '>
      <div className='h-[24em] py-4 px-3 w-[70%] flex flex-col items-center justify-center bg-white shadow-xl'>
        <div className='w-[4em] h-[4em] bg-gray-500'></div>
        <h1 className='text-[3rem] font-serif text-green-400 font-bold'>SUCCESS</h1>
        <p className='text-center mx-2 my-4 text-gray-400 leading-5'>Thank you for purchasing Our Products.We will be very Greatful that you became part of Vedic family.</p>
      
          <Link to={'/'} className='hover:shadow-xl '>
        <p className='text-gray-700 text-[1.2rem] font-sans font-medium border-b-2 hover:border-red-400 p-2 '>
          Go to HomePage
        </p>
          </Link>
      </div>


    </div>
    </div>
  )
}

export default Success