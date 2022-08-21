import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [input, setInput] = useState('0');
  const [calculations, setCalculations] = useState('');
  const [result, setResult] = useState('');

  const themeButtonHandler = (event) => {
    setTheme(event.target.value);
  };

  const addInput = (num) => {
    setInput(`${parseFloat(input + num)}`);
  }

  const addDecimal = () => { 
    setInput(`${parseFloat(input)}${!input.includes('.') ? '.' : ''}`);
  };

  const addition = () => { setResult(`${parseInt(result + input)}`); };
  const subtraction = () => { setResult(`${parseInt(result - input)}`); };
  const multiplication = () => { setResult(`${parseInt(result * input)}`); };
  const division = () => { setResult(`${parseInt(result / input)}`); };

  const calculate = () => {
    // +, -, x, /, =
  };

  const showResult = () => {
    setInput(result);
  };

  const reset = () => {
    setInput(0);
    setCalculations('');
    setResult('');
  };

  const del = () => {
    if (input.length > 0) setInput(input.slice(input.length - 2));
  };

  const buttons = [
    { button: '1', type: 'number', style: '', click: addInput },
    { button: '2', type: 'number', style: '', click: addInput },
    { button: '3', type: 'number', style: '', click: addInput },
    { button: '4', type: 'number', style: '', click: addInput },
    { button: '5', type: 'number', style: '', click: addInput },
    { button: '6', type: 'number', style: '', click: addInput },
    { button: '7', type: 'number', style: '', click: addInput },
    { button: '8', type: 'number', style: '', click: addInput },
    { button: '9', type: 'number', style: '', click: addInput },
    { button: '0', type: 'number', style: '', click: addInput },
    { button: '.', type: 'operator', style: '', click: addDecimal },
    { button: '+', type: 'operator', style: '', click: addition },
    { button: '-', type: 'operator', style: '', click: subtraction },
    { button: 'x', type: 'operator', style: '', click: multiplication },
    { button: '/', type: 'operator', style: '', click: division },
    { button: '=', type: 'operator', style: '', click: calculate },
    { button: 'DEL', type: 'operator', style: ' double-size', click: del },
    { button: 'RESET', type: 'operator', style: ' double-size', click: reset },
  ];

  return (
    <StateContext.Provider value={{ theme, input, calculations, result, buttons, themeButtonHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);