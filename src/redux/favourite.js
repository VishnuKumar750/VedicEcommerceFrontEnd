import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
   name: 'fav',
   initialState: {
      favItems: [],
   },
   reducers: {
      addToFavourite: (state, action) => {
         state.favItems.unshift(action.payload);
         localStorage.setItem('favouriteItems', JSON.stringify(state.favItems));
      },
      removefromFavourite: (state, action) => {
         const productId = action.payload;
        const existingItem = state.favItems.find(item => item.id === productId);
        if(existingItem) {
            state.favItems = state.favItems.filter(item => item.id !== productId);
         } else {
            console.warn(`Can't remove product (id: ${productId}) as it's not in the cart!`);
         }
        localStorage.setItem('favouriteItems', JSON.stringify(state.favItems));
      },
      getFavouriteItemsFromLocalStorage: (state) => {
         const favItems = JSON.parse(localStorage.getItem('favouriteItems'));
         if (favItems) {
            return {...state, favItems };
         } else {
            return state;
         }
      }
   },
});


export const { addToFavourite, removefromFavourite,getFavouriteItemsFromLocalStorage } = favouriteSlice.actions;

export const favouriteReducer =  favouriteSlice.reducer;
