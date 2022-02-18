import styled from 'styled-components';
import { base1S, inter } from '../../../styles/globals.styled';
import { InputProps, InputStatusIcon } from './input.props';

export const WraperStyled = styled.div<InputProps>`
	svg {
		fill: ${({ iconStatus }): string =>
			(iconStatus === InputStatusIcon.WARNING && 'var(--input-color-text)') ||
			'var(--input-color-icon)'};
	}
`;

export const InputStyled = styled.input<InputProps>`
	${inter}
	${base1S}
	background-color: ${({ iconStatus }): string =>
		(iconStatus === InputStatusIcon.WARNING && 'var(--input-bg-error)') || 'var(--input-bg)'};
	color: ${({ iconStatus }): string =>
		(iconStatus === InputStatusIcon.WARNING && 'var(--input-text-error)') ||
		'var(--input-color-text)'};
	border-color: ${({ iconStatus }): string =>
		(iconStatus === InputStatusIcon.WARNING && 'var(--input-color-border-error)') || 'transparent'};
	:focus {
		border-color: ${({ iconStatus }): string =>
			(iconStatus === InputStatusIcon.WARNING && 'var(--input-color-border-error)') ||
			'var(--input-color-active-border)'};
		background: ${({ iconStatus }): string =>
			(iconStatus === InputStatusIcon.WARNING && 'var(--input-bg-error)') ||
			'var(--input-color-active-bg)'};
	}
`;
export const LeftIconStyled = styled.div<InputProps>``;
export const RightIconStyled = styled.div<InputProps>``;
