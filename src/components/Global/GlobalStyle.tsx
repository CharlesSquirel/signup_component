import { createGlobalStyle } from "styled-components";
import bgDesktop from "../../assets/bg-intro-desktop.png";
import bgMobile from "../../assets/bg-intro-mobile.png";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #fff;
    --black: #000;
    --pink: #FF7979;
    --green: #38CC8B;
    --green-hover: #77e2b3;
    --violet: #5E54A4;
    --gray: #3D3B48;
    --input-border: #dedede;
    --terms-color: #BAB7D4;
    --regular: 500;
    --semiBold: 600;
    --bold: 700;
    --mobile-max: 870px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    font-weight: var(--regular);
    font-size: 16px;
    line-height: 26px;
    color: var(--white);
    background: var(--pink) url(${bgDesktop}) no-repeat;
    @media (max-width: 870px) {
        background: var(--pink) url(${bgMobile}) no-repeat center;
        background-size: cover;
  }
}

label {
position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

input, button {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;
}

`;
