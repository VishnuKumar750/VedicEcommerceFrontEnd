import React from 'react'

import { GrClose } from 'react-icons/gr'
import CartCard from './CartCard'
import { Link } from 'react-router-dom'
import { productData } from '../../../dummyData'
import { useSelector } from 'react-redux'
import FavCard from './FavCard'

const Fav = ({ showfav, setShowFav}) => {
   const { favItems } = useSelector(state => state.fav)
   
   console.log(favItems);

   
   const handleCheckout = () => {

   }

  return (
    <div className={`w-[20em] absolute top-0 right-0  z-[9999] bg-white shadow-lg h-[100vh] overflow-hidden `}>
      <div className='flex items-center justify-between px-8 py-8'>
         <h1 className='text-[1.3rem] font-mono font-bold'>Favourite</h1>
         <GrClose className='text-[1.3rem] font-mono font-bold cursor-pointer' onClick={() => setShowFav(!showfav)}/>
      </div>

      <div className='w-[18em] px-2 mx-auto h-[60vh] overflow-y-scroll scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin'>
         {
            favItems?.map((v, i) => (
               <FavCard key={i} id={v.id} title={v.title} image={v.image} Price={v.Price} quantity={v.quantity} />
            ))
         }
      </div>

    </div>
  )
}

export default Fav