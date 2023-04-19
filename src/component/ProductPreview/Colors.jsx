import React from 'react';

const Colors = ({ colors, selectedColor, handleColorSelect }) => {
  return (
    <div className='my-4'>
      <p className='text-lg font-medium text-gray-700'>Colors:</p>
      <div className='flex mt-2'>
        {colors.map(color => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border border-gray-400 mx-2 ${color === selectedColor ? 'border-blue-500' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Colors;
