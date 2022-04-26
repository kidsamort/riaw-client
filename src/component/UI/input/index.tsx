import { Icon } from '../icon';
import { InputComponentProps } from './input.props';
import styled from './input.styled';

export const Input = ({
	className,
	children,
	icon,
	iconRight,
	rightActive,
	rightAction,
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
				<styled.IconRight
					$active={Boolean(rightAction)}
					$action={Boolean(rightActive)}
					onClick={rightAction}
				>
					<Icon name={iconRight} size={24} />
				</styled.IconRight>
			)}
		</styled.InputWraper>
	);
};
