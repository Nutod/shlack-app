import { css } from 'styled-components'

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

    --gray-100: #f9fafb;
    --gray-200: #f3f4f6;
    --gray-800: #29323e;

    --backgroundColor: var(--color-white);
    --headingColor: var(--color-black);
    --textColor: var(--color-black-glare);
    --footerBackground: var(--gray-100);
    --footerBorder: var(--gray-200);

    --font-display: 'Lato', sans-serif;
    --font-body: 'Open Sans', sans-serif;

    --elevation-one: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --elevation-two: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --elevation-three: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --elevation-four: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`
