import styled from 'styled-components';
import { TextProps } from './text.props';

export const TextStyled = styled.div<{ props: TextProps }>`
  ${({ props }) => props.type}
`;
