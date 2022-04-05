import { EmptyProps } from './empty.props';
import styles from './Empty.module.css';
import { WraperStyled } from './empty.styled';

export const Empty = ({ children }: EmptyProps): JSX.Element => {
	return <WraperStyled>{children}</WraperStyled>;
};
