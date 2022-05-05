import { LayoutProps } from './appLayout.props';
import { Theme } from './theme';
import { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'style/global.styled';

import { AppRouter } from './router';
import { useAppSelector } from '../../hook/rtk.hook';

const AppLayout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.authReducer);

  return (
    <Theme>
      <BrowserRouter>
        <GlobalStyles />
        {children}
        {!isLoading && <AppRouter />}
      </BrowserRouter>
    </Theme>
  );
};

export const withAppLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
) => {
  return function withLayoutAppComponent(props: T): JSX.Element {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };
};
