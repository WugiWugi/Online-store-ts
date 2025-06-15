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

// ✅ ЭТО ОБЯЗАТЕЛЬНО:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Сохраняем в localStorage при каждом обновлении
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});