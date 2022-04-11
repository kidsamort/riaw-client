import { Button } from 'component/UI/button';
import styled from './auth.styled';
import { Text } from 'component/text';
import { font } from 'style/helpers.styled';
import { ButtonWithIcon } from 'component/UI/button/withIcon/buttonWithIcon';
import { Input } from 'component/UI/input';
import { Divider } from 'component/UI/divider';

const Auth = (): JSX.Element => {
	return (
		<styled.Auth props={{}}>
			<h2>Вход</h2>
			<styled.Block>
				<Text type={font.style.bodySemibold2}>продолжите через аккаунт</Text>
				<styled.AuthSocial>
					<ButtonWithIcon types="secondary" iconSize={24} size="md">
						Google
					</ButtonWithIcon>
					<ButtonWithIcon types="secondary" iconSize={24} size="md">
						Telegram
					</ButtonWithIcon>
				</styled.AuthSocial>
			</styled.Block>
			<Divider size={2} direction="horizontal" />
			<styled.Block>
				<Text type={font.style.caption1}>или используйте свои данные</Text>
				<styled.Input>
					<Input
						icon="mail"
						type="text"
						name="login"
						value=""
						required
						autoFocus
						placeholder="Имя или почта"
					/>
					<Input
						icon="lock"
						type="password"
						name="password"
						value=""
						required
						placeholder="Пароль"
					/>
					<Button types="primary" size="md">
						Войти
					</Button>
				</styled.Input>
			</styled.Block>
			<Text type={font.style.caption1}>
				<styled.Span>У вас нет аккаунта? </styled.Span> Зарегистрируйтесь
			</Text>
		</styled.Auth>
	);
};

export default Auth;
