import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/Login/LoginSlice';
import SignupReducer from '../features/Signup/SignupSlice';
export const store = configureStore({
  reducer: {
    login: LoginReducer,
    signup:SignupReducer
  },
});
