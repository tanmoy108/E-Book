import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postLogin } from './LoginAPI';

const initialState = {
  value: 0,
  status: 'idle',
  user:null
};

export const postLoginAsync = createAsyncThunk(
  'login/postLogin',
  async (newData) => {
    const response = await postLogin(newData);
    return response.data;
  }
);

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLoginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      })
  },
});

export const { increment} = LoginSlice.actions;

export const selectUser = (state) => state.login.user;

export default LoginSlice.reducer;
