import cn from 'classnames';
import { InputProps, InputIcon, InputStatusIcon } from './input.props';
import { InputStyled, LeftIconStyled, RightIconStyled, WraperStyled } from './input.styled';
import { ReactComponent as MailIcon } from './icon/mail.svg';
import { ReactComponent as CheckIcon } from './icon/check.svg';
import { ReactComponent as WarningIcon } from './icon/warning.svg';
import { ReactComponent as ArrowIcon } from './icon/arrow.svg';
import { ReactComponent as LockIcon } from './icon/lock.svg';
import { ReactComponent as PersonIcon } from './icon/person.svg';
import styles from './input.module.css';

export const Input = ({
	className,
	icon,
	iconStatus,
	active,
	...props
}: InputProps): JSX.Element => {
	const iconRender = (image: InputIcon): JSX.Element => {
		switch (image) {
			case InputIcon.MAIL:
				return <MailIcon />;
			case InputIcon.ARROW:
				return <ArrowIcon />;
			case InputIcon.PASS:
				return <LockIcon />;
			case InputIcon.PERSON:
				return <PersonIcon />;
			default:
				return <></>;
		}
	};
	const iconStatusRender = (image: InputStatusIcon): JSX.Element => {
		switch (image) {
			case InputStatusIcon.CHECK:
				return <CheckIcon />;
			case InputStatusIcon.WARNING:
				return <WarningIcon />;
			default:
				return <></>;
		}
	};

	return (
		<WraperStyled iconStatus={iconStatus} className={cn(styles.wrap, className)}>
			<InputStyled iconStatus={iconStatus} className={cn(styles.input)} {...props} />
			<LeftIconStyled className={cn(styles.icon, styles.icon)}>
				{icon && iconRender(icon)}
			</LeftIconStyled>
			<RightIconStyled className={cn(styles.iconRight, styles.icon)}>
				{icon && iconStatusRender(iconStatus!)}
			</RightIconStyled>
		</WraperStyled>
	);
};
