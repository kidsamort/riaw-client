import { ThemeProvider } from 'styled-components';
import { ThemeProps } from './theme.props';
import { darkTheme, lightTheme } from 'style/theme.styled';
import useTheme from 'hook/theme.hook';
import { clearPreLoadTheme, getThemeUser, setThemeUser } from './theme';
import { useEffect } from 'react';
import { ITheme } from 'redux/reducer/theme.slice';
import { useAppDispatch } from 'hook/rtk.hook';

export const Theme = ({ children }: ThemeProps): JSX.Element => {
  const { nowTheme, allTheme, setTheme } = useTheme();
  const dispath = useAppDispatch();

  useEffect(() => {
    const { prefersDark, savedTheme } = getThemeUser();

    setThemeUser(
      savedTheme as ITheme,
      prefersDark,
      allTheme,
      setTheme,
      dispath,
    );

    // clearPreLoadTheme();
  }, []);

  return (
    <ThemeProvider theme={nowTheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
