import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-gray.svg"

export const Div = styled.div`
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  font-size: 12px;
  & :first-child {
    color: ${(props) => props.theme.color.primary.main};
  }
`;

export const SelectCount = styled.select`
  width: 92px;
  text-align: center;
  padding: 3px;
  border: 1px solid #000000;
  font-size: 12px;
  border-radius: 5px;
  background: url(${iconDownArrow}) no-repeat 95% 50%;
  -webkit-appearance: none;
  -moz-appearance: none; 
  appearance: none; 
`;

export const DateCont = styled.label`
  position: relative;
  border: 1px solid #000000;
  font-size: 14px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  line-height: normal;
  padding: 4px 0;
  width: 97px;
  font-size: 12px;
  text-align: center;

  & > span {
    pointer-events: none;
  }
`;

export const DateImg = styled.img`
  width: 13px;
  vertical-align: text-top;
  pointer-events: none;
  margin-right: 5px;
`;
