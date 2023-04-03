import styled from "styled-components";

export const Div = styled.div`
  & > .hover:hover {
    outline: 1px solid ${(props) => props.theme.color.primary.main};
    outline-offset: -1px;
  }
`

export const ItemWrap = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.color.text.white};
  box-sizing: border-box;
  padding: 16px 13px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`

export const ItemId = styled.p`
  font-size: 15px;
`

export const ItemNum = styled.p`
  font-size: 13px;
  margin-top: 12px;
`

export const InputId = styled.input`
  box-sizing: border-box;
  width: 179px;
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

export const DelBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
`

export const MinusImg = styled.img`
  
`