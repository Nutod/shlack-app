import { createGlobalStyle } from 'styled-components'
import { RESET } from './reset'
import { ELEMENTS } from './elements'
import { CRITICAL } from './critical'
import { TYPOGRAPHY } from './typography'

export const GlobalStyles = createGlobalStyle`
  ${'' /* Reset all CSS styles to make things more consistent */}
  ${RESET}

  ${'' /* Mostly global variables here */}
  ${CRITICAL}

  ${ELEMENTS}

  ${TYPOGRAPHY}

  body {
    font-family: var(--font-body);
  }
`
