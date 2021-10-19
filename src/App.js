import {useRoutes} from 'react-router-dom';
import routes from './routes';
import { ThemeProvider,CircularProgress } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import { Suspense } from 'react';
import { Provider } from 'react-redux'
import Store from './reducers/Store';
import {ThemeProvider as StyledThemeProvider} from "styled-components"
import { PersistGate } from 'redux-persist/integration/react'
import { SnackbarProvider } from 'notistack';
import './custom.scss';
import Zoom from '@material-ui/core/Zoom';


const {store,persistor} = Store()





function App() {
  const routing = useRoutes(routes);

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={5} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                TransitionComponent={Zoom}
                >
              <GlobalStyles />
              <Suspense fallback={<Loader />}>
                {routing}
              </Suspense>
            </SnackbarProvider>
          </StyledThemeProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

function Loader() {
  return (
    <div className="justify-center items-center flex h-full w-full">
      <CircularProgress size={20} />
    </div>
  );
}
export default App;
