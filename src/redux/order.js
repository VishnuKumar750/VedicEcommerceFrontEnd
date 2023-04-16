import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   order: [],
   loading: false,
   error: null,
};

const orderSlice = createSlice({ 
   name: "order",
   initialState,
   reducers: {
      orderRequest: (state) => {
         state.loading = true;
      },
      orderSuccess: (state, action) => {
         state.order = action.payload;
         state.loading = false;
      },
      orderFailure: (state, action) => {
         state.error = action.payload;
         state.loading = false;
      },
   }  
});

export const { orderRequest, orderSuccess, orderFailure } = orderSlice.actions;
export const orderReducer =  orderSlice.reducer;
