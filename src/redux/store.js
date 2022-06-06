import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart";
import Search from "./search";

export default configureStore({
  reducer: {
    cart: CartReducer,
    search: Search,
  },
});
