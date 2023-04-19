import { createSlice } from "@reduxjs/toolkit";

// Reducer
const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      cartItems: [],
      subtotal: 0,
   },
   reducers: {
      addToCart: (state, action) => {
         
         state.cartItems.unshift(action.payload);
         state.subtotal += action.payload.total;
         
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      },
      removeFromCart: (state, action) => {
         const index = action.payload;
  const itemToRemove = state.cartItems[index];
  if (itemToRemove) {
    state.cartItems.splice(index, 1);
    state.subtotal -= itemToRemove.total;
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  } else {
    console.warn(`Can't remove product at index ${index} as it's not in the cart!`);
  }
      },
      
      CLEAR_CART: (state) => {
         state.cartItems = [];
         state.subtotal = 0;
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
      getCartItemsFromLocalStorage: (state) => {
         const cartItems = JSON.parse(localStorage.getItem('cartItems'));
         if (cartItems) {
            const subtotal = state.cartItems.reduce((sum, item) => sum + item.total, 0 )
           return {...state, cartItems, subtotal };
         } else {
            return state;
         }
      }
   },
})


export const { addToCart, removeFromCart, getCartItemsFromLocalStorage, CLEAR_CART } = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;
