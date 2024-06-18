import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const Page404  = Loadable(lazy(() => import('views/utilities/page-not-found')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/',
      element: <AuthLogin />
    },
    {
      path: '*',
      element: <Page404 />
    },
  ]
};

export default AuthenticationRoutes;
