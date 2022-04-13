import { useAppDispatch, useAppSelector } from 'hook/rtk.hook';
import { AuthSlice } from 'redux/reducer/auth.slice';
import { Icon } from '../icon';
import { InputComponentProps } from './input.props';
import styled from './input.styled';

export const Input = ({
	className,
	children,
	icon,
	iconRight,
	rightActive,
	...props
}: InputComponentProps): JSX.Element => {
	return (
		<styled.InputWraper className={className}>
			<styled.Input iconRight={iconRight} icon={icon} {...props} />

			{icon && (
				<styled.IconLeft>
					<Icon name={icon} size={24} />
				</styled.IconLeft>
			)}

			{iconRight && (
				<styled.IconRight active={Boolean(rightActive)} onClick={rightActive}>
					<Icon name={iconRight} size={24} />
				</styled.IconRight>
			)}
		</styled.InputWraper>
	);
};
