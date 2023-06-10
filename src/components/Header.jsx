import { styled } from 'styled-components';
import { useStore } from '../store/useStore';

export default function Header() {
  const theme = useStore((state) => state.theme);
  return (
    <Container key={`header-${theme}`}>
      <Title>Calc</Title>
      <Switcher className='theme-control'>
        <SwitcherHeader className='theme-header'>Theme</SwitcherHeader>
        {['dark', 'light', 'retro'].map((value, index) => (
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
  transition: color 0.5s ease-in-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.5px;
  text-align: center;
`;

const Switcher = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  gap: 0.5rem;
  border: none;
  padding-inline: 0;

  &::before {
    position: absolute;
    content: '';
    width: 70%;
    height: 25px;
    background: var(--color-bg-keypad);
    z-index: -1;
    bottom: 11%;
    left: 33%;
    border-radius: 20px;
    transition: background 0.5s ease-in-out;
  }
`;

const SwitcherHeader = styled.p`
  text-transform: uppercase;
  /* display: contents; */
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.1;
  padding-top: calc(11% + 7px);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 0.6rem;
`;

const InputLabel = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.1;
`;

const Input = styled.input`
  opacity: 0;
  appearance: none;
  width: 1em;
  height: 1em;
  background: var(--color-key3-bg);
  transition: background 0.25s ease-in-out;
  border-radius: 50%;

  &:hover,
  &:focus {
    cursor: pointer;
    background: var(--color-key3-hover);
  }

  &:checked {
    opacity: 1;
  }
`;
