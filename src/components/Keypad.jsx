import { styled } from 'styled-components';

import { useStore } from '../store/useStore';
import { buttons } from '../utils/data';
import { keyClick } from '../utils/utils';

export default function Keypad() {
  return (
    <Grid>
      {buttons.map((button) => (
        <Key key={`button-${button.button}`} {...button} />
      ))}
    </Grid>
  );
}

function Key(button) {
  const addInput = useStore((state) => state.addInput),
    removeInput = useStore((state) => state.removeInput),
    doOperation = useStore((state) => state.doOperation),
    doCalculation = useStore((state) => state.doCalculation),
    reset = useStore((state) => state.reset);
  return <Button onClick={() => keyClick(button, addInput, removeInput, doOperation, doCalculation, reset)}>{button.button}</Button>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-bg-keypad);
  border-radius: 10px;
`;

const Button = styled.button`
  position: relative;
  /* padding: 1rem 0.9rem 0.5rem 0.9rem; */
  padding: 0.9rem;
  color: var(--color-text-keys);
  font-weight: var(--font-weight);
  line-height: 1.1;
  border: none;
  border-radius: 5px;
  background-color: var(--color-key1-bg);
  box-shadow: 0px 4px 0px 0px var(--color-key1-shadow);
  transition: all 0.5s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: var(--color-key1-hover);
    transition: background-color 0.1s ease-in-out;
  }

  // DEL + RESET
  &:nth-child(4),
  &:nth-child(17) {
    color: var(--color-text-keys-text);
    background-color: var(--color-key2-bg);
    box-shadow: 0px 4px 0px 0px var(--color-key2-shadow);
    &:hover {
      background-color: var(--color-key2-hover);
    }
  }

  // RESET
  &:nth-child(17) {
    grid-area: 5/1/5/3;
  }

  // =
  &:nth-child(18) {
    grid-area: 5/3/5/5;
    background-color: var(--color-key3-bg);
    box-shadow: 0px 4px 0px 0px var(--color-key3-shadow);
    &:hover {
      background-color: var(--color-key3-hover);
    }
  }

  &:nth-child(4),
  &:nth-child(17),
  &:nth-child(18) {
    /* font-size: 1.95rem; */
    font-size: 1.5rem;
  }

  @media screen and (min-width: 42rem) {
    font-size: 2.5rem;
    &:nth-child(4),
    &:nth-child(17),
    &:nth-child(18) {
      font-size: 2.25rem;
    }
  }
`;
