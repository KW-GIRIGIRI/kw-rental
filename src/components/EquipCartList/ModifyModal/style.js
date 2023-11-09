import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-gray.svg";

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
  outline: none;
  margin-bottom: 26px;
`;
