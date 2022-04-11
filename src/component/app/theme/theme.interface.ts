import 'styled-components';

interface InputStyled {
	bg: string;
	bgFocus: string;
	colorPlaceholder: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		bg: string;
		text: string;
		hr: string;
		input: InputStyled;
	}
}
