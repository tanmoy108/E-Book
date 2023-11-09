import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSignup } from './SignupAPI';

const initialState = {
  value: 0,
  status: 'idle',
  user:null
};

export const postSignupAsync = createAsyncThunk(
  'signup/postSignup',
  async (newData) => {
    console.log(newData)
    const response = await postSignup(newData);
    return response.data;
  }
);

export const SignupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postSignupAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
  },
});

export const { increment} = SignupSlice.actions;

export const selectUser = (state) => state.signup.user;

export default SignupSlice.reducer;
