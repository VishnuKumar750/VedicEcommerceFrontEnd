import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { orderFailure, orderRequest, orderSuccess } from '../redux/order';
import { fetchOrders } from '../api/api';

const Order = () => {
   const { user } = useSelector((state) => state.user)
   const dispatch = useDispatch()
   const { order, loading } = useSelector((state) => state.order);
   const [isExpandedIndex, setIsExpandedIndex] = useState(-1);
   
   useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        dispatch(orderRequest());
        const accessToken = Cookies.get('accessToken');
        const orders = await fetchOrders(user._id, accessToken);
        dispatch(orderSuccess(orders));
      } catch (error) {
        dispatch(orderFailure());
        console.error(error);
      }
    };
  
    if (user._id) {
      fetchAllOrders();
    }
  }, [dispatch, user._id]);

  const toggleExpanded = (index) => {
    setIsExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }
  
  return (
    <div className='w-full sm:w-[70%] h-full border-2 sm:mx-4 shadow-lg shadow-gray-300 bg-white'>
      <h1 className='text-[1.5rem] font-bold  px-4 my-2'>Orders</h1>
      
    {order.length === 0 ? (
      <p className="text-center py-4">No orders found.</p>
    ) : (
    order?.map((products, index) => (
    <div key={index}>
      <div className="mx-auto shadow-md">
      <div
        className="flex items-center justify-between py-2 px-6 shadow-md cursor-pointer transition-all duration-300 ease-in-out"
        onClick={() => toggleExpanded(index)}
        style={{ backgroundColor: isExpandedIndex === index ? '#f2f2f2' : '#e6e6e6' }}
      >
        <h2 className="text-lg font-medium">{products?.date}</h2>
        <p className="text-lg">{isExpandedIndex === index ? "▲" : "▼"}</p>
      </div>
      {isExpandedIndex === index && (
        <div className={`bg-gray-100 transition-all duration-500 ease-in-out ${isExpandedIndex === index ? "h-auto py-4 px-6" : "h-0 overflow-hidden"}`}>
          {products?.order?.map((product) => (
            <div key={product?.id} className="py-2">
              <div className="flex justify-between">
                <div className='w-[8em] h-[8em] relative overflow-hidden '>
                <img src={product?.image} alt="product-image" className='w-full h-full object-cover transition-all hover:scale-110' />
              </div>

              <div className='mx-8'>
                <p className="text-gray-800 font-medium truncate max-w-[8em] text-[1.2rem] ">{product?.title}</p>
                <p className="text-gray-500 text-[1.1rem] py-2 text-right">{product?.quantity} x &#8377; {product?.price}</p>
              </div>

              </div>


              <div className="w-full text-right py-2">
                <p className="text-gray-500 text-[1.1rem] font-medium">Total Price: &#8377; {product?.quantity * product?.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="py-4 px-6">
  <h3 className="text-lg font-medium">Order Details</h3>
  <div className="my-4">
    <p className="text-gray-800"><span className="font-medium">Name:</span> {products?.customerDetails.name}</p>
    <p className="text-gray-800"><span className="font-medium">Email:</span> {products?.customerDetails.email}</p>
    <p className="text-gray-800"><span className="font-medium">Phone:</span> {products?.customerDetails.phone}</p>
    <p className="text-gray-800"><span className="font-medium">Address:</span> {products?.customerDetails.address.line1}, {products?.customerDetails.address.city}, {products?.customerDetails.address.state} {products?.customerDetails.address.postal_code}, {products?.customerDetails.address.country}</p>
  </div>
  <p className="text-gray-500 my-4">Subtotal: &#8377; {products?.subtotal}</p>
      </div>
    </div>
    <hr />
    </div>
    )))} 


    </div>
  )
}

export default Order