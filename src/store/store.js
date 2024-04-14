import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Catalog.slice";
import userReducer from "./slices/userSlice";
import filterReducer from "./Filter.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    filter: filterReducer,
  },
});

console.log("Store state:", store.getState());
