import React from 'react'

const CatCard = ({ data }) => {
  return (
    <div className='w-[98%] sm:w-[100%] h-[16em] bg-cover bg-no-repeat transition-all delay-300 cursor-pointer hover:bg-gray-500' style={{ backgroundImage: `url(${data?.image}) `}}>
      <div className='py-4 px-4'>
         <h1 className='text-[2rem] text-black   font-bold'>{data?.title}</h1>
         <p className='text-[1rem] font-bold text-gray-600'>{data?.desc}</p>
      </div>

    </div>
  )
}

export default CatCard