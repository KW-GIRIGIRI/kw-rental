import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    // 후에 반응형 적용 시, 수정
    min-width: 1000px;
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }

  a {
    text-decoration: none;
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
