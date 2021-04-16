import { css } from 'styled-components';

export const TYPOGRAPHY = css`
  /* This should not go into production */
  @import url('https://fonts.googleapis.com/css?family=Roboto:400|Carrois+Gothic:400');

  html {
    font-size: 100%;
  } /*16px*/

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: var(--font-display);
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 1.802rem;
  }

  h2 {
    font-size: 1.602rem;
  }

  h3 {
    font-size: 1.424rem;
  }

  h4 {
    font-size: 1.266rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  small,
  .text_small {
    font-size: 0.833rem;
  }
`;
