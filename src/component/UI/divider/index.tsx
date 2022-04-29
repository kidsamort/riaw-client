import { DividerComponentProps } from './divider.props';
import styled from './divider.styled';

export const Divider = ({
  className,
  ...props
}: DividerComponentProps): JSX.Element => {
  return <styled.Wraper className={className} {...props}></styled.Wraper>;
};
