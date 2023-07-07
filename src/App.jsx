import { useEffect } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { Header, Keypad, Screen } from './components';
import { useStore } from './store/useStore';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme, keyup } from './utils/utils';

export default function App() {
  // STORE
  const theme = useStore((state) => state.theme),
    addInput = useStore((state) => state.addInput),
    removeInput = useStore((state) => state.removeInput),
    doOperation = useStore((state) => state.doOperation),
    doCalculation = useStore((state) => state.doCalculation);

  // EVENT LISTENER FOR KEYS
  useEffect(() => {
    window.addEventListener('keyup', (e) => { keyup(e, addInput, removeInput, doOperation, doCalculation); });
    return () => { window.removeEventListener('keyup', keyup); };
  }, []);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <Header />
          <Screen />
          <Keypad />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 1.7rem !important;
  max-width: 37.25rem;

  @media screen and (min-width: 42rem) {
    padding-block: 6rem;
  }
`;
