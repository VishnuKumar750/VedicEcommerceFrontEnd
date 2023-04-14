import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Checkout from './pages/Checkout';
import { getCartItemsFromLocalStorage } from './redux/cart';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getFavouriteItemsFromLocalStorage } from './redux/favourite'
import Account from './pages/Account'
import { fetchCategoriesSuccess } from './redux/categories'
import { ToastContainer } from 'react-toastify'

function App() {
  const dispatch = useDispatch();

  const fetchCategoryData = async () => {
    const response = await fetch('https://dummyjson.com/products/categories');
    const data = await response.json();
    console.log(data);
    
    dispatch(fetchCategoriesSuccess(data));
  }


  useEffect(() => {
    fetchCategoryData()
    dispatch(getCartItemsFromLocalStorage());
    dispatch(getFavouriteItemsFromLocalStorage());
  });

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/Account' element={<Account />} />
      <Route path="/checkout-Product" element={<Checkout />} />
    </Routes>
    <Footer />
    

    </BrowserRouter>
  )
}

export default App
