import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardRegularWoff2 from "../font/Pretendard-Regular.subset.woff2";
import PretendardRegularWoff from "../font/Pretendard-Regular.subset.woff";
import PretendardMediumWoff2 from "../font/Pretendard-Medium.subset.woff2";
import PretendardMediumWoff from "../font/Pretendard-Medium.subset.woff";
import PretendardSemiBoldWoff2 from "../font/Pretendard-SemiBold.subset.woff2";
import PretendardSemiBoldWoff from "../font/Pretendard-SemiBold.subset.woff";
import PretendardBoldWoff2 from "../font/Pretendard-Bold.subset.woff2";
import PretendardBoldWoff from "../font/Pretendard-Bold.subset.woff";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: local('Pretendard')
      url(${PretendardRegularWoff2}) format("woff2"), 
      url(${PretendardRegularWoff}) format("woff"); 
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    src: local('Pretendard')
      url(${PretendardMediumWoff2}) format("woff2"), 
      url(${PretendardMediumWoff}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: local('Pretendard')
      url(${PretendardSemiBoldWoff2}) format("woff2"), 
      url(${PretendardSemiBoldWoff}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: local('Pretendard')
      url(${PretendardBoldWoff2}) format("woff2"), 
      url(${PretendardBoldWoff}) format("woff"); 
    font-display: swap;
  }

  :root {
    min-width: 1000px;
    overflow-y: scroll;
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
