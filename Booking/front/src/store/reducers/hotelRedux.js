import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "hotel",
  initialState: {
    list: {},
    error: false,
  },
  reducers: {
    //CREATE HOTEL
    addHotelSuccess: (state, action) => {
      state.list.push(action.payload);
    },
    addHoteltFailure: (state) => {
      state.error = true;
    },

    //GET ALL HOTEL
    getHotelSuccess: (state, action) => {
      state.list = action.payload;
    },
    getHotelFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  addHotelSuccess,
  addHoteltFailure,
  getHotelSuccess,
  getHotelFailure,
} = userSlice.actions;
export default userSlice.reducer;
