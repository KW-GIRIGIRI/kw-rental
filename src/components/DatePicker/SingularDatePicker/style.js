import styled from "styled-components";

export const DateCont = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.circle};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  box-sizing: border-box;
  width: 128px;
  & > span {
    pointer-events: none;
    font-size: 13px;
  }
  & > img {
    width: 14px;
    pointer-events: none;
    margin: 0 9px 3px 0;
  }
`;
