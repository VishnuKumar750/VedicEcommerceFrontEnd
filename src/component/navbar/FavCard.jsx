import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removefromFavourite } from '../../redux/favourite';
import { toast } from 'react-toastify';

const FavCard = ({ id, title,  
image }) => {
   const dispatch = useDispatch();
   const handleRemove = (id) => {
         // console.log(id);
       dispatch(removefromFavourite(id))
       toast.success('Item removed from favourite')
   }

  return (
   <>
    <div className='flex py-2 relative my-2'>
      <AiOutlineClose className='absolute top-0 right-5 cursor-pointer' onClick={() => handleRemove(id)}/>
      <img src={image} alt="p1-img" className='w-[6em] h-[6em] object-contain '/>
      <div>
      <h1 className='leading-8 font-mono font-bold'>{title}</h1>
      </div>
    </div>
      <hr className='w-[15em]'/>
   </>

  )
}

export default FavCard