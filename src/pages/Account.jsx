import React from 'react'
import Order from '../component/Order'
import UserProfile from '../component/UserProfile'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import settingIcon from '/icons/setting.png';

const Account = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();
  
  if(!user) {
    navigate('/', { replace: true });
    return;
  }


  return (
    <>
    <Helmet>
        <title>User Account | My Awesome E-Commerce Store</title>
        <meta name="description" content="Manage your account details and orders on My Awesome E-Commerce Store." />
        <meta name="keywords" content="ecommerce, account, orders" />
        <link rel="icon" href={settingIcon} type="image/png" sizes="32x32" />
      </Helmet>
    <div className='hidden sm:block h-[10em] w-full bg-gray-200 bg-opacity-30'></div>
    <div className='w-full relative flex flex-col justify-around sm:flex-row px-4 bg-gray-200 bg-opacity-30'>
      <UserProfile />
      <Order />
    </div>
    </>
  )
}

export default Account