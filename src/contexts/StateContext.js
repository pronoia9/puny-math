import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [input, setInput] = useState('0');
  const [calculations, setCalculations] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  const themeButtonHandler = (event) => {
    setTheme(event.target.value);
  };

  const addInput = (num) => {
    if (showResult) {
      setShowResult(false);
      setInput(`${parseFloat(num)}`);
    } else setInput(`${parseFloat(input + num)}`);
  };

  const addDecimal = () => {
    if (!showResult) setInput(`${parseFloat(input)}${!input.includes('.') ? '.' : ''}`);
  };

  const addition = () => `${parseFloat(result) + parseFloat(input)}`;
  const subtraction = () => `${parseFloat(result) - parseFloat(input)}`;
  const multiplication = () => `${parseFloat(result) * parseFloat(input)}`;
  const division = () => `${parseFloat(result) / parseFloat(input)}`;

  const calculate = (btn) => {
    if (input.length) {
      if (btn === '=') {
        setInput(result || input);
        setShowResult(true);
      } else {
        setCalculations(`${calculations}${input} ${btn} `);
        if (result.length) {
          // set/calculate result
          if (btn === '+') setResult(addition());
          else if (btn === '-') setResult(subtraction());
          else if (btn === '*') setResult(multiplication());
          else if (btn === '/') setResult(division());
        } else setResult(input);
        // clear input
        setInput('');
      }
    }
  };

  const reset = () => {
    setInput('0');
    setCalculations('');
    setResult('');
  };

  const del = () => {
    if (input.length > 0) setInput(input.slice(0, input.length - 1));
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
    { button: '+', type: 'operator', style: '', click: calculate },
    { button: '-', type: 'operator', style: '', click: calculate },
    { button: 'x', type: 'operator', style: '', click: calculate },
    { button: '/', type: 'operator', style: '', click: calculate },
    { button: '=', type: 'operator', style: '', click: calculate },
    { button: 'DEL', type: 'operator', style: ' double-size', click: del },
    { button: 'RESET', type: 'operator', style: ' double-size', click: reset },
  ];

  return (
    <StateContext.Provider value={{ theme, input, calculations, result, buttons, showResult, themeButtonHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
