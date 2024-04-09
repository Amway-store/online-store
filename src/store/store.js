import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Catalog.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
