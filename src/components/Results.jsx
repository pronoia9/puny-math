import React from 'react';
import './Results.scss';

import { useStateContext } from '../contexts/StateContext';

export default function Results() {
  const { theme, input, calculations } = useStateContext();

  return (
    <div className='display border-radius'>
      <div className='secondDisplay' aria-live='polite'>{calculations}</div>
      <div className='current' aria-live='polite'>{input || 0}</div>
    </div>
  );
}