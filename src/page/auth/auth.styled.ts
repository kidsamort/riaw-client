import styled, { css } from 'styled-components';
import { AuthProps } from './auth.props';
import { DefaultTheme } from 'styled-components';
import { color, font } from 'style/helpers.styled';
import { Button } from 'component/UI/button';

const Auth = styled.div<{
	props: AuthProps;
	theme: DefaultTheme;
}>`
	box-sizing: inherit;
	display: grid;
	justify-content: center;
	align-content: center;
	height: 100vh;
	gap: 32px;
	a {
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
	display: flex;
	justify-content: space-between;
	align-items: center;
	a {
		transition: all 0.3s ease-in;
	}
`;
export default {
	Auth,
	Span,
	Head,
	Block,
	Input,
	ButtonHover,
	AuthSocial,
};
