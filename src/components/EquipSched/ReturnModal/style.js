import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-black.svg";
import iconCheck from "../../../assets/icon-check-white.svg";
import iconExclamation from "../../../assets/icon-exclamation.svg";

export const ProductUl = styled.ul`
  margin-bottom: 26px;
`

export const ProductLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  padding: 7px 0;
  text-align: center;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  margin-top: -1px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: normal;

  &:first-of-type {
    background-color: ${(props) => props.theme.color.primary.sub};
  }

  & :nth-child(2),
  & :nth-child(3) {
    position: relative;
    &::before {
      content: "";
      background-color: ${(props) => props.theme.color.primary.sub};
      width: 1px;
      height: 30px;
      position: absolute;
      left: 0;
      bottom: -8px;
    }
  }

  & :nth-child(2)::before {
    left: 5px;
  }
`;

export const CheckInp = styled.input`
  appearance: none;
  width: 13px;
  height: 13px;
  margin: 0 auto;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  background: ${(props) => props.theme.color.primary.main} url(${iconCheck}) no-repeat center / 70%;

  &.checked {
    background: #ad1414 url(${iconExclamation}) no-repeat 50%;
  }
`;

export const StateDiv = styled.section`
  display: grid;
  font-size: 12px;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;
  & > span {
    padding: 5px 0;
    width: max-content;
  }
`;

export const StateLi = styled.li`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;

  &:last-child {
    margin-bottom: 36px;
  }

  & > p {
    min-width: 95px;
    text-align: left;
  }
`;

export const Select = styled.select`
  font-size: 12px;
  padding: 3px 16px 3px 6px;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.text.black};
  appearance: none;
  background: url(${iconDownArrow}) no-repeat 95% 50%;
  border-radius: 3px;
`;
