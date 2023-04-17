import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import { getCartItemsFromLocalStorage } from './redux/cart';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFavouriteItemsFromLocalStorage } from './redux/favourite'
import Account from './pages/Account'
import { fetchCategoriesSuccess } from './redux/categories'
import { BASE_URL, PRODUCTION_URL } from '../constants'
import Success from './pages/Success'
import { INITIALIZE_USER } from './redux/user'

function App() {
  const dispatch = useDispatch();

  const fetchCategoryData = async () => {
    const response = await fetch(`${PRODUCTION_URL || BASE_URL}/categories/get`);
    const data = await response.json();
    // console.log(data);
    
    dispatch(fetchCategoriesSuccess(data[0].categories));
  }

  useEffect(() => {
    dispatch(INITIALIZE_USER())
    fetchCategoryData()
    dispatch(getCartItemsFromLocalStorage());
    dispatch(getFavouriteItemsFromLocalStorage());
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.user)
  const [ showLogin, setShowLogin ] = useState(false)


  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home  />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/Account' element={<Account />} />
      <Route path="/checkout-Product" element={<Checkout />} />
      <Route path='/checkout-success' element={<Success />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
