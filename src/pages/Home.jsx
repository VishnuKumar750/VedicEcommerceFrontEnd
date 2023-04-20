import React from 'react'
import Hero from '../component/Hero'
import Category from '../component/Category'
import Product from '../component/Product'
import { Helmet } from 'react-helmet'
import storeIcon from '/icons/store.png'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Vedic E-Commerce Store - Home</title>
        <meta name="description" content="Shop the latest products at My Awesome E-Commerce Store" />
        <meta name="keywords" content="ecommerce, shop, products, online store, clothing, accessories, electronics" />
        <link rel="icon" href={storeIcon} type="image/png" sizes="32x32" />
      </Helmet>
    <Hero />
    <Category />
    <Product  />
    </>
  )
}

export default Home