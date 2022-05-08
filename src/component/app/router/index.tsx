import { Navigate, useRoutes } from 'react-router-dom';
import Auth from 'page/auth';
import Error from 'page/error';
import Home from 'page/home';
import Private from 'page/private';
import { useAppSelector } from '../../../hook/rtk.hook';

export const AppRouter = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const publicRoutes = [
    { path: '/', element: <Home /> },
    {
      path: 'auth',
      element: <Auth />,
      children: [{ path: ':auth', element: <></> }],
    },
    { path: 'error', element: <Error /> },
    {
      path: '*',
      element: <Error /> /*<Navigate to="/error" replace={true} />*/,
    },
  ];
  const privateRoutes = [{ path: 'private', element: <Private /> }];

  return useRoutes(isAuth ? [...privateRoutes, ...publicRoutes] : publicRoutes);
};
