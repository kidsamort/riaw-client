import 'styled-components';

interface InputStyled {
  bg: string;
  bgFocus: string;
  colorPlaceholder: string;
}
interface ButtonStyled {
  themeSwitch: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    text: string;
    hr: string;
    button: ButtonStyled;
    input: InputStyled;
  }
}
