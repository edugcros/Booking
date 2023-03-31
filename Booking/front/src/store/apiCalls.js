import userRequest from "../api/userRequest";

import {
  loginFailure,
  loginStart,
  loginSuccess,
  getUserSuccess,
  getUsertFailure,
} from "../store/reducers/userRedux";
import { getHotelSuccess, getHotelFailure } from "../store/reducers/hotelRedux";

//LOGIN
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//GET USERS
export const getUsers = async (dispatch) => {
  try {
    const res = await userRequest.get("/api/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUsertFailure());
  }
};

//GET HOTELS
export const getHotel = async (dispatch) => {
  try {
    const res = await userRequest.get("/api/hotels");
    dispatch(getHotelSuccess(res.data));
  } catch (err) {
    dispatch(getHotelFailure());
  }
};

//GET HOTELS CITY
/*export const getHotelCity = async (dispatch, city) => {
  try {
    const res = await userRequest.get(`/api/hotels/countByCity?cities=${city}`);
    dispatch(getHotelSuccess(res.data));
  } catch (err) {
    dispatch(getHotelFailure());
  }
};*/
