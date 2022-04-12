import { Icon } from '../../icon';
import { IconSize } from '../../icon/icon.props';
import { IconDefaultStyled } from '../../icon/icon.styled';
import { ButtonProps } from '../button.props';
import { ButtonWithIconStyled } from './buttonWithIcon.styled';

export const ButtonWithIcon = ({
	icon,
	iconRight,
	iconColor,
	iconSize,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<ButtonWithIconStyled
			className={className}
			icon={icon}
			iconRight={iconRight}
			iconColor={iconColor}
			iconSize={iconSize}
			{...props}
		>
			{(icon || iconRight || iconSize) &&
			(icon === 'default' || !icon || !iconSize) ? (
				<IconDefaultStyled
					color={iconColor}
					size={iconSize ? iconSize : IconSize.sm}
				/>
			) : (
				iconSize &&
				icon && <Icon size={iconSize} name={'add'} color={iconColor} />
			)}
			{props.children}
		</ButtonWithIconStyled>
	);
};
