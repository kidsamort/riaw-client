import styled from 'styled-components';
import { AuthProps } from './auth.props';
import { DefaultTheme } from 'styled-components';
import { color } from 'style/helpers.styled';
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

export default {
	Auth,
	Span,
	Block,
	Input,
	ButtonHover,
	AuthSocial,
};
