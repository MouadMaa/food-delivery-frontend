import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  /* Modal */
  .modal {
    background: rgba(0, 0, 0, 0.1);
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .modal {
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
  }

`

export default GlobalStyles
