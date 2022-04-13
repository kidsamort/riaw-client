import styled from './auth.styled';
import { Text } from 'component/text';
import { color, font } from 'style/helpers.styled';
import { ButtonWithIcon } from 'component/UI/button/withIcon/buttonWithIcon';
import { Divider } from 'component/UI/divider';
import { AuthInput } from './input';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IconDefaultStyled } from 'component/UI/icon/icon.styled';

const Auth = (): JSX.Element => {
	const { form } = useParams();

	return (
		<styled.Auth props={{}}>
			{form === 'signup' && (
				<styled.Head>
					<IconDefaultStyled size={48} />
					<Text type={font.style.caption1}>
						<styled.Span>Уже зарегистрированы? </styled.Span>
						<Link to="signin"> Войти</Link>
					</Text>
				</styled.Head>
			)}
			<h2>Вход</h2>
			<styled.Block>
				<Text type={font.style.bodySemibold2}>продолжите через аккаунт</Text>
				<styled.AuthSocial>
					<ButtonWithIcon
						icon="google"
						types="secondary"
						iconSize={24}
						size="md"
					>
						Google
					</ButtonWithIcon>
					<ButtonWithIcon
						icon="telegram"
						iconColor={color.primary.blueHEX}
						types="secondary"
						iconSize={24}
						size="md"
					>
						Telegram
					</ButtonWithIcon>
				</styled.AuthSocial>
			</styled.Block>
			<Divider size={2} direction="horizontal" />
			<styled.Block>
				<Text type={font.style.caption1}>или используйте свои данные</Text>
				<AuthInput />
			</styled.Block>
			<img src="capcha.png" alt="capcha" />
			{form === 'signin' && (
				<Text type={font.style.caption1}>
					<styled.Span>У вас нет аккаунта? </styled.Span>
					<Link to="signup"> Зарегистрируйтесь</Link>
				</Text>
			)}
			<Outlet />
		</styled.Auth>
	);
};

export default Auth;
