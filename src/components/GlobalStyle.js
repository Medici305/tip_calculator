import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Space Mono';
        background: hsl(185, 41%, 84%);
    }

    h2 {
        text-transform: uppercase;
        letter-spacing: .75rem;
    }

    h4 {
        color: gray;
        margin-left: .5rem;
    }

      button {
        margin: 0.3rem;
        width: 8rem;
        border: none;
        color: #fff;
        font-family: "space mono";
        font-weight: 700;
        border-radius: 0.4rem;
        background: hsl(183, 100%, 15%);
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        &:hover {
            color: hsl(183, 100%, 15%);
            background: hsl(172, 67%, 45%);
        }
    }

`;

export default GlobalStyle;
