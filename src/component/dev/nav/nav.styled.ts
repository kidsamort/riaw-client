import styled, { DefaultTheme } from 'styled-components';
import { NavProps } from './nav.props';

export const WraperStyled = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  top: 0;
  left: 0;
  button {
    display: inline;
  }
  span,
  button {
    transition: background 0.3s ease-in;
    background: ${({ theme }) => theme.bg};
    border: none;
  }
  ul {
    padding: 0;

    li {
      display: inline;
      text-decoration: none;
      margin-right: 12px;
      a {
        color: ${({ theme }): string => theme.text};
        transition: color 0.3s ease-in;
      }
      h4 {
        display: inline;
        margin-right: 25px;
      }
    }
  }
`;
