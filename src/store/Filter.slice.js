import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;

export const selectFilterValue = (state) => state.filter.filterValue;

export default filterSlice.reducer;
