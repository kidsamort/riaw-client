import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'model/IUser';
import { fetchUsers } from '../action/creater.action';

interface UserState {
  user: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: [],
  isLoading: false,
  error: '',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default UserSlice.reducer;
