import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'League Spartan';
    src: url('/fonts/LeagueSpartan-VariableFont_wght.ttf');
  }

  :root {
    /* Backgrounds */
    --color-bg-main: ${({ theme }) => theme.bgMain};
    --color-bg-screen: ${({ theme }) => theme.bgScreen};
    --color-bg-keypad: ${({ theme }) => theme.bgKeypad}; /* +switch/toggle bg */
    /* Keys */
    --color-key1-bg: ${({ theme }) => theme.key1Bg};
    --color-key1-hover: ${({ theme }) => theme.key1Hover};
    --color-key1-shadow: ${({ theme }) => theme.key1Shadow};
    --color-key2-bg: ${({ theme }) => theme.key2Bg};
    --color-key2-hover: ${({ theme }) => theme.key2Hover};
    --color-key2-shadow: ${({ theme }) => theme.key2Shadow};
    --color-key3-bg: ${({ theme }) => theme.key3Bg};
    --color-key3-hover: ${({ theme }) => theme.key3Hover};
    --color-key3-shadow: ${({ theme }) => theme.key3Shadow};
    /* Text */
    --color-text-header: ${({ theme }) => theme.textHeader};
    --color-text-keys: ${({ theme }) => theme.textKeys};
    --color-text-keys-text: ${({ theme }) => theme.textKeysText};
    --color-text-keys-submit: ${({ theme }) => theme.textKeysSubmit};
    /* Typography */
    --font: 'League Spartan', sans-serif;
    --font-size: 2rem;
    --font-weight: 700;
  }
  

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  // Set core root defaults
  html:focus-within {
    scroll-behavior: smooth;
  }

  // Set core body defaults
  body {
    width: 100%;
    height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: var(--font);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    background-color: var(--color-bg-main);
    transition: background-color 0.5s ease-in-out;
  }

  // Box sizing rules
  *, *::before, *::after {
    box-sizing: border-box;
  }

  // Remove Scroll
  *::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  // Remove all animations, transitions and smooth scroll for people that prefer not to see them
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
