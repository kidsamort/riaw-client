import { EmptyComponentProps } from './empty.props';
import { EmptyWrapperStyled } from './empty.styled';

export const Empty = ({
  className,
  children,
  ...props
}: EmptyComponentProps): JSX.Element => {
  return (
    <EmptyWrapperStyled className={className} {...props}>
      {children}
    </EmptyWrapperStyled>
  );
};
