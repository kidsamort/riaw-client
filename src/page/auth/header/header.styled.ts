import styled, { css } from 'styled-components';
import { HeaderProps } from './header.props';
import { color } from '../../../style/helpers.styled';

export const WrapperStyled = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SpanStyled = styled.span<HeaderProps>`
  padding-right: 6px;
  color: ${color.neuteral.b4};
`;
