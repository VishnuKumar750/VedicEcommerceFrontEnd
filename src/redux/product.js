import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   products: [],
   currPage: 1,
   totalPage: 1,
   loading: false,
   error: null,
};

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      fetchProductsStart(state) {
         state.loading = true;
      },    
      fetchProductsSuccess(state, action) {
         state.loading = false;
         state.products = action.payload.products;
         state.currPage = action.payload.currPage;
         state.totalPage = action.payload.totalPage;
      },    
      fetchProductsFailure(state, action) {
         state.loading = false;
         state.error = action.payload;
      }
   }
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export const productReducer = productSlice.reducer;

