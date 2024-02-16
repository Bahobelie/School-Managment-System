import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
const AuthLogin = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Loadable from './ui-component/Loadable';
import { lazy } from 'react';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const isLoggedIn = useSelector((state) => state.customization.auth.isLoggedIn);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>{isLoggedIn ? <Routes /> : <AuthLogin />}</NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
