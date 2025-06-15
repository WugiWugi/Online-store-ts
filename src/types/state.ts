import { UsersState } from '../features/users/usersSlice';

export interface RootState {
  users: UsersState;
}