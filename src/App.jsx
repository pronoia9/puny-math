import { ThemeProvider, styled } from 'styled-components';

import { Header } from './components';
import { useStore } from './store/Store';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme } from './utils/utils';

export default function App() {
  // STORE
  const theme = useStore((state) => state.theme);

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyles />

      <Container>
        <Wrapper>
          <Header />
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
