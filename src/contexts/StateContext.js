import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const themeButtonHandler = (event) => {
    setTheme(event.target.value);
  };

  return <StateContext.Provider value={{ theme, setTheme, themeButtonHandler }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);