import { createGlobalStyle, css } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { font } from './helpers.styled';

const linkThemeColor = (theme: DefaultTheme) => css`
  color: ${theme.text};
`;

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
    color: ${({ theme }): string => theme.text};
		font-family: Inter, sans-serif;
    background: ${({ theme }): string => theme.bg};
		transition: all 0.3s ease-in;
		transition: background 0.3s ease-in, color 0.3s ease-in, fill 0.3s ease-in;
  }
  
  a {
    text-decoration: none;

        ${({ theme }) => linkThemeColor(theme)}
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
