import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './product/Card';
import ProductPreview from './ProductPreview';
import { fetchProductsStart, fetchProductsSuccess } from '../redux/product';
import { fetchCategoriesFailure } from '../redux/categories';
import { BsFilter } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { fetchProducts } from '../api/api';
import { colors, price, sortby } from '../api/data';

const Product = () => {
   const dispatch = useDispatch();

   const { products, loading, totalPage } = useSelector((state) => state.product);
   const { categories } = useSelector((state) => state.category);

   const [ page, setPage ] = useState(1);
 
   const [filter, setFilter] = useState(false);
   const [search, setSearch] = useState(false);
   const [activePrice, setActivePrice] = useState(0);
   const [lightbox, setLightbox] = useState(false);
   const [sort, setSort] = useState(0);
   const [active, setActive] = useState(0);
   const [querySearch, setQuerySearch] = useState('');
   const [queryCat, setQueryCat] = useState(''); 
const [activeColor, setActiveColor] = useState('');

    useEffect(() => {
      const getProducts = async () => {
        try {
          dispatch(fetchProductsStart());

          if(!filter) {
            setQuerySearch('');
            setActivePrice(0);
            setSort(0);
            setActiveColor('');
          }

          const data = await fetchProducts({ search: querySearch, category: queryCat, activePrice, sortBy: sort, page, color:activeColor });
          setTimeout(() => {
            dispatch(fetchProductsSuccess({ products: data.products, currPage: data.currentPage, totalPage: data.totalPages }));
          }, 2000);
        } catch (error) {
          dispatch(fetchCategoriesFailure(error.message));
        }
      };
  
      getProducts();
    }, [querySearch, queryCat, activePrice, sort, page, activeColor, filter]);
  

  const handleActivePrice = (id) => {
   setActivePrice(id);
  }

  const handleMenuItemClick = (item) => {
   setActive(item);
   setQueryCat(item)
 }

 const handleSearch = () => {
   setQuerySearch('');
   setSearch(!search);
 }

 const handlePrevPage = (e) => {
   e.preventDefault();
   if (page > 1) {
     setPage(prev => prev - 1);
   }
 }

 const handleNextPage = (e) => {
   e.preventDefault()
   if (page < totalPage) {
     setPage(prev => prev + 1);
   }
 }

const handleActiveColor = (name) => {
  setActiveColor(name);
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

               <div className=''>
        <h1 className='text-[1.3rem] font-bold py-4'>Colors</h1>
        <div className="grid grid-cols-5 gap-2 w-[12em]">
          {colors.map((v, i) => (
            <div
              key={v.id}
              className={`cursor-pointer w-8 h-8 ${activeColor === v.name ? 'border-2 border-gray-800' : ''}`}
              style={{ backgroundColor: v.code }}
              onClick={() => handleActiveColor(v.name)}
            ></div>
          ))}
        </div>
              </div>
         </div>

         {/* display products */}
         {
            loading ? 
            <div className='h-[50vh] w-full flex items-center justify-center '>
            <div
  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
  >
</div>
            </div>
            :
            (
               products?.length === 0 ?
               <>
            <div className='h-[50vh] w-full flex items-center justify-center flex-col'>
               <MdProductionQuantityLimits className='text-red-500 text-[8rem]  my-4'/>
               <h1 className='text-[2rem] font-mono font-bold text-gray-900'>No Products Found</h1>
               </div>
               </>
               :

      <div
         className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grrid-cols-4 2xl:flex 2xl:flex-wrap my-8'>
      {products?.map((v, i) => (
         <Card data={v} key={i} lightbox={lightbox} setLightbox={setLightbox}/>
      ))}
      </div>
            )
         }

{products?.length > 0 && (
         <nav aria-label="Page navigation example" className="flex items-center justify-center ">
<ul className="list-style-none flex">
  <li onClick={handlePrevPage}>
    <a
      className={`relative ${page <= 1 ? 'hidden' : 'block'} ${loading ? 'hidden' : 'block'} rounded bg-transparent px-3 py-1.5 text-lg text-neutral-500 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 hover:text-white dark:hover:text-white group`}
      href="#"
      aria-label="Previous">
      <span aria-hidden="true" className='text-gray-900 font-bold group-hover:text-white'>&laquo;</span>
    </a>
  </li>

  <li >
    <a
      className={`block relative rounded  px-3 py-1.5 text-lg text-gray-900 transition-all duration-300 hover:bg-neutral-700  dark:hover:bg-neutral-700 dark:hover:text-white font-bold`}
      >{page}</a
    >
  </li>
  
  <li onClick={handleNextPage}>
    <a
      className={`${page >= totalPage ? 'hidden' : 'block'} ${loading ? 'hidden' : 'block'} relative  rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 group dark:hover:text-white`}
      aria-label="Next"
      ><span aria-hidden="true" className='text-gray-900 font-bold group-hover:text-white'>&raquo;</span>
    </a>
  </li>
</ul>
</nav>
)}

         {
            lightbox 
            &&
      <ProductPreview lightbox={lightbox} setLightbox={setLightbox}/>
      
         }



    </div>
  )
}

export default Product