import { styled } from 'styled-components';
import { useStore } from '../store/useStore';

export default function Screen() {
  const input = useStore((state) => state.input),
    calculations = useStore((state) => state.calculations);
  
  return (
    <Container className='display border-radius'>
      <Calculations>
        {calculations}
      </Calculations>
      <Input>
        {input || '0'}
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

  @media screen and (min-width: 42rem) {
    font-size: 3.5rem;
  }
`;

const Calculations = styled.div`
  font-size: 1rem;
  font-weight: 500;
  min-height: 1.5rem;
`;

const Input = styled.div`
  height: 60px;

  @media screen and (min-width: 42rem) {
    height: 84px;
  }
`;