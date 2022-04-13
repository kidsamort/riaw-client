import styled, { css } from 'styled-components';
import { InputComponentProps, InputProps } from './input.props';
import { color, font, mixin } from 'style/helpers.styled';

const IconLeft = styled.div<InputProps>`
	transition: all 0.3s ease-in;
	pointer-events: none;
	position: absolute;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 48px;
	${({ theme }) => `fill: ${color.neuteral.b4}`};
`;
const IconRight = styled(IconLeft)<{
	active: boolean;
	action: boolean | undefined;
}>`
	${({ active }) =>
		active &&
		css`
			pointer-events: auto;
			cursor: pointer;
		`}
	${({ action }) =>
		action &&
		css`
			fill: ${color.primary.blue};
		`}
	right: 0;
`;

const Input = styled.input<InputProps>`
	transition: all 0.3s ease-in;
	display: block;
	width: 100%;
	height: 48px;
	position: absolute;
	border: none;
	border-radius: 12px;
	outline: none;
	color: ${({ theme }) => theme.text};
	background: ${({ theme }) => theme.input.bg};
	${font.style.baseSemibold};
	${({ iconRight }) =>
		iconRight ? 'padding: 0 48px' : 'padding: 0 10px 0 48px'};
	&:focus {
		background: ${({ theme }) => theme.input.bgFocus};
		-webkit-appearance: none;
		-webkit-box-shadow: ${({ theme }) =>
			mixin.boxShadow(2, theme.input.colorPlaceholder)};
		box-shadow: ${({ theme }) =>
			mixin.boxShadow(2, theme.input.colorPlaceholder)};
	}
`;

const InputWraper = styled.div<InputComponentProps>`
	height: 48px;
	position: relative;
	outline: none;
`;
export default { InputWraper, Input, IconRight, IconLeft };
