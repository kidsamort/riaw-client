import styled, { css } from 'styled-components';
import { AuthProps } from './auth.props';
import { DefaultTheme } from 'styled-components';
import { color, font } from 'style/helpers.styled';
import { Button } from 'component/UI/button';

const Auth = styled.div<{ form: string | undefined }>`
	max-width: 375px;
	box-sizing: inherit;
	display: grid;
	margin: 0 auto;
	grid-template-rows: auto 1fr;
	align-items: flex-start;
	justify-content: stretch;
	height: 100vh;
	gap: 32px;
	a {
		transition: all 0.3s ease-in;
		text-decoration: none;
		${font.style.caption1}
		${({ theme }) =>
			css`
				color: ${theme.text};
			`}
	}
`;

const Span = styled.span`
	color: ${color.neuteral.b4};
`;

const ButtonHover = styled(Button)`
	&:hover {
		box-shadow: 0 0 0 2px ${color.primary.green} inset;
	}
`;

const AuthSocial = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	gap: 8px;
`;

const Block = styled.div`
	display: grid;
	gap: 20px;
`;
const Input = styled.form`
	display: grid;
	gap: 12px;
`;

const Head = styled.div`
	min-height: 96px;
	display: inline-flex;
	align-self: flex-start;
	padding: 0 10px;
	justify-content: space-between;
	align-items: center;
`;
const Body = styled.div`
	display: grid;
	padding: 0 10px;
	align-content: center;
	gap: 32px;
`;
export default {
	Auth,
	Span,
	Head,
	Body,
	Block,
	Input,
	ButtonHover,
	AuthSocial,
};
