import { DefaultProps } from './default.props';
import styles from './Default.module.css';
import { WraperStyled } from './default.styled';

export const Default = ({ children }: DefaultProps): JSX.Element => {
	return <WraperStyled>{children}</WraperStyled>;
};
