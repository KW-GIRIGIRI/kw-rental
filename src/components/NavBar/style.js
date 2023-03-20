import styled from "styled-components";

export const NavWrap = styled.nav`
  max-width: 269px;
  height: 100%;
  padding: 80px 60px;
  border-radius: 0px 20px 20px 0px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.text.white};
  position: fixed;
  z-index: 10;
`;

export const LogoImg = styled.img`
  width: 117px;
  margin-bottom: 6.8rem;
`;

export const NavLi = styled.li`
  display: flex;
  align-items: center;
  height: 68px;
  & > img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  & > p {
    font-size: 18px;
  }
`;

