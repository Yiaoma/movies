import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    #root {
        height: 200vh;
    }
`;