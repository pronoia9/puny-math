import React from 'react';

import { useStateContext } from '../contexts/StateContext';

export default function Results() {
  const { theme, input, calculations } = useStateContext();

  return (
    <div className={`display border-radius ${theme}-colors`}>
      <div className='secondDisplay' aria-live='polite'>{calculations}</div>
      <div className='current' aria-live='polite'><span style={{opacity: 0}}>calc </span>{input || 0}</div>
    </div>
  );
}