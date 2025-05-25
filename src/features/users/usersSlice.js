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
    currentUser: null,
    error: null
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export const { clearError, setCurentUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;