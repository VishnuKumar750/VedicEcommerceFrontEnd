import React, { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

const ProductImages = ({ images }) => {
   const [currImg, setCurrImg ] = useState(images[0]);
  const [index, setIndex] = useState(0);

   const incrementIndex = (index) => {
     // console.log('increment');
     index++;
     index = index % images.length;
     setIndex(index);
     setCurrImg(images[index]);
   }
 
   const decrementIndex = (index) => {
   //   console.log('decrement');
     index--;
     if(index < 0) index = images.length - 1;
     index =  index % images.length;
     setIndex(index);
     setCurrImg(images[index]);
   }
 

  return (
    <div className='flex-1 mt-6 md:mt-4 lg:mt-0 w-full h-full'>
      <div className='w-full flex flex-col items-center justify-center mx-2'>
         <div className='w-[80%] relative h-[25em] md:h-[20em] lg:h-[25em]'>
         <img src={currImg} alt="images" className='w-full h-full object-scale-down'/>
         <div className='absolute top-40 md:top-50 flex justify-between items-center w-full'>
            <FaCaretLeft className='text-[2rem] cursor-pointer' onClick={() => decrementIndex(index)} />
            <FaCaretRight  className='text-[2rem] cursor-pointer' onClick={() => incrementIndex(index)}/>
          </div>
         </div>
         <div className='grid grid-cols-3 gap-2 my-4 overflow-hidden'>
            {images.map((image, index) => (
            <div key={index} className='w-[5em] h-[5em]'>
               <img src={image} alt="images" className='w-full h-full object-contain'/>
               
            </div>
            ))}
         </div>

      </div>
    </div>
  )
}

{/* <div className='w-full px-6 md:flex-1 h-[80%] mt-8 flex'>
        <div className='flex flex-col gap-4 w-[30%] overflow-hidden '>
          {product.images?.map((v, i) => (
            <img key={i} src={v} alt="img" className='w-[70%] mx-2 h-[30%] object-contain' />
          ))}
        </div>

        <div className='w-[50%] md:h-[80%] relative'>
          <img src={currImg} alt="img" className={`w-full h-full object-contain transition-all `} />
          <div className='absolute top-40 md:top-50 flex justify-between items-center w-full'>
            <FaCaretLeft className='text-[2rem] cursor-pointer' onClick={() => decrementIndex(index)} />
            <FaCaretRight  className='text-[2rem] cursor-pointer' onClick={() => incrementIndex(index)}/>
          </div>
        </div>
      </div> */}

export default ProductImages