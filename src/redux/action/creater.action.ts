import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'model/IUser';

export const fetchUsers = createAsyncThunk(
	'user/featchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get<IUser[]>(
				'https://jsonplaceholder.typicode.com/users',
			);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
		}
	},
);
