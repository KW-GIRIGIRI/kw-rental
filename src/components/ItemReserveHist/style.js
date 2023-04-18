import styled from "styled-components";

export const DateCont = styled.label`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.text.black};
  color: ${(props) => props.theme.color.text.black};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  padding: 5px;
  display: inline-block;
  margin-bottom: 14px;

  & > span {
    margin-right: 4px;
    font-size: 14px;
  }

  & > img {
    width: 16px;
    vertical-align: top;
    margin-right: 7px;
  }

  &:first-of-type {
    margin-right: 13px;
  }

  &:last-of-type {
    margin-left: 13px;
  }
`;
