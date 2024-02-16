import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //
// ============================= ||  Test AUTH ================================================= //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: <AuthLogin3 />
    },
  ]
};

export default AuthenticationRoutes;
