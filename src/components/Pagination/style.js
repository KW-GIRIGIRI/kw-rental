import styled from "styled-components";

export const PageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  & > button {
    color: ${(props) => props.theme.color.primary.main};
    border: 1px solid ${(props) => props.theme.color.primary.sub};
    width: 40px;
    height: 40px;
    margin-right: -1px;
    cursor: pointer;
    & > img {
      vertical-align: middle;
    }
    &:first-of-type {
      border-radius: 0 5px 5px 0;
      transform: rotate(180deg);
    }
    &:last-of-type {
      border-radius: 0 5px 5px 0;
    }
    &.on {
      background-color: ${(props) => props.theme.color.primary.main};
      color: ${(props) => props.theme.color.text.white};
      transform: revert;
    }
  }
`;