import styled from 'styled-components';
import { ButtonProps, ButtonSize, ButtonColor } from './button.props';

export const ButtonStyled = styled.div<ButtonProps>`
	padding: ${({ size }) =>
		(size == ButtonSize.MEDIUM && 'var(--button-md-padding)') ||
		(size == ButtonSize.SMALL && 'var(--button-sm-padding)') ||
		'var(--default-padding)'};
	background: ${({ color }) => 'var(' + color + ')'};
	font-size: ${({ size }) =>
		(size == ButtonSize.MEDIUM && 'var(--fs-button-1)') ||
		(size == ButtonSize.SMALL && 'var(--fs-button-2)') ||
		'var(--default-fs)'};
	box-shadow: ${({ color }) =>
		(color == ButtonColor.SECONDARY && 'var(--button-secondary-border-shadow)') ||
		'var(--default-border)'};
	gap: ${({ icon }) => (icon && '8px') || '0'};
	width: ${({ stretch }) => (stretch && '100%') || 'auto'};
	opacity: ${({ deactive }) => (deactive && '50%') || '100%'};
	svg {
		grid-column: ${({ positionIcon }) =>
			(positionIcon === 'start' && 'startLine / middleLine') ||
			(positionIcon === 'end' && 'middleLine / endLine') ||
			'0'};
	}
	color: ${({ types }) =>
		(types === 'secondary' && 'var(--button-text-color-primary)') || 'var(--button-text-color)'};
`;
