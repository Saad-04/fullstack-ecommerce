import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer.js";
import detailProductReducer from "./reducers/detailProduct.js";
import userLoginReducer from "./reducers/userReducer.js";
// import profileUpdaterReducer from "./reducers/profileUpdateUser.js";
// import updatePasswordSlice from "./reducers/updatePassword.js";
// import forgotPasswordSlice from "./reducers/ForgotPassword.js";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducers = combineReducers({
  product: productReducer,
  detailPro: detailProductReducer,
  users: userLoginReducer,//this for login, logout, UserProfile
  // profileUpdate: profileUpdaterReducer,
  // updatePassword: updatePasswordSlice,
  // forgotPassword: forgotPasswordSlice,
})
export const store = configureStore({
  reducer: rootReducers
});
