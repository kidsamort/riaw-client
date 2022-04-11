import { EmptyComponentProps } from './empty.props';
import styled from './empty.styled';

export const Empty = ({
	className,
	children,
	...props
}: EmptyComponentProps): JSX.Element => {
	return (
		<styled.Wraper className={className} {...props}>
			{children}
		</styled.Wraper>
	);
};
