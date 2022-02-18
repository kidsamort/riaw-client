import Auth from 'pages/auth';
import Error from 'pages/error';
import Home from 'pages/home';
import Private from 'pages/private';

export interface IRoute {
	path: string;
	element: React.ComponentType;
	exact?: boolean;
}

export enum RouteNames {
	AUTH = '/auth/:type',
	REDIRECT_AUTH = '/auth/signin',
	PRIVATE = '/private',
	ERROR = '/error',
	HOME = '/',
}

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.AUTH, element: Auth, exact: true },
	{ path: RouteNames.ERROR, element: Error, exact: true },
	{ path: RouteNames.HOME, element: Home, exact: true },
];
export const privateRoutes: IRoute[] = [
	{ path: RouteNames.PRIVATE, element: Private, exact: true },
];
