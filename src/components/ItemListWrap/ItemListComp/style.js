import styled from "styled-components";

export const ItemWrap = styled.div`
  width: 244px;
  background-color: ${(props) => props.theme.color.text.white};
  box-sizing: border-box;
  padding: 15px 19px 10px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ItemId = styled.p`
  font-size: 15px;
`;

export const InputId = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: ${(props) => props.theme.color.primary.third} 1px solid;
  margin-top: 8px;
  padding: 5px;
  font-size: 12px;
  clear: both;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.color.gray.g3};
  }

  &:disabled {
    font-size: 13px;
    background-color: inherit;
    padding: 5px 0;
    border: none;
  }
`;

export const DelBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
`;

export const MinusImg = styled.img``;
