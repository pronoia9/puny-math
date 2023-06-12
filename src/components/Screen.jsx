import { styled } from 'styled-components';

import { useStore } from '../store/useStore';
import { copyToClipboard } from '../utils/utils';

export default function Screen() {
  const input = useStore((state) => state.input),
    calculations = useStore((state) => state.calculations);
  
  return (
    <Container>
      <Calculations onClick={() => copyToClipboard(calculations)}>
        {calculations}
      </Calculations>
      <Input onClick={() => copyToClipboard(input)}>
        <span>{input}</span>
      </Input>
    </Container>
  );
}

const Container = styled.div`
  margin-block: 1rem;
  padding: 0.5rem 1rem;
  text-align: right;
  color: var(--color-text-header);
  background: var(--color-bg-screen);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;
  height: 100%;

  @media screen and (min-width: 42rem) {
    font-size: 3.5rem;
  }
`;

const Calculations = styled.div`
  font-size: 1rem;
  font-weight: 500;
  height: 1.5rem;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    overflow: visible;
  }
`;

const Input = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    overflow: visible;
  }

  @media screen and (min-width: 42rem) {
    height: 84px;
  }
`;