import { LoaderComponentProps } from './loader.props';
import styled from './loader.styled';

export const Loader = ({
  className,
  children,
  ...props
}: LoaderComponentProps): JSX.Element => {
  return (
    <styled.Wraper className={className} {...props}>
      {children}
    </styled.Wraper>
  );
};
