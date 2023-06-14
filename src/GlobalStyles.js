import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    body {
        max-width: 980px;
        width: 100%;
        margin: 0 auto;
    }
`

export default GlobalStyles