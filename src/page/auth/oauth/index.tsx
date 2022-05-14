import { OauthComponentProps } from './oauth.props';
import { OauthWrapperStyled } from './oauth.styled';
import { ButtonWithIcon } from '../../../component/UI/button/withIcon/buttonWithIcon';
import { color } from '../../../style/helpers.styled';

export const Oauth = ({
  className,
  children,
  ...props
}: OauthComponentProps): JSX.Element => {
  return (
    <OauthWrapperStyled className={className} {...props}>
      <ButtonWithIcon icon="google" types="secondary" iconSize={24} size="md">
        Google
      </ButtonWithIcon>
      <ButtonWithIcon
        icon="telegram"
        iconColor={color.primary.blueHEX}
        types="secondary"
        iconSize={24}
        size="md"
      >
        Telegram
      </ButtonWithIcon>
    </OauthWrapperStyled>
  );
};
