import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Catalog.slice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

console.log("Store state:", store.getState());
