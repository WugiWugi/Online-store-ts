import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersAPI, registerUserAPI } from './usersAPI';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsersAPI();
  return response;
});

export const registerUser = createAsyncThunk('users/registerUser', async ({ number, password }) => {
  const response = await registerUserAPI(number, password);
  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'success';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = 'registered';
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;