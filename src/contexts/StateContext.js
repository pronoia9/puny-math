import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const keys = [
  { key: '1', type: 'number', style: '' },
  { key: '2', type: 'number', style: '' },
  { key: '3', type: 'number', style: '' },
  { key: '4', type: 'number', style: '' },
  { key: '5', type: 'number', style: '' },
  { key: '6', type: 'number', style: '' },
  { key: '7', type: 'number', style: '' },
  { key: '8', type: 'number', style: '' },
  { key: '9', type: 'number', style: '' },
  { key: '0', type: 'number', style: '' },
  { key: '.', type: 'operator', style: '' },
  { key: '+', type: 'operator', style: '' },
  { key: '-', type: 'operator', style: '' },
  { key: 'x', type: 'operator', style: '' },
  { key: '/', type: 'operator', style: '' },
  { key: '=', type: 'operator', style: '' },
  { key: 'DEL', type: 'operator', style: ' double-size' },
  { key: 'RESET', type: 'operator', style: ' double-size' },
];

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [input, setInput] = useState(0);
  const [calculations, setCalculations] = useState('');
  const [result, setResult] = useState('');

  const themeButtonHandler = (event) => { setTheme(event.target.value); };

  const addition = (num) => { setResult(result + num); };
  const subtraction = (num) => { setResult(result - num); };
  const multiplication = (num) => { setResult(result * num); };
  const division = (num) => { setResult(result / num); };

  const calculate = () => {
    // +, -, x, /, =
  }

  const showResult = () => { setInput(result); }

  const clear = () => {
    setInput(0);
    setCalculations('');
    setResult('');
  }

  const del = () => { 
    if (input.toString().length > 0) setInput(parseInt(input.toString().slice(input.length - 2)));
   }

  return (
    <StateContext.Provider
      value={{ theme, input, calculations, result, keys, themeButtonHandler, }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);