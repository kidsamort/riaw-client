import { InputProps } from './input.props';
import styles from './input.module.scss';
import { WraperStyled } from './input.styled';
import cn from 'classnames';
import { Icon } from '../icon';

export const Input = ({ className, startIcon, endIcon, ...props }: InputProps): JSX.Element => {
	return (
		<WraperStyled test={'test'}>
			<input className={cn(styles.input, className)} {...props} />
			{startIcon && (
				<div className={styles.startIcon}>
					<Icon names={startIcon} size={24} />
				</div>
			)}
			{endIcon && (
				<div className={styles.endIcon}>
					<Icon names={endIcon} size={24} />
				</div>
			)}
		</WraperStyled>
	);
};
