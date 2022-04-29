import { DevProps } from './dev.props';
import styles from './dev.module.css';
import { WraperStyled } from './dev.styled';

export const Dev = ({ children }: DevProps): JSX.Element => {
  return <WraperStyled className={styles.test}>{children}</WraperStyled>;
};
