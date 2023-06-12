import { styled } from 'styled-components';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

import { useStore } from '../store/useStore';
import { copyToClipboard } from '../utils/utils';
import { useRef } from 'react';

export default function Screen() {
  const input = useStore((state) => state.input),
    calculations = useStore((state) => state.calculations);
  const calculationsRef = useRef(),
    inputRef = useRef();
  
  return (
    <Container>
      <Calculations className='calculations' ref={calculationsRef} onClick={() => copyToClipboard(calculations)}>{calculations}</Calculations>
      {/* {calculations && <Tooltip id='calculations-tooltip' anchorSelect='.calculations'>{calculations}</Tooltip>} */}

      <Input className='input' ref={inputRef} onClick={() => copyToClipboard(input)}>{input}</Input>
      {input && input !== '0' && input.length > 16 && <Tooltip id='input-tooltip' anchorSelect='.input'>{input || 0}</Tooltip>}
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

  .react-tooltip {
    border-radius: 10px;
    color: var(--color-text-header);
    background: var(--color-bg-screen);

    &#input-tooltip {
      font-size: 1.5rem;
    }
  }

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
  }
`;

const Input = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 42rem) {
    height: 84px;
  }
`;