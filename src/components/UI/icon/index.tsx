import classNames from 'classnames';
import styles from './icon.module.scss';
import { IconProps } from './icon.props';

export const Icon = ({ names, fill, size = 16, className }: IconProps): JSX.Element => {
	return (
		<svg
			className={classNames(className, styles.icon)}
			width={size}
			height={size}
			viewBox="0 0 16 16"
			fill={fill}
		>
			{names.map((path) => {
				return <path d={path}></path>;
			})}
		</svg>
	);
};
