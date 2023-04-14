import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart";
import { favouriteReducer } from "./favourite";
import { singleProductReducer } from "./singleProduct";
import { productReducer } from "./product";
import { categoriesReducer } from "./categories";

export default configureStore({
   reducer: {
      cart:cartReducer,
      fav:favouriteReducer,
      CurrP: singleProductReducer,
      product: productReducer,
      category: categoriesReducer,
   },
})