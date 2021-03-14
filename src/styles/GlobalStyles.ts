import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  header, footer {
    max-width: 1920px;
    margin: 0 auto;
  }

  main > * {
    max-width: 1536px;
    margin: 0 auto;
  }

  /* Scroll Bar */
  * {
    scrollbar-width: thin;
    scrollbar-color: #F5F5F5 #ED5359;
  }
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 10px;
  }
  ::-webkit-scrollbar
  {
    width: 7px;
    height: 7px;
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    background-color: #ED5359;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #DF494E;
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
