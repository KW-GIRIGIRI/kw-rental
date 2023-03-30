import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 65px auto 15px;
  width: 880px;
`;

export const ImgLogo = styled.img`
  margin-bottom: 5px;
`;

export const Desc = styled.p`
  margin-left: -68%;
  font-size: 1rem;
  color: ${props => props.theme.color.primary.main};
  font-weight: 600;
`