import styled, { css, DefaultTheme } from 'styled-components';
import { Button } from '../index';
import { ButtonProps } from '../button.props';
import { ITheme } from 'redux/reducer/theme.slice';
import { color } from 'style/helpers.styled';

export const ButtonWithIconStyled = styled(Button)<ButtonProps>`
  ${({ icon, iconRight, iconSize }) =>
    (icon || iconRight || iconSize) &&
    css`
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      grid-auto-flow: dense;
      justify-content: center;
    `}
  ${({ children }) => children && 'gap: 8px'};
  div,
  svg {
    transition: fill 0.3s ease-in, background 0.3s ease-in;
    fill: ${({ iconColor, theme }) => (iconColor ? iconColor : theme.text)};
  }
  ${({ iconRight }) => iconRight && 'grid-column: 2/3'};
`;
export const ThemeButton = styled.div<{ nowTheme: ITheme }>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 50px;
  right: 30px;

  transition: all 0.3s ease-in;
  background-color: ${({ theme }) => theme.hr};
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);

  padding: 8px;
  border-radius: 50%;
  z-index: 3;
  cursor: pointer;
  svg {
    transition: all 0.3s ease-in;
    width: 24px;
    flex-shrink: 0;
    fill: ${({ nowTheme }) =>
      nowTheme === 'dark' ? color.secondary.yelow : 'none'};
    stroke: ${({ nowTheme }) =>
      nowTheme === 'dark' ? 'none' : color.neuteral.b7};
  }
`;

// export default { ThemeButton };
