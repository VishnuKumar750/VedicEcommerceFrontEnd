import React from 'react'
import CatCard from './category/CatCard'

import { cate } from '../../dummyData'

const Category = () => {
  
  return (
    <div className='grid gap-4 py-4 px-8 sm:grid-cols-2 lg:grid-cols-3'>
      {cate.map((v,i) => (
         <CatCard key={i} data={v} />
      ))}
    </div>
  )
}

export default Category