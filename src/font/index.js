import { createGlobalStyle } from "styled-components";
import PretendardRegularWoff2 from "./Pretendard-Regular.subset.woff2";
import PretendardRegularWoff from "./Pretendard-Regular.subset.woff";
import PretendardMediumWoff2 from "./Pretendard-Medium.subset.woff2";
import PretendardMediumWoff from "./Pretendard-Medium.subset.woff";
import PretendardSemiBoldWoff2 from "./Pretendard-SemiBold.subset.woff2";
import PretendardSemiBoldWoff from "./Pretendard-SemiBold.subset.woff";
import PretendardBoldWoff2 from "./Pretendard-Bold.subset.woff2";
import PretendardBoldWoff from "./Pretendard-Bold.subset.woff";

export default createGlobalStyle`
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
`;
