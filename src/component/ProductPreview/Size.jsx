import React from 'react';

const sizeMap = {
   'Small': 'XS',
   'Medium': 'SM',
   'Large': 'LG',
   'X-Large': 'XL',
   'XX-Large': 'XXL'
}

const Sizes = ({ sizes, selectedSize, handleSizeSelect }) => {
  return (
   <div className='my-4 mx-2 md:mx-8'>
   <p className='text-lg font-medium text-gray-700'>Sizes:</p>
    <div className='flex mt-2'>
      {sizes && sizes.map((size, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full border flex items-center justify-center border-gray-400 mx-2 cursor-pointer ${selectedSize === size ? 'bg-blue-500 text-white' : 'text-gray-500'}`}
          onClick={() => handleSizeSelect(size)}
        >
          {sizeMap[size]}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Sizes;
