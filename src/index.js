import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './contexts/StateContext';
import './index.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);