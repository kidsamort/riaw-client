import { AuthWrapperStyled, BlockStyled, BodyStyled } from './auth.styled';
import { Text } from 'component/text';
import { font } from 'style/helpers.styled';
import { Divider } from 'component/UI/divider';
import { AuthInput } from './input';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './header';
import { SpanStyled } from './header/header.styled';
import { Oauth } from './oauth';

export type AuthLinkType = 'signup' | 'signin' | 'activation';

const Auth = (): JSX.Element => {
  const { authUrl } = useParams<{ authUrl: AuthLinkType }>();
  return (
    <AuthWrapperStyled>
      <Header url={authUrl} />
      <BodyStyled center={authUrl === 'activation'}>
        <h2>{authUrl === 'signin' ? 'Вход' : 'Регистрация'}</h2>
        {authUrl !== 'activation' && (
          <>
            <BlockStyled>
              <Text type={font.style.bodySemibold2}>
                продолжите через аккаунт
              </Text>
              <Oauth />
            </BlockStyled>
            <Divider size={2} direction="horizontal" />
          </>
        )}
        <BlockStyled>
          <Text type={font.style.caption1}>
            {authUrl === 'activation'
              ? 'код подтверждения отпрвлен проверьте почту и введите его ниже'
              : 'или используйте свои данные'}
          </Text>
          <AuthInput url={authUrl} />
        </BlockStyled>
        <img src="capcha.png" alt="capcha" />
        {authUrl === 'signin' && (
          <Text type={font.style.caption1}>
            <SpanStyled>У вас нет аккаунта?</SpanStyled>
            <Link to="signup">Зарегистрируйтесь</Link>
          </Text>
        )}
      </BodyStyled>
      <Outlet />
    </AuthWrapperStyled>
  );
};

export default Auth;
