import styled from 'styled-components';
import { OauthProps } from './oauth.props';

export const OauthWrapperStyled = styled.div<OauthProps>`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
`;
