import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    // this is Shop
    cartItems: [], // this is an Item in the shop
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.map((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlicer.actions;
export default cartSlicer.reducer;
