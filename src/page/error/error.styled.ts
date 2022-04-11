import { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import { color } from 'style/helpers.styled';

export const WraperStyled = styled.div<{ theme: DefaultTheme }>`
	color: ${color.primary.red};
`;
