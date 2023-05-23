import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 65px auto 15px;
  position: relative;
  width: 880px;

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ImgLogo = styled.picture`
  margin-bottom: 5px;

  & > img,
  source {
    width: 133px;
  }
`;
