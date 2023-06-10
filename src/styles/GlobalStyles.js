import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    --font-size: 32px;
  }
  
  // Set core root defaults
  html:focus-within {
    scroll-behavior: smooth;
  }

  // Set core body defaults
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: var(--font);
    color: var(--color-text-header);
    background-color: var(--color-bg-main);
    transition: all 0.5s ease-in-out;
  }

  // Remove default margin
  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
  }

  // Box sizing rules
  *, *::before, *::after {
    box-sizing: border-box;
  }

  // Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  // A elements that dont have a class get default styles
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  // Make images easier to work with
  img, picture {
    max-width: 100%;
    display: block;
  }

  // Inherit fonts for inputs and buttons
  input, button, textarea, select {
    font: inherit;
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
