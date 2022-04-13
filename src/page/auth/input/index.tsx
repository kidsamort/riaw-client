import { Button } from 'component/UI/button';
import { Input } from 'component/UI/input';
import { useAppDispatch, useAppSelector } from 'hook/rtk.hook';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AuthSlice } from 'redux/reducer/auth.slice';
import { signin, signup } from './input';
import { AuthInputComponentProps } from './input.props';
import styled from './input.styled';

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
	useEffect(() => {
		dispatch(setShowPass(false));
	}, [form]);

	const dispatch = useAppDispatch();
	const clickShowPass = () => {
		dispatch(setShowPass(!showPass));
	};

	return (
		<styled.Input>
			{form === 'signup' ? (
				signup.map((input) => {
					return (
						<Input
							key={input.id}
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
			) : form === 'signin' ? (
				signin.map((input, index) => {
					return (
						<Input
							key={input.id}
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
			) : (
				<Navigate to="signin" replace={true} />
			)}
			<Button types="primary" size="md">
				{form === 'signup' ? 'Зарегистрироваться' : 'Войти'}
			</Button>
		</styled.Input>
	);
};
