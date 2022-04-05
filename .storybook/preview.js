import '../src/styles/app.scss';
import  '../src/styles/globals.css'

import { themes } from '@storybook/theming';

import { DocsContainer } from './components/DocContainer';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		container: DocsContainer,
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		dark: { ...themes.dark, appBg: 'black' },
	},
	themes: {
		default: 'dark',
		list: [
			{ name: 'dark', class: 'dark', color: '#111315' },
			{ name: 'light', class: 'light', color: '#F4F4F4' },
		],
	},
};
