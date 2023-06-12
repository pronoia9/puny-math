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

export const copyToClipboard = (val) => { navigator.clipboard.writeText(val); };

// VALIDATE NUMBER
export const isValidNumber = (input) => !isNaN(parseFloat(input));

// VALIDATE ACCEPTABLE INPUT
export const isValidInput = (input) => !isNaN(parseFloat(input)) || input === '.';

// VALIDATE OPERATOR
export const isValidOperator = (operator) => operator === '+' || operator === '-' || operator === '/' || operator === '*' || operator === 'x';

// BASIC OPERATIONS
export const add = (a, b) => parseFloat(a) + parseFloat(b);
export const subtract = (a, b) => parseFloat(a) - parseFloat(b);
export const multiply = (a, b) => parseFloat(a) * parseFloat(b);
export const divide = (a, b) => parseFloat(a) / parseFloat(b);

export const deleteLast = (input) => (`${input}`.length !== 0 ? `${input}`.slice(0, -1) : input);

export const addDecimal = (input) => input.toFixed(1);

export const calculatePls = (operator, a, b) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '/':
      return divide(a, b);
    case '*':
      return multiply(a, b);
  }
};

export const keyClick = ({ button, type, click }) => {
  if (type === 'number') {
  } else if (type === 'operator') {
  }
};

// EVENT LISTENER FUNCTION
export const keyup = (e, addInput, removeInput, doOperation, doCalculation) => {
  // ADD INPUT, verification is also in addInput in useStore.js
  if (isValidInput(e?.key)) addInput(e.key);
  // SUBMIT
  if (e?.code === 'Enter') doCalculation();
  // DELETE
  if (e?.code === 'Backspace' || e?.code === 'Delete') removeInput();
  // OPERATIONS, verification is also in doOperation in useStore.js
  if (isValidOperator(e?.key)) doOperation(e.key);
};
