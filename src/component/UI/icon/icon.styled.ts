import styled, { DefaultTheme } from 'styled-components';
import { IconSize } from './icon.props';

export const IconDefaultStyled = styled.div<{
	size: IconSize;
	color?: string;
}>`
	transition: background 0.3s ease-in;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	background: ${({ theme, ...props }) =>
		props.color ? props.color : theme.text};
	border-radius: 100%;
`;

export const WraperStyled = styled.div<{
	theme: DefaultTheme;
}>``;

const iconWraper = styled.svg``;

export default { iconWraper };
