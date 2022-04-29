import { color, font } from 'style/helpers.styled';
import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from './button.props';

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  transition: 0.3s ease-in;
  &:hover {
    ${({ types, deActive }) =>
      types === 'primary' && !deActive && 'filter: brightness(85%);'}
  }
  &:active {
    transition: 0.1s ease-in;
    ${({ types, deActive }) =>
      types === 'primary' && !deActive && 'filter: brightness(75%);'}
  }
  ${({ deActive }) => (deActive ? 'opacity: 0.5' : 'cursor: pointer')};

  ${({ size }) => (size === 'md' ? font.style.button1 : font.style.button2)}
  ${({ types }) =>
    types === 'secondary' &&
    `box-shadow: 0 0 0 2px ${color.neuteral.shades['04-40%']} inset`};

  border-radius: ${({ size }) =>
    size === 'md' ? '12px' : size === 'sm' ? '8px' : '8px'};

  padding: ${({ size }) =>
    size === 'md' ? '12px 20px' : size === 'sm' ? '8px 16px' : '8px 16px'};

  background: ${({ types, color: propColors, theme }) =>
    propColors
      ? propColors
      : types === 'primary'
      ? color.primary.blue
      : types === 'secondary'
      ? 'none'
      : theme.bg};
  color: ${({ types, theme }) =>
    types === 'primary' ? color.neuteral.w1 : theme.text};
`;
