import { createSlice } from "@reduxjs/toolkit";
import userRequest from "../../api/userRequest";

function registerHeader(token) {
  userRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},
    userList: [],
    token: "",
    isFetching: false,
    error: false,
  },
  reducers: {
    // LOGIN USER
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      registerHeader(action.payload.token);
      state.isFetching = false;
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = {};
      state.token = "";
    },

    //GET ALL USERS
    getUserSuccess: (state, action) => {
      state.userList = action.payload.users;
    },

    getUsertFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  getUserSuccess,
  getUsertFailure,
} = userSlice.actions;
export default userSlice.reducer;
