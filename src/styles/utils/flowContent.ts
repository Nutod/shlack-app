import { css } from 'styled-components';

export const flowContent = css`
  & > * + * {
    margin-top: var(--content-space, var(--space-200));
  }
`;
