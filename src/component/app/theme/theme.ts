import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { ITheme, ThemeAction } from 'redux/reducer/theme.slice';

export const toggleTheme = (
	nowTheme: ITheme,
	setTheme: ActionCreatorWithPayload<ITheme>,
	dispatch: Dispatch<ThemeAction>,
): void => {
	const updatedTheme = String(nowTheme) === 'dark' ? 'light' : 'dark';
	dispatch(setTheme(updatedTheme));
	localStorage.setItem('theme', updatedTheme);
};

export const getThemeUser = () => {
	const savedTheme = localStorage.getItem('theme');

	const prefersDark =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	return { savedTheme, prefersDark };
};

export const setThemeUser = (
	savedTheme: ITheme,
	prefersDark: boolean,
	allTheme: ITheme[],
	setTheme: ActionCreatorWithPayload<ITheme>,
	dispatch: Dispatch<ThemeAction>,
) => {
	if (savedTheme && allTheme.includes(savedTheme)) {
		dispatch(setTheme(savedTheme));
	} else if (prefersDark) {
		dispatch(setTheme('dark'));
		localStorage.setItem('theme', 'dark');
	} else {
		dispatch(setTheme('light'));
		localStorage.setItem('theme', 'light');
	}
};

export const clearPreLoadTheme = () => {
	window.addEventListener(
		'pageshow',
		function () {
			document.body.classList.remove('light');
			document.body.classList.remove('dark');
			document
				.querySelectorAll('.preLoadTheme')
				.forEach((item) => item.remove());
			document
				.querySelectorAll('.preLoadTheme__value')
				.forEach((item) => item.remove());
		},
		false,
	);
	window.onload = function () {};
};
