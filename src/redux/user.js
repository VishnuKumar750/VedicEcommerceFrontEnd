import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   loading: true,
   user: [],
   isAuthenticated: false,
   error: null,
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      LOGIN_START: (state, action) => {
         state.loading = true;
      },
      LOGIN_SUCCESSFUL: (state, action) => { 
         state.loading = false;
         state.user = action.payload;
         state.isAuthenticated = true;
      },
      LOGIN_FAILED: (state, action) => {
         state.loading = false;
         state.user = [];
         state.isAuthenticated = false;
         state.error = action.payload;
      },
      LOGOUT: (state, action) => {
         state.loading = false;
         state.user = [];
         state.isAuthenticated = false;
         state.error = null;
      },
   }  
})

export const { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGOUT } = userSlice.actions;
export const userReducer = userSlice.reducer;