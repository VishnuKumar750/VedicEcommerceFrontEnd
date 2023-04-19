import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={i}
        className='text-yellow-500 text-[1.4rem] hover:scale-125'
      />
    );
  }
  
  if (halfStars) {
    stars.push(
      <FaStarHalfAlt
        key={fullStars}
        className='text-yellow-500 text-[1.5rem] hover:scale-125'
      />
    );
  }
  
  for (let i = stars.length; i < 5; i++) {
    stars.push(
      <FaRegStar
        key={i}
        className='text-yellow-500 text-[1.3rem] hover:scale-125'
      />
    );
  }

  return (
    <div className='flex'>
      {stars}
    </div>
  );
};

export default Rating;
