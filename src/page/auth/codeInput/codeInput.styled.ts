import styled, { css } from 'styled-components';
import { CodeInputProps } from './codeInput.props';
import { Input as InputDefault } from 'component/UI/input/index';
import { font } from 'style/helpers.styled';

const styles = css<CodeInputProps>``;

export const Input = styled.div`
	display: grid;
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;
	gap: 20px;
`;

export const InputCode = styled(InputDefault)`
	height: 100%;
	input {
		${font.style.h2};
		height: 100%;
		caret-color: transparent;
		position: static;
		text-align: center;
		padding: 12px;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
`;
