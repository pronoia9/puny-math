import { useEffect } from 'react';
import { ThemeProvider, styled } from 'styled-components';

import { Header, Keypad, Screen } from './components';
import { useStore } from './store/useStore';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme, keyup } from './utils/utils';

export default function App() {
  // STORE
  const theme = useStore((state) => state.theme),
    input = useStore((state) => state.input),
    addInput = useStore((state) => state.addInput),
    setInput = useStore((state) => state.setInput);

  useEffect(() => {
    window.addEventListener('keyup', keyup);
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
  padding: 1.7rem;
  max-width: 37.25rem;

  @media screen and (min-width: 42rem) {
    padding-block: 6rem;
  }
`;
