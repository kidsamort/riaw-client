import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ITheme = 'dark' | 'light' | null;

interface ThemeState {
  allTheme: ITheme[];
  nowTheme: ITheme;
}

export interface ThemeAction {
  type: string;
  payload: ITheme;
}

const initialState: ThemeState = {
  allTheme: ['dark', 'light'],
  nowTheme: null,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ITheme>) {
      state.nowTheme = action.payload;
    },
  },
});

export default ThemeSlice.reducer;
