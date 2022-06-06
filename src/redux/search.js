import { createSlice } from "@reduxjs/toolkit";

const searchSlicer = createSlice({
  name: "search",
  initialState: {
    // this is Shop
    searchField: "", // this is an Item in the shop
  },
  reducers: {
    updateSearch: (state, action) => {
      state.searchField = action.payload;
    },
  },
});

export const { updateSearch } = searchSlicer.actions;
export default searchSlicer.reducer;
