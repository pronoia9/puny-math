import React from 'react';

import { useStateContext } from '../contexts/StateContext';

export default function Calculation() {
  const { theme, input, calculations } = useStateContext();

  return (
    <div className={`display border-radius ${theme}-colors`}>
      <div className='secondDisplay' aria-live='polite'>{calculations}</div>
      <div className='current' aria-live='polite'>
        {input}
      </div>
    </div>
  );
}