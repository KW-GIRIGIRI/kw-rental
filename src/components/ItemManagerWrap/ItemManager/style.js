import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.color.text.white};
  box-sizing: border-box;
  padding: 16px 13px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const p = styled.p`
  font-size: 15px;
  float: left;
`

export const InputId = styled.input`
  box-sizing: border-box;
  width: 215px;
  height: 24px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: ${(props) => props.theme.color.primary.third} 1px solid;
  margin-top: 8px;
  padding: 0 10px;
  font-size: 12px;
  &::placeholder {
    color: ${(props) => props.theme.color.gray.g3};
  }
  clear: both;
`