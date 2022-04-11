import { Icon } from '../icon';
import { InputComponentProps } from './input.props';
import styled from './input.styled';

export const Input = ({
	className,
	children,
	icon,
	iconRight,
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
				<styled.IconRight>
					<Icon name={iconRight} size={24} />
				</styled.IconRight>
			)}
		</styled.InputWraper>
	);
};
