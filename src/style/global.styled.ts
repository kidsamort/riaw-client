import { createGlobalStyle, css } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { font } from './helpers.styled';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	body {
		transition: all 0.3s ease-in;
		font-family: 'Inter', sans-serif;
    background: ${({ theme }): string => theme.bg};
    color: ${({ theme }): string => theme.text};
		transition: background 0.3s ease-in, color 0.3s ease-in, fill 0.3s ease-in;
		
  }
	h1 {
		${font.style.h1}
	}
	h2 {
		${font.style.h2}
	}
	h3 {
		${font.style.h3}
	}
	h4 {
		${font.style.h4}
	}
`;
