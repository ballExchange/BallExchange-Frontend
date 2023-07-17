import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: #403060;
    background-image: radial-gradient( circle, rgba(  0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0.8 ) 100% );
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;


::-webkit-scrollbar {
  width: 2px;
  boder-radius:0;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
