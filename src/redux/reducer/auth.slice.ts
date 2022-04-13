import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	email: string;
	name: string;
	password: string;
	showPass: boolean;
}

export interface AuthAction {
	type: string;
	payload: AuthState;
}

const initialState: AuthState = {
	email: '',
	name: '',
	password: '',
	showPass: false,
};

export const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setName(state, action: PayloadAction<string>) {
			state.name = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
		setShowPass(state, action: PayloadAction<boolean>) {
			state.showPass = action.payload;
		},
	},
});

export default AuthSlice.reducer;
