import { ButtonProps } from './button.props';
import styles from './button.module.scss';
import { Icon } from '../icon';
import { icons } from '../icon/ui';
import classNames from 'classnames';
import { WraperStyled } from './button.styled';

export const Button = ({
	Type,
	icon,
	className,
	size,
	deActive,
	right,
	stretch,
	children,
}: ButtonProps): JSX.Element => {
	const log = () => {
		console.log(Boolean(icon));
	};
	return (
		<WraperStyled
			onClick={log}
			size={size}
			Type={Type}
			icon={icon}
			right={right}
			stretch={stretch}
			deActive={deActive}
			className={classNames(styles.button, className)}
		>
			{icon && <Icon className={styles.icon} size={20} names={icon} />}
			{children}
		</WraperStyled>
	);
};
