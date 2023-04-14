import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   categories: [],
   loading: false,
   error: null,
};

const categoriesSlice = createSlice({
   name: "categories",
   initialState,
   reducers: {
      fetchCategoriesStart: (state) => {
         state.loading = true;
      },
      fetchCategoriesSuccess: (state, action) => {
         state.loading = false;
         state.categories = action.payload;
      },
      fetchCategoriesFailure: (state, action) => {
         state.loading = false;
         state.error = action.payload;
      }
   }
});

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } = categoriesSlice.actions;


export const categoriesReducer = categoriesSlice.reducer;

