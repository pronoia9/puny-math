import { styled } from 'styled-components';

import { useStore } from '../store/useStore';
import { themes } from '../utils/data';

export default function Header() {
  const theme = useStore((state) => state.theme);
  return (
    <Container key={`header-${theme}`}>
      <Title>CALC</Title>
      <Switcher>
        <SwitcherHeader>THEME</SwitcherHeader>
        {themes.map((value, index) => (
          <ThemeSwitch key={`switch-${value}`} value={value} index={index} />
        ))}
      </Switcher>
    </Container>
  );
}

function ThemeSwitch({ value, index }) {
  const theme = useStore((state) => state.theme),
    setTheme = useStore((state) => state.setTheme);
  const handleChange = (e) => { setTheme(e.target.value); };
  return (
    <InputContainer>
      <Input type='radio' name='theme' value={value} checked={theme === value} onChange={handleChange} />
      <InputLabel htmlFor={`${value}-theme`}>{index + 1}</InputLabel>
    </InputContainer>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-header);
  text-transform: lowercase;
  transition: color 0.5s ease-in-out;
`;

const Title = styled.p`
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
  align-self: self-end;
`;

const Switcher = styled.div`
  position: relative;
  padding-inline: 0;
  display: flex;
  gap: 0.5rem;
  border: none;
  font-size: 1rem;
  margin-right: 0.25rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 33%;
    bottom: calc(-16px * 0.25);
    width: 70%;
    height: 25px;
    background: var(--color-bg-keypad);
    border-radius: 20px;
    z-index: -1;
    transition: background 0.5s ease-in-out;
  }
`;

const SwitcherHeader = styled.p`
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.1;
  padding-top: calc(25px + 11%);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.6rem;
`;

const InputLabel = styled.label`
  font-size: 0.75rem;
  line-height: 1.1;
`;

const Input = styled.input`
  opacity: 0;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-key3-bg);
  transition: background 0.25s ease-in-out;

  &:hover, &:focus {
    cursor: pointer;
    background: var(--color-key3-hover);
  }

  &:checked {
    opacity: 1;
  }
`;
