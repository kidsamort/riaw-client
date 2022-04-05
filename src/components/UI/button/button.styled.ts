import styled from 'styled-components';
import { colors } from 'styles/globals.styled';
import { ButtonProps } from './button.props';

export const WraperStyled = styled.button<ButtonProps>`
	padding: ${({ size }) => (size === 'medium' && '12px 20px') || (size === 'small' && '8px 16px')};
	background: ${({ Type }) =>
		(Type === 'primary' && colors.$p1) || (Type === 'secondary' && 'var(--button-bg-secondary)')};
	color: ${({ Type }) =>
		(Type === 'primary' && colors.$n1) || (Type === 'secondary' && 'var(--button-color)')};
	${({ Type }) => Type === 'secondary' && 'box-shadow: var(--button-border-shadow)'};
	${({ icon }) => icon && 'gap: 8px'};
	${({ right }) => right && 'grid-column: 1 / 2;'};
	${({ stretch }) => stretch && 'width: 100%'};

	${({ deActive }) => deActive && 'opacity: 0.5; cursor: auto;'};
	&:hover {
		${({ Type }) => Type === 'secondary' && 'box-shadow: var(--button-border-shadow-hover)'};
	}

	svg {
		${({ right }) => right && 'grid-column: 2 / -1;'};
		fill: ${({ Type }) =>
			(Type === 'primary' && colors.$n1) || (Type === 'secondary' && 'var(--button-color)')};
	}
`;
