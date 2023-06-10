import { ThemeProvider } from 'styled-components';

import { useStore } from './store/Store';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './utils/utils';

const App = () => {
  // STORE
  const theme = useStore((state) => state.theme);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
