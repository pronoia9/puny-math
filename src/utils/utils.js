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
export const keyup = (e, addInput, removeInput, doOperation) => {
  console.log(e);

  // ADD INPUT, verification is also in addInput in useStore.js
  if (isNumber(e?.key) || e?.key === '.') addInput(e.key);

  // SUBMIT
  if (e?.code === 'Enter') {
    // submit();
  }

  // DELETE
  if (e?.code === 'Backspace' || e?.code === 'Delete') removeInput();

  // OPERATIONS, verification is also in doOperation in useStore.js
  if (e?.key === '+' || e?.key === '-' || e?.key === '/' || e?.key === '*' || e?.key === 'x') { doOperation(e.key); };
};
