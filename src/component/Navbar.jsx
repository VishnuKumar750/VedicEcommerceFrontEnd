import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaRegHeart } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import Head from './navbar/Head'
import NavList from './navbar/NavList'
import Cart from './navbar/cart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Fav from './navbar/Fav'
import Login from './Login'
import { LOGOUT } from '../redux/user'

const Navbar = () => {
   const [openMenu, setOpenMenu ] = useState(false);
   const [showCart, setShowCart] = useState(false);
   const [ bg, setbg ] = useState(false);
   const [ active, setActive ] = useState(0);
   const [ showfav, setShowFav ] = useState(false);
   
   const { cartItems } = useSelector(state => state.cart )
   const { favItems } = useSelector(state => state.fav )

   const dispatch = useDispatch();
   const { isAuthenticated } = useSelector((state) => state.user)

   const [ showLogin, setShowLogin ] = useState(false);

   const changeBg = () => {
      if(window.scrollY >= 60) {
         setbg(true)
      } else {
         setbg(false)
      }
   }

   useEffect(() => {
      changeBg();
      window.addEventListener('scroll', changeBg);
   })

   const menu = [
      { id: 0, title: 'Home', link: '/' },
      { id: 1, title: 'About us', link: '/About' },
      { id: 2, title: 'Contact us', link: '/Contact' },
   ]

   const handleLogout = () => {
      dispatch(LOGOUT())
   }
   

  return (
    <header className={`z-[999] ${bg ? 'bg-white shadow-md  transition-all delay-800' : 'transparent transition-all delay-300'} sm:fixed w-full`}>
      <div className={'text-xl hidden sm:flex flex-col sm:flex-row items-start px-[1.5em] sm:items-center justify-between bg-[#282828] p-3 text-[#ffffff] font-normal leading-8'}>
      <p className='text-[1rem] font-mono'>Free shipping for standard order over 500
      </p>
      
      {isAuthenticated ? (
            <div className='flex items-center'>
            <p className='text-[1rem] font-mono cursor-pointer mx-4 border-r-2 px-4'>
            <Link to={`/Account/`}>
              My Account
            </Link>
            </p>
            <p className='text-[1rem] font-mono cursor-pointer' onClick={handleLogout}>LogOut</p>
            </div>
          ) : (
            <div className='flex items-center'>
              <p className='text-[1rem] font-mono cursor-pointer' onClick={() => setShowLogin(true)}>
              Login / Register
          </p>
            </div>
          )}
    </div>
      <div className='flex items-center justify-between p-3 px-[2em] shadow-sm'>
      <div className='flex items-center'>
      <h1 className='text-3xl'>VEDIC</h1>
      <ul className='hidden sm:flex items-center justify-space mx-6'>
         {menu && menu?.map((v) => (
           <Link key={v.id} to={v.link}>
           <li  onClick={() => setActive(v.id)} className={`px-2 font-mono font-bold text-md cursor-pointer ${active === v.id ? "border-b-2 border-rose-400" : ""}`}  >
               
               {v.title}
               </li>
            </Link>
         ))}
      </ul>

      </div>
      <div className='w-[11em] '>
         <ul className='flex items-center '>

            <div className='relative'>
               <div className={`${cartItems.length > 0 ? 'block' : 'hidden'} absolute -top-2 right-2 w-5 h-5 flex items-center justify-center  rounded-full bg-blue-500 text-white`}>{cartItems.length}</div>
            <FaShoppingCart className={`${cartItems.length > 0 ? 'text-blue-700' : ''} text-2xl cursor-pointer mx-4`} onClick={() => setShowCart(!showCart)}/>
            </div>
            
            <div className='relative'>
            <div className={`${favItems.length > 0 ? 'block' : 'hidden'} absolute -top-2 right-2 w-5 h-5 flex items-center justify-center  rounded-full bg-red-500 text-white`}>{favItems.length}</div>
            <FaRegHeart className={`text-2xl ${favItems.length > 0 ? 'text-red-600' : ''} cursor-pointer mx-4`} onClick={() => setShowFav(!showfav)}/>
            </div>
            
            <FiMenu className={`${openMenu ? 'hidden' : 'block'} text-[2rem] cursor-pointer  transition-all delay-1000 sm:hidden mx-4`} onClick={() => setOpenMenu(!openMenu)
            }/>
            <GrClose className={`text-[2rem] ${openMenu ? 'block': 'hidden'} mx-4 cursor-pointer transition-all delay-1000 sm:hidden`} onClick={() => setOpenMenu(!openMenu)
            }/>
         </ul>
      </div>
      </div>

      <div className={`sm:hidden transform transition-all  ${openMenu ? 'translate-y-200': 'hidden'} `}>
         <Head showLogin={showLogin} setShowLogin={setShowLogin} />
         <NavList menu={menu} />
      </div>
      {
         showCart 
         &&
         <Cart setShowCart={setShowCart} showCart={showCart} />
      }

      {
         showfav
          &&
         <Fav setShowFav={setShowFav} showfav={showfav} />
      }

      {showLogin && 
      <Login showLogin={showLogin} setShowLogin={setShowLogin} />
      }
    </header>
  )
}

export default Navbar