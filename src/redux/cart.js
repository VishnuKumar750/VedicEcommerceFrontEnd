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
        const productId = action.payload;
        const existingItem = state.cartItems.find(item => item.id === productId);
        if(existingItem) {
            state.cartItems = state.cartItems.filter(item => item.id !== productId);
         } else {
            console.warn(`Can't remove product (id: ${productId}) as it's not in the cart!`);
         }
        state.subtotal -= existingItem.total;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
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


export const { addToCart, removeFromCart, getCartItemsFromLocalStorage } = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;
