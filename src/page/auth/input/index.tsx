import { ChangeEvent, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from 'component/UI/button';
import { Input } from 'component/UI/input';
import { signIn, signUp } from './input';
import { AuthInputComponentProps } from './input.props';
import styled from './input.styled';
import { CodeInput } from '../codeInput';
import { useAppDispatch, useAppSelector } from '../../../hook/rtk.hook';
import { login, register } from '../../../redux/action/auth.action';

export const AuthInput = ({
  className,
  children,
  url,
  ...props
}: AuthInputComponentProps): JSX.Element => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, isAuth } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    setShowPass(false);
  }, [url]);

  const clickShowPass = () => {
    setShowPass(!showPass);
  };
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'username':
        setName(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
    }
  };
  const authClick = () => {
    switch (url) {
      case 'signup':
        dispatch(register({ email, name, password }));
        error && navigate('/auth/activation', { replace: true });

        break;
      case 'signin':
        dispatch(login({ email, name, password }));

        break;
      case 'activation':
        break;
    }
  };
  if (isAuth) {
    return <Navigate to={'/'} replace={true} />;
  }
  return (
    <>
      <styled.Input>
        {url === 'signup' ? (
          signUp.map((input, id) => {
            return (
              <Input
                key={id + 3}
                icon={input.icon}
                onChange={inputChange}
                iconRight={
                  input.type === 'password' && showPass
                    ? 'showLight'
                    : input.iconRight
                }
                name={input.name}
                type={showPass ? 'text' : input.type}
                rightAction={
                  input.type === 'password' ? clickShowPass : undefined
                }
                rightActive={showPass}
                autoFocus={input.autoFocus}
                autoComplete={input.autoComplete}
                aria-autocomplete={input.ariaAutocomplete}
                placeholder={input.placeholder}
              />
            );
          })
        ) : url === 'signin' ? (
          signIn.map((input, id) => {
            return (
              <Input
                key={id}
                icon={input.icon}
                onChange={inputChange}
                iconRight={
                  input.type === 'password' && showPass
                    ? 'showLight'
                    : input.iconRight
                }
                name={input.name}
                type={showPass ? 'text' : input.type}
                rightAction={
                  input.type === 'password' ? clickShowPass : undefined
                }
                rightActive={showPass}
                autoFocus={input.autoFocus}
                autoComplete={input.autoComplete}
                placeholder={input.placeholder}
              />
            );
          })
        ) : url === 'activation' ? (
          <CodeInput />
        ) : url === undefined ? (
          <Navigate to="/auth/signin" replace={true} />
        ) : (
          <Navigate to="/error" replace={true} />
        )}
      </styled.Input>
      <Button types="primary" size="md" onClick={authClick}>
        {url === 'signup'
          ? 'Зарегистрироваться'
          : url === 'signin'
          ? 'Войти'
          : 'Продолжить'}
      </Button>
    </>
  );
};
