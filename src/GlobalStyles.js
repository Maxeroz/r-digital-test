import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Le Murmure';
    src: url('./fonts/LeMurmure-Regular.woff2') format('woff2'),
         url('./fonts/LeMurmure-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Floreste';
    src: url('/assets/fonts/FloresteWavy.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }


  :root {
    --color-primary-bg: #AE97E8;
    --color-secondary-bg: #a96dff;
    --color-slider-pink-bg: #FA8FEF;
    --color-slider-blue-bg: #AECFFF;
    --color-text-primary: #ffffff;
    --color-text-secondary: #c4c4ff;
    --color-button-bg: yellow;
    --color-accent-text:#D9FF5A;
    --color-decoration-bg: #CBB6FF;

    --border-radius-lg: 50px;

    --font-large: 36px;
    --font-medium: 24px;
    --font-small: 18px;

    --spacing-small: 10px;
    --spacing-medium: 20px;
    --spacing-large: 50px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Euclid Circular A', sans-serif;
    background-color: var(--color-primary-bg);
    color: var(--color-text-primary);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .content {
    display: flex;
    flex: 1;
  }
`;

export default GlobalStyle;
