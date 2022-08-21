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
      setCalculations(`${calculations.length ? ' ' : ''}${input}${btn !== '=' ? ' ' + btn : ''}`);
      if (result.length) {
        btn === '=' && console.log(calculations.charAt(calculations.length - 2));
        // set/calculate result
        if (btn === '+' || (btn === '=' && calculations.charAt(calculations.length - 2)))
          setResult(addition());
        else if (btn === '-' || (btn === '=' && calculations.charAt(calculations.length - 2)))
          setResult(subtraction());
        else if (btn === '*' || (btn === '=' && calculations.charAt(calculations.length - 2)))
          setResult(multiplication());
        else if (btn === '/' || (btn === '=' && calculations.charAt(calculations.length - 2)))
          setResult(division());
      } else setResult(input);
      if (btn === '=') {
        setInput(result || input);
        setShowResult(true);
      } else {
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
    { button: '7', type: 'number', style: '', click: addInput },
    { button: '8', type: 'number', style: '', click: addInput },
    { button: '9', type: 'number', style: '', click: addInput },
    { button: 'DEL', type: 'operator', style: '', click: del },
    { button: '4', type: 'number', style: '', click: addInput },
    { button: '5', type: 'number', style: '', click: addInput },
    { button: '6', type: 'number', style: '', click: addInput },
    { button: '+', type: 'operator', style: '', click: calculate },
    { button: '1', type: 'number', style: '', click: addInput },
    { button: '2', type: 'number', style: '', click: addInput },
    { button: '3', type: 'number', style: '', click: addInput },
    { button: '-', type: 'operator', style: '', click: calculate },
    { button: '.', type: 'operator', style: '', click: addDecimal },
    { button: '0', type: 'number', style: '', click: addInput },
    { button: '/', type: 'operator', style: '', click: calculate },
    { button: 'x', type: 'operator', style: '', click: calculate },
    { button: 'RESET', type: 'operator', style: ' double-size', click: reset },
    { button: '=', type: 'operator', style: ' double-size', click: calculate },
  ];

  return (
    <StateContext.Provider value={{ theme, input, calculations, result, buttons, showResult, themeButtonHandler }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
