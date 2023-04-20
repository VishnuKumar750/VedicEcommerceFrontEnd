import React from 'react'

import { GrClose } from 'react-icons/gr'
import CartCard from './CartCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Cart = ({ showCart, setShowCart}) => {
   const { cartItems, subtotal } = useSelector(state => state.cart)
   const navigate = useNavigate()
   
   const RedirectToCheckout = () => {
      setShowCart(!showCart)
      if(cartItems && cartItems.length > 0) {
         setTimeout(() => {
            navigate('/checkout-Product');
         }, 2000);
      } else {
         toast.error('Your cart is empty');
      }
   }

  return (
    <div className={`w-[20em] absolute top-0 right-0  z-[9999] bg-white shadow-lg overflow-hidden `}>
      <div className='flex items-center justify-between px-8 py-8'>
         <h1 className='text-[1.3rem] font-mono font-bold'>Your Cart</h1>
         <GrClose className='text-[1.3rem] font-mono font-bold cursor-pointer' onClick={() => setShowCart(!showCart)}/>
      </div>

      <div className='w-[18em] px-2 mx-auto h-[60vh] overflow-y-scroll'>
         {
            cartItems?.map((v, i) => (
               <CartCard key={i} index={i} title={v.title} image={v.image} Price={v.Price} quantity={v.quantity} />
            ))
         }
      </div>

      <p className='py-8 px-4 font-mono'>Total : <span className='font-bold'>{subtotal}</span></p>

      <button className='mx-20 mb-5 py-2 px-4 bg-gray-900 text-white' onClick={RedirectToCheckout}>
         Checkout
      </button>
    </div>
  )
}

export default Cart