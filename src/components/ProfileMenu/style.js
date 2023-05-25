import styled from "styled-components";

export const Wrap = styled.ul`
  top: 30px;
  right: 0;
  position: absolute;
  z-index: 99;
  width: 250px;
  background-color: ${(props) => props.theme.color.text.white};
  color: ${(props) => props.theme.color.primary.main};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  box-sizing: border-box;
`;

export const Li = styled.li`
  cursor: pointer;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
  &:hover {
    background-color: ${(props) => props.theme.color.primary.sub};
  }

  & > img {
    width: 22px;
    height: 21px;
    object-fit: cover;
    object-position: 1px;
  }

  &:nth-child(2) > img {
    object-position: -21px;
  }

  &:nth-child(3) > img {
    object-position: -43.5px;
  }

  &:nth-child(4) > img {
    object-position: -67px;
  }
`;
