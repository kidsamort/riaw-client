import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { ButtonProps, ButtonIcon } from './button.props';
import { ReactComponent as CloseIcon } from './icons/close.svg';
import styles from './button.module.css';
import { ButtonStyled } from './button.styled';

export const Button = ({
	icon,
	size,
	color,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	const iconRender = (image: ButtonIcon | ComponentPropsWithoutRef<'svg'>) => {
		switch (icon) {
			case ButtonIcon.CLOSE:
				return <CloseIcon />;
			default:
				return icon;
				break;
		}
	};
	return (
		<ButtonStyled
			size={size}
			icon={icon}
			color={color}
			className={cn(styles.button, className)}
			{...props}
		>
			{children}
			{icon && iconRender(icon)}
		</ButtonStyled>
	);
};
