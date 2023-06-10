import { styled } from 'styled-components';
import { buttons } from '../utils/data';

export default function Keypad() {
  return (
    <Grid>
      {buttons.map((b) => (
        <Key key={`button-${b.button}`} {...b} />
      ))}
    </Grid>
  );
}

function Key({ button, type, click }) {
  return <Button>{button}</Button>;
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
  padding-block: 0.9rem;
  color: var(--color-text-keys);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
  border-radius: 5px;
  border: none;
  background-color: var(--color-key1-bg);
  box-shadow: 0px 4px 0px 0px var(--color-key1-shadow);
  transition: all 0.5s ease-in-out;

  &:hover, &:focus {
    cursor: pointer;
    background-color: var(--color-key1-hover);
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

  @media screen and (min-width: 42rem) {
    font-size: 2.5rem;
  }
`;
