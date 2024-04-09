import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotalCount = (state) => state.cart.items.length;
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((acc, cur) => acc + cur.price, 0);

export default cartSlice.reducer;
