import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../constants';
import axios from 'axios';

const Checkout = () => {
  const { cartItems, subtotal } = useSelector(state => state.cart)

  const handleCheckout = async () => {
    // console.log(BASE_URL);
    try {
      const res = await axios.post(`${BASE_URL}/payment/create-checkout-session`, {
        url: window.location.origin,
        cartItems
    })
      if(res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (error) {
      
    }
    
    // if(cartItems && cartItems.length > 0) {
    //   console.log('checkout');

    // } else {
    //   alert('Your cart is empty');
    // }
  }

  return (
    <div>
      <h1 className='text-[2rem] font-serif font-bold mx-8 sm:pt-[4em]'>Cart</h1>
      <div className='mx-8 border-2 border-gray-200'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='w-[25%] font-serif '>Product</th>
              <th className='w-[10%] font-serif'>Price</th>
              <th className='w-[25%] font-serif'>Quantity</th>
              <th className='w-[10%] font-serif'>Total</th>
            </tr>
          </thead>

          <tbody>
          {cartItems && cartItems?.map((product) => (
            <tr key={product.id} className='border-b-2'>
              <td><img className='w-[40%]  h-full  mx-auto object-cover my-4' src={product.image} alt={product.title} /></td>
              <td className='text-[1rem] font-bold font-sans text-center ' >&#8377;{product.Price.toFixed(2)}</td>
              <td className='text-center font-bold font-sans text-[1rem]'>{product.quantity}</td>
              <td className='text-[1rem] font-bold font-sans text-center'>&#8377;{(product.total).toFixed(2)}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div className='w-full flex items-center justify-end py-4'>
          <p className={`${cartItems.length > 0 ? 'block' : 'hidden'} font-bold text-[1rem] sm:text-[1.2rem] px- mx-4`}>subtotal: &#8377;{(subtotal).toFixed(2)}</p>
        </div>
        <div className='w-full flex items-center justify-end py-4'>
        <button className={`bg-sky-500 px-4 py-2 rounded-lg mx-4 text-white font-bold font-sans ${cartItems.length > 0 ? 'block': 'hidden'}`} onClick={handleCheckout}>CheckOut</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout