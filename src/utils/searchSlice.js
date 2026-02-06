import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResult } = searchSlice.actions;
export default searchSlice.reducer;

/**
 * Cache:
 * time complexity for search is array = O(n)
 * time complexity for search in object = O(1)
 *
 * [i, ip, iph, iphone]
 *
 * {
 *   i:
 *   ip:
 *   iph:
 *   iphone:
 * }
 *
 * new Map()
 */
