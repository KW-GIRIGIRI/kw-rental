import styled from "styled-components";

export const NavWrap = styled.nav`
  width: 269px;
  height: 100vh;
  /* min-height: 800px; */
  padding: 80px 0;
  border-radius: 0px 20px 20px 0px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.text.white};
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 117px;
`;

export const NavUl = styled.ul`
  margin-top: -220px;
  width: 100%;
`;

export const NavLi = styled.li`
  display: flex;
  align-items: center;
  height: 68px;
  & > img {
    position: absolute;
    left: 60px;
    width: 25px;
    height: 25px;
  }
  & > p {
    position: absolute;
    left: 100px;
    font-size: 18px;
  }
`;

export const LogoutWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;
