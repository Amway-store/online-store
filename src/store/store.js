import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Catalog.slice";
import filterReducer from "./Filter.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  },
});

export default store;
