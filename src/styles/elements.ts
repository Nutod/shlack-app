import { css } from 'styled-components';

export const ELEMENTS = css`
  button {
    all: unset;
    color: var(--btn-clr, var(--textColor));
    background: var(--btn-bg-clr, var(--color-primary));
    border: none;
    border-radius: 2px;
    padding: 9px 30px;
    cursor: pointer;
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

  input[type='text'],
  input[type='email'],
  input[type='url'],
  input[type='password'],
  input[type='number'],
  textarea,
  select {
    width: 100%;

    border: 2px solid var(--gray-300);
    border-radius: 4px;
    padding: 5px 8px;

    transition: all 0.2s;

    &:focus {
      outline: none;
      border: 2px solid var(--color-primary);
      box-shadow: 0px 0px 0px 3.5px var(--color-primary-glare);
    }
  }
`;
