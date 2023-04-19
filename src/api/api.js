import axios from "axios";
import { PRODUCTION_URL } from "../../constants";

export const fetchCategoryData = async () => {
   const response = await fetch(`${PRODUCTION_URL}/categories/get`);
   const data = await response.json();

   return data[0].categories;
 }

 export const fetchOrders = async (userId, token) => {
  const response = await axios.get(`${PRODUCTION_URL}/clientOrder/get-order/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      token: `Bearer ${token}`
    }
  });

  return response.data.order;
};

// Fetch All Products -> search, category, price, sort, page, limit, color, size
export const fetchProducts = async ({ search, category, activePrice, sortBy, page }) => {
  try {
    const price = activePrice === 0 ? '' : `&price=${activePrice}`;
    const sort = sortBy === 0 ? '' : `&${sortBy}`;
    const searchParam = search ? `&search=${search}` : '';
    const categoryParam = category ? `&category=${category}` : '';
    const pageParam = page ? `&page=${page}` : '';

    const response = await axios.get(
      `${PRODUCTION_URL}/products/?${price}${sort}${searchParam}${categoryParam}${pageParam}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Register
export const register = async ({ username, email, password, img }) => {
  try {
    const response = await axios.post(`${PRODUCTION_URL}/auth/register`, { username, email, password, img });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


// Login
export const login = async ({email, password}) => {
  try {
    const response = await axios.post(`${PRODUCTION_URL}/auth/login`, {
      email,
      password
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// checkout
export const stripeCheckout = async ({ userId, url, cartItems, subtotal }) => {
  try {
    console.log(url);
    const res = await axios.post(`${PRODUCTION_URL}/payment/create-checkout-session`, {
      userId,
      url,
      cartItems, 
      subtotal
  })
  return res.data;
  } catch(err) {
    throw new Error(error.message);
  }
}