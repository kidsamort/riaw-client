import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from 'router';

const AppRouter = (): JSX.Element => {
	// const {isAuth} = useTypedSelector(state => state.auth);
	const isAuth = false;
	return isAuth ? (
		<Switch>
			{publicRoutes.map((route) => (
				<Route path={route.path} exact={route.exact} component={route.element} key={route.path} />
			))}
			{privateRoutes.map((route) => (
				<Route path={route.path} exact={route.exact} component={route.element} key={route.path} />
			))}
			<Redirect to={RouteNames.ERROR} />
		</Switch>
	) : (
		<Switch>
			{publicRoutes.map((route) => (
				<Route path={route.path} exact={route.exact} component={route.element} key={route.path} />
			))}
			<Redirect to={RouteNames.REDIRECT_AUTH} />
		</Switch>
	);
};

export default AppRouter;
