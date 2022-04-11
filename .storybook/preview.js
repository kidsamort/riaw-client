import React from 'react';
import { themes } from '@storybook/theming';

import { DocsContainer } from './components/DocContainer';
import { GlobalStyles } from 'style/global.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../src/style/theme.styled';
import { useDarkMode } from 'storybook-dark-mode';

export const decorators = [
	(Story) => (
		<ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Story theme={useDarkMode() ? darkTheme : lightTheme} />
		</ThemeProvider>
	),
];
const customViewports = {
	kindleFire2: {
		name: 'iphone x',
		styles: {
			width: '375px',
			height: '812px',
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		container: DocsContainer,
	},
	viewport: { viewports: customViewports },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		current: 'dark',
		dark: { ...themes.dark, appBg: 'black' },
	},
};
