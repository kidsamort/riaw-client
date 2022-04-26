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
	console.log(form);

	return (
		<styled.Auth form={form}>
			<styled.Head>
				{(form === 'signup' || form === 'activation') && (
					<>
						<IconDefaultStyled size={48} />
						<Text type={font.style.caption1}>
							<styled.Span>Уже зарегистрированы?</styled.Span>
							<Link to="signin">Войти</Link>
						</Text>
					</>
				)}
			</styled.Head>
			<styled.Body>
				<h2>
					{form === 'signup' || form === 'activation' ? 'Регистрация' : 'Вход'}
				</h2>
				{(form === 'signup' || form === 'signin') && (
					<>
						<styled.Block>
							<Text type={font.style.bodySemibold2}>
								продолжите через аккаунт
							</Text>
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
					</>
				)}
				<styled.Block>
					<Text type={font.style.caption1}>
						{form === 'activation'
							? 'код подтверждения отпрвлен проверьте почту и введите его ниже'
							: 'или используйте свои данные'}
					</Text>
					<AuthInput />
				</styled.Block>
				<img src="capcha.png" alt="capcha" />
				{form === 'signin' && (
					<Text type={font.style.caption1}>
						<styled.Span>У вас нет аккаунта? </styled.Span>
						<Link to="signup"> Зарегистрируйтесь</Link>
					</Text>
				)}
			</styled.Body>
			<Outlet />
		</styled.Auth>
	);
};

export default Auth;
