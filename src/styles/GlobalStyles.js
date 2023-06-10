import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Backgrounds */
    --color-bg-main: ${({ theme }) => theme.bgMain};
    --color-bg-toggle: ${({ theme }) => theme.bgToggle};
    --color-bg-keypad: ${({ theme }) => theme.bgKeypad};
    --color-bg-screen: ${({ theme }) => theme.bgScreen};
    /* Keys */
    --color-keys-bg1: ${({ theme }) => theme.keysBg1};
    --color-keys-shadow1: ${({ theme }) => theme.keysShadow1};
    --color-keys-hover1: ${({ theme }) => theme.keysHover1};
    --color-keys-bg2: ${({ theme }) => theme.keysBg2};
    --color-keys-shadow2: ${({ theme }) => theme.keysShadow2};
    --color-keys-hover2: ${({ theme }) => theme.keysHover2};
    --color-keys-bg3: ${({ theme }) => theme.keysBg3};
    --color-keys-shadow3: ${({ theme }) => theme.keysShadow3};
    --color-keys-hover3: ${({ theme }) => theme.keysHover3};
    --color-keys-toggle: ${({ theme }) => theme.keysToggle};
    /* Text */
    --color-text-header: ${({ theme }) => theme.textHeader};
    --color-text-keys: ${({ theme }) => theme.textKeys};
    --color-text-edit: ${({ theme }) => theme.textEdit};
    --color-text-submit: ${({ theme }) => theme.textSubmit};
    /* Typography */
    --font-size: 32px;
    --font: 'League Spartan', sans-serif;;
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
    background-color: var(--color-bg-main);
    color: var(--color-text-header);
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

