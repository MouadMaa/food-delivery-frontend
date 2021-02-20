import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }

  header, footer {
    max-width: 1920px;
    margin: 0 auto;
  }

  main > * {
    max-width: 1536px;
    margin: 0 auto;
  }

  /* Back Drop Blur */
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .backdrop-blur {
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    }
  }

  /* NProgress */
  #nprogress > div.bar {
    background-color: #ED5359;
  }
  #nprogress > div.spinner > div {
    border-top-color: #ED5359;
    border-left-color: #ED5359;
  }

`

export default GlobalStyles
