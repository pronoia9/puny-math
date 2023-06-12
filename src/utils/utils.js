import { darkTheme, lightTheme, retroTheme } from '../styles/Themes';

export const getTheme = (theme) => {
  switch (theme) {
    case 'dark': return darkTheme;
    case 'light': return lightTheme;
    case 'retro': return retroTheme;
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

// BASIC UTILS
export const deleteLast = (input) => (`${input}`.length !== 0 ? `${input}`.slice(0, -1) : input);
// export const addDecimal = (input) => input.toFixed(1);

export const calculatePls = (operator, a, b) => {
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '/': return divide(a, b);
    case '*': return multiply(a, b);
  }
};

// KEY/BUTTON CLICK
export const keyClick = (key, addInput, removeInput, doOperation, doCalculation, reset) => {
  if (key.click === 'addInput') addInput(key.button); // NUMBERS
  else if (key.click === 'calculate') doOperation(key.button); // + - * /
  else if (key.click === 'delete') removeInput();
  else if (key.click === 'reset') reset();
  else if (key.click === 'submit') doCalculation();
};

// EVENT LISTENER FUNCTION
export const keyup = (e, addInput, removeInput, doOperation, doCalculation) => {
  if (isValidInput(e?.key)) addInput(e.key); // ADD INPUT, verification is also in addInput in useStore.js
  if (isValidOperator(e?.key)) doOperation(e.key); // OPERATIONS, verification is also in doOperation in useStore.js
  if (e?.code === 'Backspace' || e?.code === 'Delete') removeInput(); // DELETE
  if (e?.code === 'Enter') doCalculation(); // SUBMIT
};
