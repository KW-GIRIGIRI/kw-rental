import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.color.text.white};
  box-sizing: border-box;
  padding: 16px 13px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
      outline: 1px solid ${(props) => props.theme.color.primary.main};
      outline-offset: -1px;
  }
`

export const ItemWrapEdit = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.color.text.white};
  box-sizing: border-box;
  padding: 16px 13px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
`

export const ItemId = styled.p`
  font-size: 15px;
`

export const ItemNum = styled.p`
  font-size: 13px;
  margin-top: 12px;
`