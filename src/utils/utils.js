import { darkTheme, lightTheme, retroTheme } from '../styles/Themes';

export const getTheme = (theme) => {
  switch (theme) {
    case 'dark':
      return darkTheme;
    case 'light':
      return lightTheme;
    case 'retro':
      return retroTheme;
  }
};

export const isNumber = (input) => !isNaN(parseFloat(input));

export const add = (a, b) => parseFloat(a) + parseFloat(b);

export const subtract = (a, b) => parseFloat(a) - parseFloat(b);

export const multiply = (a, b) => parseFloat(a) * parseFloat(b);

export const divide = (a, b) => parseFloat(a) / parseFloat(b);

export const deleteLast = (input) => (`${input}`.length !== 0 ? `${input}`.slice(0, -1) : input);

export const addDecimal = (input) => input.toFixed(1);

export const keyClick = ({ button, type, click }) => {
  if (type === 'number') {
  } else if (type === 'operator') {
  }
};

// EVENT LISTENER FUNCTION
export const keyup = (e, addInput, removeInput) => {
  console.log(e);

  // ADD INPUT
  if (isNumber(e.key) || e.key === '.') addInput(e.key); // verification is also in addInput in useStore.js

  // SUBMIT
  if (e.code === 'Enter') {
    // submit();
  }

  // DELETE
  if (e.code === 'Backspace' || e.code === 'Delete') removeInput();

  // OPERATIONS
  if (e.key === '+') {}
  if (e.key === '-') {}
  if (e.key === '/') {}
  if (e.key === '*' || e.key === 'x') {}
};
