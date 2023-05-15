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

export const ImgLogo = styled.img`
  margin-bottom: 5px;
`;

export const Desc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color.primary.main};
  font-weight: 600;
`;
