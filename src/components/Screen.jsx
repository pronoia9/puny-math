import { styled } from 'styled-components';
import { useStore } from '../store/useStore';

export default function Screen() {
  const input = useStore((state) => state.input);
  
  return (
    <Container className='display border-radius'>
      <Calculations>
        {'calculations added here maybe idk might delete'}
      </Calculations>
      <Input>
        {input}
      </Input>
    </Container>
  );
}

const Container = styled.div`
  margin-block: 1rem;
  padding: 0.5rem 1rem;
  text-align: right;
  background: var(--color-bg-screen);
  border-radius: 10px;

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
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-header);
  height: 60px;

  @media screen and (min-width: 42rem) {
    height: 84px;
  }
`;