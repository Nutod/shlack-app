import { css } from 'styled-components';

export const CRITICAL = css`
  :root {
    --color-primary: #00ebc7;
    --color-primary-glare: #5cffe7;
    --color-white: #fffffe;
    --color-secondary: #ff5470;
    --color-tertiary: #fde24f;
    --color-tertiary-glare: #feef9a;
    --color-black: #00214d;
    --color-black-glare: #1b2d45;
    --color-black-shade: #1e3047;

    --gray-100: hsl(210, 20%, 98%);
    --gray-200: hsl(210, 20%, 88%);
    --gray-300: hsl(210, 20%, 78%);
    --gray-400: hsl(210, 20%, 68%);
    --gray-500: hsl(210, 20%, 58%);
    --gray-600: hsl(210, 20%, 48%);
    --gray-700: hsl(210, 20%, 38%);
    --gray-800: hsl(210, 20%, 28%);

    --font-display: 'Carrois Gothic', sans-serif;
    --font-body: 'Roboto', sans-serif;

    --space: 1rem;

    --space-100: 0.75rem;
    --space-200: 1rem;
    --space-300: 1.33rem;
    --space-400: 1.77rem;
    --space-500: 2.36rem;
    --space-600: 3.15rem;
    --space-700: 4.2rem;
    --space-800: 5.6rem;

    --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --elevation-three: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --elevation-four: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
