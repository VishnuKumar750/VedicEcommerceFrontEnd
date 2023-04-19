import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart';
import { toast } from 'react-toastify';

const CartCard = ({index, quantity, title, Price, 
image }) => {
   const dispatch = useDispatch();
  //  console.log(Price);
   const handleRemove = () => {
       dispatch(removeFromCart(index))
       toast.success('Item removed from cart')
   }

  return (
   <>
    <div className='flex py-2 relative my-2'>
      <AiOutlineClose className='absolute top-0 right-5 cursor-pointer' onClick={handleRemove}/>
      <img src={image} alt="p1-img" className='w-[6em] h-[6em] mr-4 object-contain '/>
      <div>
      <h1 className='leading-8 font-mono font-bold'>{title}</h1>
      <p className='leading-8 font-mono'>Price: <span className='font-bold'>{Price}</span></p>
      <p className='leading-8 font-mono'>Quantity: <span className='font-bold'>{quantity}</span></p>
      </div>
    </div>
      <hr className='w-[15em]'/>
   </>

  )
}

export default CartCard