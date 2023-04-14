import React, { useEffect, useState } from 'react'
import Card from './product/Card'
import { BsFilter } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import ProductPreview from './ProductPreview'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart, fetchProductsSuccess } from '../redux/product'
import { fetchCategoriesFailure } from '../redux/categories'
import { ToastContainer } from 'react-toastify'

const Product = () => {
   const [ filter, setFilter ] = useState(false);
   const [ search, setSearch ] = useState(false);
   const [query, setQuery ] = useState('');
   const [ activePrice, setActivePrice ] = useState(0)
   const [ lightbox, setLightbox ] = useState(false);

   const [ sort, setSort ] = useState(0);
   const [active, setActive] = useState(0);
   

   const { products, loading } = useSelector(state => state.product);
   const { categories } = useSelector(state => state.category);
   const dispatch = useDispatch();

   const [querySearch, setQuerySearch ] = useState('');
   const [queryCat, setQueryCat ] = useState('');

   

   const fetchProducts = async (search, cat) => {
      try {
         dispatch(fetchProductsStart());
         console.log(cat);
         
         const result = await fetch(`https://dummyjson.com/products?limit=100`)
         const data = await result.json();

         if(cat) {
            data.products = data.products.filter(item => item.category.toLowerCase().includes(cat.toLowerCase()))
         }
         
         console.log(search);
         if (search) {
            const regex = new RegExp(search, "i"); // Create case-insensitive regex from search string
            data.products = data.products.filter((item) => {
              return Object.values(item).some((value) => {
                if (typeof value === "string") {
                  return regex.test(value); // Check if value matches the regular expression
                }
                return false; // Skip non-string values
              });
            });
          }

          console.log(activePrice);
          if(activePrice) {
            const selectedPrice = price[activePrice];

            data.products = data.products.filter(item => {
               if(selectedPrice === 0) {
                  return true;
               } else {
                  const priceRange = selectedPrice.name.split(' - ');
                  
    const minPrice = parseFloat(priceRange[0].replace('₹', '').replace(',', ''));
    const maxPrice = parseFloat(priceRange[1].replace('₹', '').replace(',', ''));
    console.log(minPrice, maxPrice);
    return (item.price >= minPrice && item.price <= maxPrice);
               }
            })
          }
         console.log(data)

         dispatch(fetchProductsStart())

         setTimeout(() => {
            dispatch(fetchProductsSuccess(data.products))
         }, 2000);
         
      } catch (error) {
         dispatch(fetchCategoriesFailure(error.message))
      }

   }

   


   useEffect(() => {
      fetchProducts(querySearch, queryCat, activePrice);
   },[querySearch, queryCat, dispatch, activePrice])


  const sortby = [
   {
      id: 0, name: 'Default'
   },
   { id: 1, name: 'latest'}
  ]

  const price = [
   { id: 0, name: 'All'},
   { id: 1, name: '₹0.00 - ₹1,000.00'},
   { id: 2, name: '₹1,000.00 - ₹5,000.00'},
   { id: 3, name: '₹5,000.00 - ₹10,000.00'},
   { id: 4, name: '₹10,000.00 - ₹15,000.00'},
   { id: 5, name: '₹15,000.00 - ₹20,0000000.00'},
  ]

  const handleActivePrice = (id) => {
   setActivePrice(id);
  }

  const handleSort = (id) => {
   setSort(id);
  }

  const handleMenuItemClick = (item) => {
   setActive(item);
   setQueryCat(item)
 }

 const handleSearch = () => {
   setQuerySearch('');
   setSearch(!search);
 }

 
 

  return (
    <div className='px-[1.5em] w-full '>
      <h1 className='text-[2rem] py-4 font-bold'>PRODUCT OVERVIEW</h1>
      <div className='flex justify-between flex-col sm:flex-row'>
      <div className='flex py-4'>
         <ul className='flex  items-center  flex-wrap'>
         {categories?.map((item) => (
          <li
            key={item}
            className={`text-[1.1rem]  px-2 mx-2  my-2 cursor-pointer transition-all font-serif ${active === item ? 'border-b-2 border-yellow-300' : ''}`}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </li>
        ))}
            
         </ul>
      </div>
      <div className='py-6 mb-2'>
         <ul className='flex items-center '>
            <li className='px-2 text-[1rem] font-serif flex items-center cursor-pointer' onClick={() => setFilter(!filter)}>
               {
                  filter ? 
                  <GrClose className='mx-2 font-bold'/>
                  :
                  <BsFilter className='mx-2'/>
               }
               Filters   
            </li>
            <li className='mx-4 text-[1rem] flex items-center cursor-pointer font-serif' onClick={handleSearch}>
               {
                  search ? 
                  <GrClose className='mx-2 font-bold'/>
                  :
                  <FaSearch className='mx-2'/>
               }
               Search</li>
         </ul>

      </div>
      </div>
         <div className={`${search ? 'block' : 'hidden'} border-b-2 p-2 my-2`}>
            <input placeholder='search' value={querySearch} className='outline-none w-full px-2' onChange={(e) => setQuerySearch(e.target.value)}/>
         </div>

         <div className={`${filter ? 'block' : 'hidden'} w-full  px-[1em] py-[1em]  mb-8 bg-gray-100 grid sm:grid-cols-3`}>
               <div className=''>
                  <h1 className='text-[1.3rem] font-bold py-4'>Sort By</h1>
                  <ul>
                     {sortby.map((v, i) => (
                        <li key={v.id} className={`${sort === v.id ? 'border-b-2 w-[fit-content] border-blue-500' : ''}  text-gray-600 leading-8 text-[1rem] cursor-pointer`} onClick={() => setSort(v.id)}>{v.name}</li>
                     ))}
                  </ul>
               </div>

               <div className=''>
                  <h1 className='text-[1.3rem] font-bold py-4'>Price</h1>
                  <ul>
                     {price.map((v, i) => (
                        <li key={v.id} className={`${activePrice === v.id ? 'border-b-2 w-[fit-content] border-blue-500' : ''} text-gray-600 leading-8 text-[1rem] cursor-pointer`} onClick={() => handleActivePrice(v.id)}>{v.name}</li>
                     ))}
                  </ul>
               </div>
         </div>

         {/* display products */}
         {
            loading ? 
            <div className='h-[50vh] w-full flex items-center justify-center '>
               <h1>Loading</h1>
            </div>
            :
      <div
         className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grrid-cols-4 2xl:flex 2xl:flex-wrap'>
      {products?.map((v, i) => (
         <Card data={v} key={i} lightbox={lightbox} setLightbox={setLightbox}/>
      ))}
      </div>
         }

         {
            lightbox 
            &&
      <ProductPreview lightbox={lightbox} setLightbox={setLightbox}/>
      
         }



    </div>
  )
}

export default Product