import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  background-color: #fcfcfc;
  width: 100vw;
  min-width: 460px;
  height: 100vh;
`;

export const LogoImg = styled.picture`
  & > source,
  img {
    width: 160px;
    margin: 96px 0 37px;
    margin-bottom: 37px;
  }
`;
