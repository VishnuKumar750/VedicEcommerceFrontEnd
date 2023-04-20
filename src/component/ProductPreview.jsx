import React, { useMemo, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {  addToCart } from '../redux/cart'
import { toast } from 'react-toastify'
import Rating from './ProductPreview/Rating';
import Colors from './ProductPreview/Colors';
import Sizes from './ProductPreview/Size';
import ProductImages from './ProductPreview/ProductImages';

const ProductPreview = ({ lightbox, setLightbox }) => {
  const [ quantity, setQuantity ] = useState(1);
  const dispatch = useDispatch();
  const { product }  = useSelector(state => state.CurrP);
  const [selectedColor, setSelectedColor] = useState(product.color[0]);
  const [selectedSize, setSelectedSize] = useState(product.size[0]);

  const increment = () => {
    setQuantity(prev => prev + 1);
  }

  const decrement = () => {
    if(quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }
 
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleCart = () => {
    const item = { 
      id: product._id,
      title: product.title,
      image: product.images[0],
      Price: product.price, 
      quantity, 
      total: quantity * product.price,
      size: selectedSize,
      color: selectedColor,
    }

    if (item.id && item.title && item.image && item.Price && item.quantity && item.total && item.size && item.color) {
      dispatch(addToCart(item));
      setLightbox(!lightbox)
    setTimeout(() => {
      toast.success('Item added to cart')
    }, 1000);
    } else {
      toast.error('Please select a color and size')
    }
  }

  return (
    <div className="z-[9999] left-0 fixed  bg-gray-900 bg-opacity-50 top-0 w-full h-full  overflow-y-scroll" onClick={() => setLightbox(!lightbox)}>
     
     <div className='w-[90%] mx-auto md:w-[80%] md:h-[32em] lg:h-[38em] bg-white my-2 sm:py-8 opacity-1 mt-[2em]  flex flex-col sm:flex-row' onClick={(e) => { e.stopPropagation() }}>      
      <ProductImages images={product.images} />

      <div className='px-6 md:flex-1 md:h-[30em]'>
         <h1 className='text-[1.5rem] lg:[2rem] font-bold font-sans text-gray-700 my-4'>{product.title}</h1>
         <Rating rating={product?.rating} />

         <p className='text-[1.2rem] text-gray-900 font-bold my-4'><span>&#8377;</span> {product.price}</p>
         <p className='text-[1rem] text-gray-500 font-serif my-4'>{product.description}</p>

         <div className='flex items-center'>
         <Colors colors={product?.color} selectedColor={selectedColor} handleColorSelect={handleColorSelect} />

         <Sizes sizes={product.size} selectedSize={selectedSize} handleSizeSelect={handleSizeSelect} />
         </div>

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