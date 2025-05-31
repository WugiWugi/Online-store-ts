import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersAPI, registerUserAPI } from './usersAPI';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsersAPI();
  return response;
});

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ number, password }) => {
    const response = await registerUserAPI(number, password);
    return response;
  }
); 

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    currentUser: null,
    error: null,
    busket: [],
    purchasedProducts: [],
    usersData: {
      userName: '',
      userEmail: '',
      userAdress: ''
    }
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
    },
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    pushBusket: (state, action) => {
      const newItem = {
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price
      };
      state.busket.push(newItem);
    },
    removeFromBusketByIndex: (state, action) => {
      state.busket.splice(action.payload, 1);
    },
    updateProductQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      const product = state.busket[index];
      if (product && quantity > 0) {
        product.quantity = quantity;
        product.totalPrice = product.price * quantity;
      }
    },
    restartBusket: (state) => {
      state.busket = [];
    },
    pushProductsPurchased: (state) => {
      if (!Array.isArray(state.purchasedProducts)) {
        state.purchasedProducts = [];
      }
      state.purchasedProducts = [
        ...state.purchasedProducts,
        ...state.busket.map(product => ({ ...product }))
      ];
      state.busket = [];
    }
  },
  extraReducers: (builder) => {
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

export const {clearError,setCurentUser,logoutUser,setUsersData, pushBusket,removeFromBusketByIndex,updateProductQuantity,restartBusket,pushProductsPurchased} = usersSlice.actions;
export default usersSlice.reducer;