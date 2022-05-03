import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { Button } from 'component/UI/button';
import { Input } from 'component/UI/input';
import { useAppDispatch, useAppSelector } from 'hook/rtk.hook';
import { AuthSlice } from 'redux/reducer/auth.slice';
import { signIn, signUp } from './input';
import { AuthInputComponentProps } from './input.props';
import styled from './input.styled';
import { CodeInput } from '../codeInput';
import { v4 as uuid4 } from 'uuid';

export const AuthInput = ({
  className,
  children,
  ...props
}: AuthInputComponentProps): JSX.Element => {
  const { form } = useParams();

  const { email, name, password, showPass } = useAppSelector(
    (state) => state.authReducer,
  );
  const { setEmail, setName, setPassword, setShowPass } = AuthSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setShowPass(false));
  }, [form]);

  const clickShowPass = () => {
    dispatch(setShowPass(!showPass));
  };

  return (
    <>
      <styled.Input>
        {form === 'signup' ? (
          signUp.map((input, id) => {
            return (
              <Input
                key={id + 3}
                icon={input.icon}
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
        ) : form === 'signin' ? (
          signIn.map((input, id) => {
            return (
              <Input
                key={id}
                icon={input.icon}
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
        ) : form === 'activation' ? (
          <CodeInput />
        ) : (
          <Navigate to="signin" replace={true} />
        )}
      </styled.Input>
      <Button types="primary" size="md">
        {form === 'signup'
          ? 'Зарегистрироваться'
          : form === 'signin'
          ? 'Войти'
          : 'Продолжить'}
      </Button>
    </>
  );
};
