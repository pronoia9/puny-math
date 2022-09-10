import React from 'react';
import './Header.scss';

import { useStateContext } from '../contexts/StateContext';

export default function Heade() {
  const { theme, themeButtonHandler } = useStateContext();

  return (
    <header className='header'>
      <h1>calc</h1>
      <fieldset className='theme-control'>
        <legend className='theme-header'>theme</legend>
        <div className='theme dark-scheme'>
          <input
            type='radio'
            name='theme'
            id='dark-theme'
            value='dark'
            checked={theme === 'dark'}
            onChange={(event) => themeButtonHandler(event)}
          />
          <label className='label' htmlFor='dark-theme'>1</label>
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
          <label className='label' htmlFor='light-theme'>2</label>
        </div>
        <div className='theme retro-scheme'>
          <input
            type='radio'
            name='theme'
            id='retro-theme'
            value='retro'
            checked={theme === 'retro'}
            onChange={(event) => themeButtonHandler(event)}
          />
          <label className='label' htmlFor='retro-theme'>3</label>
        </div>
      </fieldset>
    </header>
  );
}