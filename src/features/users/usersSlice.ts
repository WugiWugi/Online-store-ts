import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsersAPI, registerUserAPI } from './usersAPI';

// 👉 Типы прямо в этом файле
export type User = {
  number: string;
  password: string;
};

export type Product = {
  name: string;
  articul: string;
  description: string;
  weight: string;
  initialСost: number;
  price: number;
  alt: string;
  quantity?: number;
  totalPrice?: number;
};

type UsersData = {
  userName: string;
  userEmail: string;
  userAdress: string;
};

export interface UsersState {
  list: User[];
  currentUser: User | null;
  error: string | null;
  busket: Product[];
  purchasedProducts: Product[];
  usersData: UsersData;
}


// 👉 Thunk'и с типами
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  const response = await fetchUsersAPI();
  return response;
});

export const registerUser = createAsyncThunk<User, { number: string; password: string }>(
  'users/registerUser',
  async ({ number, password }) => {
    const response = await registerUserAPI(number, password);
    return response;
  }
);

const initialState: UsersState = {
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
};

// 👉 Срез
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    setCurentUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
    logoutUser(state) {
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },
    setUsersData(state, action: PayloadAction<UsersData>) {
      state.usersData = action.payload;
    },
    pushBusket(state, action: PayloadAction<Product>) {
      const newItem = {
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price
      };
      state.busket.push(newItem);
    },
    removeFromBusketByIndex(state, action: PayloadAction<number>) {
      state.busket.splice(action.payload, 1);
    },
    updateProductQuantity(state, action: PayloadAction<{ index: number; quantity: number }>) {
      const { index, quantity } = action.payload;
      const product = state.busket[index];
      if (product && quantity > 0) {
        product.quantity = quantity;
        product.totalPrice = product.price * quantity;
      }
    },
    restartBusket(state) {
      state.busket = [];
    },
    pushProductsPurchased(state) {
      state.purchasedProducts = [
        ...state.purchasedProducts,
        ...state.busket.map(product => ({ ...product }))
      ];
      state.busket = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.list = action.payload;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.list.push(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message ?? 'Ошибка загрузки пользователей';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message ?? 'Ошибка регистрации';
      });
  }
});

export const {
  clearError,
  setCurentUser,
  logoutUser,
  setUsersData,
  pushBusket,
  removeFromBusketByIndex,
  updateProductQuantity,
  restartBusket,
  pushProductsPurchased
} = usersSlice.actions;

export default usersSlice.reducer;
