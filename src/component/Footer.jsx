import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='p-[1.5em] py-[3em] grid gap-10 mt-[2em] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-slate-900 '>
      <div className='py-2'>
         <h2 className='text-[1rem] py-2 font-bold text-white'>CATEGORIES</h2>
         <ul>
            <li className='text-gray-300 cursor-pointer'>Women</li>
            <li className='text-gray-300 cursor-pointer'>Men</li>
            <li className='text-gray-300 cursor-pointer'>Shoes</li>
            <li className='text-gray-300 cursor-pointer'>Watches</li>
         </ul>
      </div>

      <div className='py-2'>
         <h2 className='text-[1rem] py-2 font-bold text-white'>Help</h2>
         <ul>
            <li className='text-gray-300 cursor-pointer'>Track Order</li>
            <li className='text-gray-300 cursor-pointer'>Shipping</li>
            <li className='text-gray-300 cursor-pointer'>Returns</li>
            <li className='text-gray-300 cursor-pointer'>FAQs</li>
         </ul>
      </div>

      <div className='py-2'>
         <h2 className='text-[1rem] py-2 font-bold text-white'>GET IN TOUCH</h2>
         <p className='text-gray-300'>Any questions? Let us know in store at 8th floor, Faridabad, Haryana or call us on (+1) 96 716 xxxx</p>

         <div className='flex items-center py-4 justify-between w-[8em]'>
            <FaFacebook className='text-[1.5rem] text-gray-300'/>
            <FaInstagram className='text-[1.5rem] text-gray-300'/>
            <FaPinterest className='text-[1.5rem] text-gray-300'/>
         </div>
      </div>

      <div className='py-2'>
         <h2 className='text-[1rem] py-2 font-bold text-white'>NEWSLETTER</h2>
         <input placeholder='email@example.com' className='my-4 bg-transparent outline-none border-b-2 text-white px-2 ' />
         <button className='bg-blue-400 my-4 px-4 py-2 text-white rounded-lg'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Footer