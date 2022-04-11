import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from 'service/postService';
import userReducer from '../reducer/user.slice';
import themeReducer from '../reducer/theme.slice';

const rootReducer = combineReducers({
	userReducer,
	themeReducer,
	[postAPI.reducerPath]: postAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(postAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
