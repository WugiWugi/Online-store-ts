import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../features/users/localStorage';

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  preloadedState,
});


store.subscribe(() => {
  saveToLocalStorage(store.getState());
});