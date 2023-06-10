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
}

export const isNumber = (input) => !isNaN(parseFloat(input));

export const add = (a, b) => parseFloat(a) + parseFloat(b);

export const subtract = (a, b) => parseFloat(a) - parseFloat(b);

export const multiply = (a, b) => parseFloat(a) * parseFloat(b);

export const divide = (a, b) => parseFloat(a) / parseFloat(b);

export const deleteLast = (input) => (`${input}`.length !== 0 ? parseFloat(`${input}`.slice(0, -1)) : input);

export const keyClick = ({ button, type, click }) => {
  if (type === 'number') {
  } else if (type === 'operator') {
  }
};
