import React from 'react'
import aboutImage from '/about/about.jpg'
import story from '/about/story.jpg'
import Banner from '../component/Banner'
import storeIcon from '/icons/store.png'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <div>
    <Helmet>
        <title>About Us - Vedic E-Commerce Store</title>
        <meta name="description" content="Learn more about Vedic E-Commerce Store and our mission to provide the best products to our customers." />
        <meta name="keywords" content="vedic, ecommerce, about us, mission" />
        <link rel="icon" type="image/png" href={storeIcon} sizes="32x32" />
        <meta property="og:title" content="About Us - Vedic E-Commerce Store" />
        <meta property="og:description" content="Learn more about Vedic E-Commerce Store and our mission to provide the best products to our customers." />
        <meta property="og:image" content={aboutImage} />
        <meta property="og:url" content="https://example.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Vedic E-Commerce Store" />
        <meta name="twitter:description" content="Learn more about Vedic E-Commerce Store and our mission to provide the best products to our customers." />
        <meta name="twitter:image" content={aboutImage} />
      </Helmet>
    <div className='w-full h-[50vh]'>
      <Banner title={'About Us'} />
    </div>
    <div className={'px-[1.5em] '}>
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className='sm:flex-1'>
          <h1 className='text-[2rem] font-bold font-serif' >Our Story</h1>
          <p className='text-[1rem] w-full  sm:w-[90%] text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum accusantium mollitia perferendis deserunt obcaecati veritatis quaerat voluptas at, quia rerum omnis, eligendi dignissimos vero odit corrupti minus consequuntur molestias architecto facilis fugit! Eligendi exercitationem esse quae nulla.</p>
        </div>
        <div className="relative overflow-hidden h-[18em] sm:h-[24em] w-[15em] sm:w-[22em] my-[1em] ">
        <div className={'w-[80%] h-[90%] bg-contain bg-no-repeat transition-all relative hover:scale-110 overflow-hidden z-[99]'} style={{ backgroundImage: `url(${story})`}}>
        </div>
        <div className='absolute border-2 w-[80%] h-[95%] top-5 left-10'></div>

        </div>
      </div>
      <div className='flex flex-col justify-between sm:flex-row'>
        
      <div className="relative overflow-hidden h-[18em] sm:h-[24em] w-[15em] sm:w-[22em] my-[1em] ">
        <div className={'w-[80%] h-[90%] bg-contain bg-no-repeat transition-all relative hover:scale-110 overflow-hidden z-[99]'} style={{ backgroundImage: `url(${story})`}}>
        </div>
        <div className='absolute border-2 w-[80%] h-[90%] top-5 left-10'></div>

        </div>
        <div className='sm:flex-1'>
          <h1 className='text-[2rem] font-bold font-serif' >Our Mission</h1>
          <p className='text-[1rem] w-full sm:w-[90%] text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eum accusantium mollitia perferendis deserunt obcaecati veritatis quaerat voluptas at, quia rerum omnis, eligendi dignissimos vero odit corrupti minus consequuntur molestias architecto facilis fugit! Eligendi exercitationem esse quae nulla.</p>

          <p className='border-l-2 px-8 w-full sm:w-[80%] my-10 text-[1rem] text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis autem vel fuga. Dolores repudiandae quisquam veniam rerum iure vel, nihil atque officia molestias odit. Animi veniam architecto atque harum inventore laborum ex!
          <br />
          <span>- Steve Jobs</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About