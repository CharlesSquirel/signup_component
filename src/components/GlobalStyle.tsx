import { createGlobalStyle } from "styled-components";
import bgDesktop from "../assets/bg-intro-desktop.png";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --black: #000;
    --pink: #FF7979;
    --green: #38CC8B;
    --violet: #5E54A4;
    --gray: #3D3B48;
    --regular: 500;
    --semiBold: 600;
    --bold: 700;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    background: var(--pink) url(${bgDesktop}) no-repeat;
}

`;
