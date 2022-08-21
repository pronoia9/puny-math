import React from 'react';

import { useStateContext } from '../contexts/StateContext';

export default function Heade() {
  const { theme, themeButtonHandler } = useStateContext();

  return (
    <header className='header'>
      <h1>calc</h1>
      <fieldset className='theme-control'>
        <legend className='theme-header'>theme</legend>
        <div className='theme neutral-scheme'>
          <input
            type='radio'
            name='theme'
            id='neutral-theme'
            value='neutral'
            checked={theme === 'neutral'}
            onChange={(event) => themeButtonHandler(event)}
          />
          <label className='label' for='neutral-theme'>1</label>
        </div>
        <div className='theme light-scheme'>
          <input
            type='radio'
            name='theme'
            id='light-theme'
            value='light'
            checked={theme === 'light'}
            onChange={(event) => themeButtonHandler(event)}
          />
          <label className='label' for='light-theme'>2</label>
        </div>
        <div className='theme dark-scheme'>
          <input
            type='radio'
            name='theme'
            id='dark-theme'
            value='dark'
            checked={theme === 'dark'}
            onChange={(event) => themeButtonHandler(event)}
          />
          <label className='label' for='dark-theme'>3</label>
        </div>
      </fieldset>
    </header>
  );
}