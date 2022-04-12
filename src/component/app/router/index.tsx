import { Navigate, useRoutes } from 'react-router-dom';
import Auth from 'page/auth';
import Error from 'page/error';
import Home from 'page/home';
import Private from 'page/private';

export function AppRouter() {
	const auth = false;

	const privateRoutes = [{ path: 'private', element: <Private /> }];

	const publicRoutes = [
		{
			path: 'auth',
			element: <Auth />,
			children: [{ path: ':form', element: <></> }],
		},
		{ path: 'error', element: <Error /> },
		{ path: '/', element: <Home /> },
		// { path: '*', element: <Navigate to="/error" replace={true} /> },
	];

	const routes = auth ? { ...publicRoutes, ...privateRoutes } : publicRoutes;

	return useRoutes(routes);
}
