import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

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
      value={{ theme, input, calculations, result, themeButtonHandler, }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);