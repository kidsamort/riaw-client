import { HeadingProps, HeadingType } from './heading.props';
import cn from 'classnames';
import styles from './heading.module.css';

export const Heading = ({ types, className, children }: HeadingProps): JSX.Element => {
	switch (types) {
		case HeadingType.H1:
			return <h1 className={cn(styles.h1, className)}>{children}</h1>;
		case HeadingType.H2:
			return <h2 className={cn(styles.h2, className)}>{children}</h2>;
		case HeadingType.H3:
			return <h3 className={cn(styles.h3, className)}>{children}</h3>;
		case HeadingType.H4:
			return <h4 className={cn(styles.h4, className)}>{children}</h4>;
		default:
			return <></>;
	}
};
