import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   product: {}
}

const singleProcuctSlice = createSlice({
   name: 'currentProduct',
   initialState,
   reducers: {
      setProduct: (state, action) => {
         state.product = action.payload;
      }
   }
})

export const { setProduct } = singleProcuctSlice.actions;

export const singleProductReducer = singleProcuctSlice.reducer;

