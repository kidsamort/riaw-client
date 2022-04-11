import { TextProps } from './text.props';
import { TextStyled } from './text.styled';

export const Text = ({ type, children }: TextProps): JSX.Element => {
	return <TextStyled props={{ type }}>{children}</TextStyled>;
};
