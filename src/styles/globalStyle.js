import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    min-width: 1000px;
    overflow-y: scroll;
  }

  html, body, p, span, button, a, li, select {
    font-family: 'Pretendard'; 
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }

  input {
    outline: none;
  }

  .ir {
      width: 1px;
      height: 1px;
      margin: -1px;
      position: absolute;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
    }
`;
