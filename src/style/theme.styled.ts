import { color } from './helpers.styled';
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
	bg: color.neuteral.w1,
	text: color.neuteral.b7,
	hr: color.neuteral.w3,
	input: {
		bg: color.neuteral.w2,
		bgFocus: color.neuteral.w0,
		colorPlaceholder: color.neuteral.shades['04-75%'],
	},
};

export const darkTheme: DefaultTheme = {
	bg: color.neuteral.b7,
	text: color.neuteral.w1,
	hr: color.neuteral.b6,
	input: {
		bg: color.neuteral.b6,
		bgFocus: color.neuteral.b8,
		colorPlaceholder: color.neuteral.shades['04-40%'],
	},
};
