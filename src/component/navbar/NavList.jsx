import React from 'react'

import { Link } from 'react-router-dom'

const NavList = ( { menu }) => {
  // console.log(menu);

  return (
    <div className={`bg-sky-600 p-3 `}>
      <ul className='text-white text-[1rem] leading-8 font-bold '>
        {menu?.map((v) => (
         <li key={v.id} className='cursor-pointer'>
          <Link to={v.link}>
           {v.title}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default NavList