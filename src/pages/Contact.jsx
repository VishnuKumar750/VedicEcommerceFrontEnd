import React from 'react'
import Banner from '../component/Banner'
import Form from '../component/contact/form'
import Address from '../component/contact/address'
import contactIcon from '/icons/contactIcon.png'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Vedic E-Commerce Store</title>
        <meta name="description" content="Contact us to learn more about our products and services at Vedic E-Commerce Store" />
        <meta name="keywords" content="contact, email, phone, address, support" />
        <link rel="icon" href={contactIcon} type="image/png" sizes="32x32" />
      </Helmet>
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