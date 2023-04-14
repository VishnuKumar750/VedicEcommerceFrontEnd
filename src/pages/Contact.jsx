import React from 'react'
import Banner from '../component/Banner'
import Form from '../component/contact/form'
import Address from '../component/contact/address'

const Contact = () => {
  return (
    <div>
      <div className='w-full h-[50vh]'>
      <Banner title={'Contact Us'} />
    </div>
    <div className='w-full'>
      <div className='mx-auto flex flex-col sm:flex-row items-center w-[80%] border-2 '>
        <Form />
        <Address />
      </div>
    </div>
    </div>
  )
}

export default Contact