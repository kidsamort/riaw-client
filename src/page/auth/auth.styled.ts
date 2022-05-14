import styled, { css } from 'styled-components';
import { font } from 'style/helpers.styled';

export const AuthWrapperStyled = styled.div`
  padding: 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: start;
  gap: 32px;
  height: 100vh;
  a {
    ${font.style.caption1}
  }
`;
export const BodyStyled = styled.div<{ center: boolean }>`
  display: grid;
  gap: 32px;
  align-content: ${({ center }) => (center ? ' center' : 'start')};
`;
export const BlockStyled = styled.div`
  display: grid;
  gap: 20px;
`;

export default {};
