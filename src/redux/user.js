import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
   loading: true,
   user: {},
   isAuthenticated: false,
   error: null,
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      LOGIN_START: (state) => {
         state.loading = true;
      },
      LOGIN_SUCCESSFUL: (state, action) => { 
         const { email, username, img, _id, accessToken } = action.payload;
         state.loading = false;
         state.user = { email, username, img, _id };
         state.isAuthenticated = true;
         localStorage.setItem('user', JSON.stringify({ email, username, img, _id }))
         Cookies.set('accessToken', accessToken, { expires: 3 })
      },
      LOGIN_FAILED: (state, action) => {
         state.loading = false;
         state.user = [];
         state.isAuthenticated = false;
         state.error = action.payload;
      },
      LOGOUT: (state) => {
         state.loading = false;
         state.user = [];
         state.isAuthenticated = false;
         state.error = null;
         localStorage.removeItem('user')
         Cookies.remove('accessToken')
      },
      INITIALIZE_USER: (state) => {
         const storedUser = localStorage.getItem("user");
         const accessToken = Cookies.get("accessToken");
         if (storedUser && accessToken) {
           state.user = JSON.parse(storedUser);
           state.isAuthenticated = true;
         } else {
           state.user = null;
           state.isAuthenticated = false;
         }
         state.loading = false;
       },
   }  
})

export const { LOGIN_START, LOGIN_SUCCESSFUL, LOGIN_FAILED, LOGOUT, INITIALIZE_USER } = userSlice.actions;
export const userReducer = userSlice.reducer;