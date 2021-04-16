import { css } from 'styled-components'

export const ELEMENTS = css`
  button {
    all: unset;
    color: var(--btn-clr, var(--textColor));
    background: var(--btn-bg-clr, var(--color-primary));
    border: none;
    border-radius: 2px;
    padding: 9px 30px;
    cursor: pointer;
    margin: 1rem 0;
    transition: all 0.2s;

    &:hover {
      box-shadow: var(--elevation-three);
    }

    &:focus {
      box-shadow: 0px 0px 0px 1px hsl(171deg 90% 13% / 30%),
        0px 0px 0px 5px hsl(171deg 100% 68% / 40%);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .bg-green {
    --btn-bg-clr: green;
    --btn-clr: white;
  }

  .bg-pink {
    --btn-bg-clr: pink;
    --btn-clr: white;
  }

  a {
    text-decoration: none;
    color: var(--textColor);
    border-bottom: 2px solid var(--color-primary);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.6;
      color: var(--color-primary);
    }

    &:focus {
      outline: 2.5px dotted var(--color-secondary);
    }
  }
`
