import { color, font } from 'style/helpers.styled';
import styled, { css, DefaultTheme } from 'styled-components';
import { Button } from '../index';
import { ButtonProps } from '../button.props';

export const ButtonWithIconStyled = styled(Button)<ButtonProps>`
	${({ icon, iconRight, iconSize }) =>
		(icon || iconRight || iconSize) &&
		css`
			display: grid;
			grid-template-columns: auto auto;
			align-items: center;
			grid-auto-flow: dense;
			justify-content: center;
		`}
	${({ children }) => children && 'gap: 8px'};
	div,
	svg {
		transition: fill 0.3s ease-in, background 0.3s ease-in;
		${({ icon, iconColor, theme }) =>
			icon &&
			!iconColor &&
			css`
				fill: ${theme.text};
			`}
		${({ iconRight }) => iconRight && 'grid-column: 2/3'};
	}
`;
