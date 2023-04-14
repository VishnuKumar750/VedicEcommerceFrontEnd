import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addToFavourite, removefromFavourite } from '../../redux/favourite';
import { setProduct } from '../../redux/singleProduct';
import Rupee from '../rupee';
import { toast } from 'react-toastify';

const Card = ({ data, lightbox, setLightbox }) => {
   const [ like, setLike ] = useState(false);
  //  console.log(data);
  const dispatch = useDispatch();

   const handleLike = ( { id, title, images } ) => {
      // console.log(_id, name, image);
      if(!like) {
        dispatch(addToFavourite({
          id,
          title,
          image: images[0]
        }))
        setLike(prev => !prev);
        toast.success('Item added to favourite');
      } else {
        // console.log('clicked', data.id)
        dispatch(removefromFavourite(id));
        setLike(prev => !prev);
      }
    }

    const handleProductDetails = () => {
      dispatch(setProduct(data))
      setLightbox(!lightbox)
    }

  return (
    <div className='w-full h-[34em] sm:w-[14em] sm:h-[24em] lg:w-[15em] xl:w-[18em] lg:h-[28em] overflow-hidden cursor-pointer relative group inline-block ' >
      <div className='bg-cover bg-no-repeat h-full transition-all delay-300 w-full group-hover:scale-110 
      ' style={{ backgroundImage: `url(${ data?.images[0] })`}}>

      </div>
         <button className='bg-white px-6 py-2 absolute bottom-0 transition-all delay-300 group-hover:-translate-y-32 left-[30%] sm:left-[28%] rounded-full font-bold hover:bg-gray-700 hover:text-white' onClick={handleProductDetails}>Quick View</button>

      <div className='absolute bg-white bottom-0 w-full flex items-center justify-between px-4'>
         <div>
         <h1 className='py-1 px-2 text-[1rem] text-gray-400'>{data?.title}</h1>
         <p className='py-1 px-2 text-[1rem] text-gray-800 '><span>&#8377;</span> {data?.price}</p>
         </div>
         <FaHeart className={`text-[1.5rem] cursor-pointer transition-all ${like ? 'text-red-500' : ' text-gray-300'} `} onClick={() => handleLike(data)} />
      </div>
    </div>
  )
}

export default Card