import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-bg: #AE97E8;
    --color-secondary-bg: #a96dff;
    --color-accent-bg: #ff69b4;
    --color-text-primary: #ffffff;
    --color-text-secondary: #c4c4ff;
    --color-button-bg: yellow;

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
    font-family: 'Arial', sans-serif;
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
