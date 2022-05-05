import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../model/IUser';
import AuthService from '../../service/auth.service';
import { AuthRequest } from '../../model/request/auth.request';
import { setAuth, setUser } from '../reducer/auth.slice';
import { AuthResponse } from '../../model/response/auth.response';

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, name, password }: AuthRequest, thunkAPI) => {
    try {
      const response = await AuthService.registration(email, name, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      thunkAPI.dispatch(setAuth(true));
      thunkAPI.dispatch(setUser(response.data.user));
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: AuthRequest, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      thunkAPI.dispatch(setAuth(true));
      thunkAPI.dispatch(setUser(response.data.user));
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await AuthService.logout();
    console.log(response);
    localStorage.removeItem('token');
    thunkAPI.dispatch(setAuth(false));
    thunkAPI.dispatch(setUser({} as IUser));
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});

export const checkAuth = createAsyncThunk(
  'token/refresh',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthResponse>(
        `${process.env.REACT_APP_API_URL}/token/refresh`,
        { withCredentials: true },
      );
      console.log(response);
      thunkAPI.dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.accessToken);
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться');
    }
  },
);
