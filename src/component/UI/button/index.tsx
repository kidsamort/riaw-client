import { ButtonProps } from './button.props';
import { ButtonStyled } from './button.styled';

export const Button = ({ className, ...props }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} {...props}>
      {props.children}
    </ButtonStyled>
  );
};
