import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducer/theme.slice';
import authReducer from '../reducer/auth.slice';
const rootReducer = combineReducers({
  themeReducer,
  authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
