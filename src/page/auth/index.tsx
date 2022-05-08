import styled from './auth.styled';
import { Text } from 'component/text';
import { color, font } from 'style/helpers.styled';
import { ButtonWithIcon } from 'component/UI/button/withIcon/buttonWithIcon';
import { Divider } from 'component/UI/divider';
import { AuthInput } from './input';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './header';
import { SpanStyled } from './header/header.styled';

export type AuthLinkType = 'signup' | 'signin' | 'activation';

const Auth = (): JSX.Element => {
  const { auth } = useParams<{ auth: AuthLinkType }>();
  return (
    <styled.Auth form={auth}>
      <Header url={auth} />
      <styled.Body>
        <h2>
          {auth === 'signup' || auth === 'activation' ? 'Регистрация' : 'Вход'}
        </h2>
        {(auth === 'signup' || auth === 'signin') && (
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
            {auth === 'activation'
              ? 'код подтверждения отпрвлен проверьте почту и введите его ниже'
              : 'или используйте свои данные'}
          </Text>
          <AuthInput url={auth} />
        </styled.Block>
        <img src="capcha.png" alt="capcha" />
        {auth === 'signin' && (
          <Text type={font.style.caption1}>
            <SpanStyled>У вас нет аккаунта?</SpanStyled>
            <Link to="signup">Зарегистрируйтесь</Link>
          </Text>
        )}
      </styled.Body>
      <Outlet />
    </styled.Auth>
  );
};

export default Auth;
