import { ThemeSlice } from 'redux/reducer/theme.slice';
import { useAppSelector } from './rtk.hook';

export default function useTheme() {
	const { nowTheme, allTheme } = useAppSelector((state) => state.themeReducer);
	const { setTheme } = ThemeSlice.actions;

	return { nowTheme, setTheme, allTheme };
}
