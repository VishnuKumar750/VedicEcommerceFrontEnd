import React, { useEffect, useState } from 'react'
import Card from './order/Card'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { orderFailure, orderRequest, orderSuccess } from '../redux/order';

const Order = () => {
   const [ open, setOpen] = useState(false);

   const { user } = useSelector((state) => state.user)
  
   const dispatch = useDispatch()
  const fetchAllOrders = async (id) => {
   dispatch(orderRequest())
    try {
      // console.log(user._id)
      const response = await axios.get(`${BASE_URL}/clientOrder/get-order/${user._id}`, {
        headers: {
          'Content-Type': 'application/json',
          token: `Bearer ${Cookies.get('accessToken')}`
        }
      })

      // console.log(response.data)
      // if(response.data) {
         dispatch(orderSuccess(response.data.order))
      // }

    } catch (error) {
      dispatch(orderFailure());
      console.log(error);
    }
  }

  useEffect(() => {
   if(!user._id) return;
    fetchAllOrders(user._id)
  },[user._id])

  const { order } = useSelector((state) => state.order)
  
  return (
    <div className='w-full sm:w-[70%] h-full border-2 sm:mx-4 shadow-lg shadow-gray-300 bg-white'>
      <h1 className='text-[1.5rem] font-bold  px-4 my-2'>Orders</h1>
      {order?.map((v, i) => (
      <div key={i}>
      <p  className='mx-4 my-2 font-serif text-gray-700 text-[1.2rem] border-b-2 border-gray-100 cursor-pointer' onClick={() => setOpen(true)}>Date : <span className='mx-4 text-gray-900'>{v.date}</span></p>
      {!open ? 
      <></>
      :
      <div key={i} className='overflow-y-scroll border-b-2 '>
      <div className='overflow-y-scroll min-h-full max-h-[100vh]'>
         {v?.order?.map((item, i) => (
            <Card key={i} item={item}/>
         ))}
      </div>

      <div className='w-full border-t-2 flex items-center justify-end px-4 py-2'>
         <p className='font-medium text-gray-700'>SubTotal: <span className='text-gray-900'>&#8377; {v.subtotal}</span></p>
      </div>
      </div>
      }
      </div>
      ))}

    </div>
  )
}

export default Order