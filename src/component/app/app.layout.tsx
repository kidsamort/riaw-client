import { LayoutProps } from './appLayout.props';
import { Theme } from './theme';
import { FunctionComponent } from 'react';
import { AppRouter } from './router';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'style/global.styled';

const AppLayout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<Theme>
			<BrowserRouter>
				<GlobalStyles />
				{children}
				<AppRouter />
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
