import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../model/IUser';
import { checkAuth, register } from '../action/auth.action';

interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
  isLoading: false,
  error: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [checkAuth.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
      state.isAuth = true;
    },
    [checkAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    [register.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    [register.fulfilled.type]: (state) => {
      state.error = '';
    },
  },
});

const { reducer, actions } = AuthSlice;
export const { setAuth, setUser } = actions;
export default reducer;
