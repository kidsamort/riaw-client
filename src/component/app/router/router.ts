import Auth from 'page/auth';
import Error from 'page/error';
import Home from 'page/home';
import Private from 'page/private';

export interface IRoute {
	path: RouteNames | string;
	exact: boolean;
	element: React.ComponentType;
}

export enum RouteNames {
	AUTH = '/auth/:type',
	REDIRECT_AUTH = '/auth',
	PRIVATE = '/private',
	ERROR = '/error',
	HOME = '/',
}

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.AUTH, element: Auth, exact: true },
	{ path: RouteNames.REDIRECT_AUTH, element: Auth, exact: true },
	{ path: RouteNames.ERROR, element: Error, exact: true },
	{ path: RouteNames.HOME, element: Home, exact: true },
];
export const privateRoutes: IRoute[] = [
	{ path: RouteNames.PRIVATE, element: Private, exact: true },
];
