import styled from "styled-components";

export const NavWrap = styled.nav`
  background-color: ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.text.white};
  font-size: 1rem;
  font-weight: 500;
`;

export const NavUl = styled.ul`
  display: flex;
  width: 880px;
  margin: 0 auto;
  padding: 16px 0;
  gap: 50px;
`;

export const NavLi = styled.li`
  cursor: pointer;
  &.on {
    color: ${(props) => props.theme.color.primary.accent};
  }
  &.off {
    color: ${(props) => props.theme.color.text.white};
  }
`;
