import React, { useEffect, useState } from 'react'

import { FaMinus, FaPlus, FaCaretRight, FaCaretLeft } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import {  addToCart } from '../redux/cart'
import Rupee from './rupee'
import { ToastContainer, toast } from 'react-toastify'


const ProductPreview = ({ lightbox, setLightbox }) => {
  const [ quantity, setQuantity ] = useState(1);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const { product }  = useSelector(state => state.CurrP);

  

  const increment = () => {
    setQuantity(prev => prev + 1);
  }
  const decrement = () => {
    if(quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }
  
  const handleCart = () => {
    const item = { 
      id: product.id,
      title: product.title,
      image: product.images[0],
      Price: product.price, 
      quantity, 
      total: quantity * product.price,
    }
    dispatch(addToCart(item));
    setLightbox(!lightbox)
    setTimeout(() => {
      toast.success('Item added to cart')
    }, 1000);
  }

  
  const [currImg, setCurrImg ] = useState(product?.images[0]);

  const incrementIndex = (index) => {
    // console.log('increment');
    index++;
    index = index % product.images.length;
    setIndex(index);
    setCurrImg(product.images[index]);

  }

  const decrementIndex = (index) => {
    console.log('decrement');
    index--;
    if(index < 0) index = product.images.length - 1;
    index =  index % product.images.length;
    setIndex(index);
    setCurrImg(product.images[index]);
  }

  return (
    <div className="z-[9999] left-0 fixed  bg-gray-900 bg-opacity-50 top-0 w-full h-full  flex items-center justify-center overflow-y-scroll">
     
     <AiOutlineClose className='absolute top-10 sm:top-0 lg:top-10 right-10 text-[2rem] font-bold cursor-pointer text-white' onClick={() => setLightbox(!lightbox)} />
      <div className='w-[80%] md:w-[90%] lg:w-[80%] bg-white my-8  sm:py-16 opacity-1 mt-[22em] md:mt-[4em] flex flex-col sm:flex-row'>

      <div className='w-full  h-[20em] my-2 flex '>
        <div className='flex flex-col gap-4 w-[30%] overflow-hidden '>
          {product.images?.map((v, i) => (
            <img key={i} src={v} alt="img" className='w-[70%] mx-2 h-[30%] object-contain' />
          ))}
        </div>
        <div className='w-[50%] h-full relative'>
        <img src={currImg} alt="img" className={`w-full h-full object-contain transition-all `} />
        <div className='absolute top-40 flex justify-between items-center w-full'>
        <FaCaretLeft className='text-[2rem] cursor-pointer' onClick={() => decrementIndex(index)} />
        <FaCaretRight  className='text-[2rem] cursor-pointer' onClick={() => incrementIndex(index)}/>
        </div>
        </div>

      </div>
      <div className='px-4'>
         <h1 className='text-[2rem] font-bold font-sans text-gray-700 my-4'>{product.title}</h1>
         <p className='text-[1.2rem] text-gray-900 font-bold my-4'><span>&#8377;</span> {product.price}</p>
         <p className='text-[1rem] text-gray-500 font-serif my-4'>{product.description}</p>

        <div className='flex flex-col items-start my-8'>
          <div className='flex items-center  w-[40%]'>
          <div className='border-2 p-4' onClick={decrement}>
          <FaMinus className='text-[1rem]' />
          </div>
          <div className='border-2 text-[1.5rem] px-4 py-[.25em]'>{quantity}</div>
          <div className='border-2 p-4' onClick={increment} >
          <FaPlus className='text-[1rem]' />
          </div>
         </div>
         <button className='text-[1rem] my-4 bg-blue-500 rounded-full px-9 lg:px-10 lg:py-3 text-white font-bold py-2' onClick={() => handleCart()}>Add to Cart</button>
        </div>
      </div>
      </div>            
    </div>      
  )
}

export default ProductPreview