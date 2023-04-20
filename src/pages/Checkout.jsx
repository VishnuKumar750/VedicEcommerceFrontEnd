import React from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { stripeCheckout } from '../api/api';
import Cookies from 'js-cookie';
import { Helmet } from 'react-helmet';
import checkout from '/icons/checkout.png';

const Checkout = () => {
  const { cartItems, subtotal } = useSelector(state => state.cart)
  const { user, isAuthenticate } = useSelector(state => state.user)

  const handleCheckout = async () => {
    try {
      if(!isAuthenticate && !user) {
        toast.error('You are not Logged In');
        return; 
      }
    const accessToken = Cookies.get('accessToken');
    const data = await stripeCheckout({ userId: user._id, url: window.location.origin, cartItems, subtotal, token:accessToken  })

    console.log(data);
    if(data) {
      window.location.href = data.url;
    }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
    <Helmet>
    <title>Checkout - Vedic E-Commerce Store</title>
    <meta name="description" content="Checkout your products at My Awesome E-Commerce Store" />
    <meta name="keywords" content="ecommerce, checkout, payment" />
    <link rel="icon" href={checkout} type="image/png" sizes="32x32" />
  </Helmet>
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
          {cartItems && cartItems?.map((product,i) => (
            <tr key={i} className='border-b-2'>
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
    </>
  )
}

export default Checkout