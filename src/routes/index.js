import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useSelector } from 'react-redux';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const isLoggedIn = useSelector((state) => state.customization.auth.isLoggedIn);
  return useRoutes(isLoggedIn? [MainRoutes]:[AuthenticationRoutes]);
}
