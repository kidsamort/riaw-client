import { HeaderComponentProps } from './header.props';
import { SpanStyled, WrapperStyled } from './header.styled';
import { IconDefaultStyled } from 'component/UI/icon/icon.styled';
import { Text } from '../../../component/text';
import { font } from '../../../style/helpers.styled';
import { Link } from 'react-router-dom';

export const Header = ({
  className,
  children,
  ...props
}: HeaderComponentProps): JSX.Element => {
  return (
    <WrapperStyled className={className} {...props}>
      <>
        <IconDefaultStyled size={48} />
        <Text type={font.style.caption1}>
          <SpanStyled>Уже зарегистрированы?</SpanStyled>
          <Link to="signin">Войти</Link>
        </Text>
      </>
    </WrapperStyled>
  );
};
