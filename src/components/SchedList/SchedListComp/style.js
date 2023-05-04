import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-gray.svg";

export const RentalLi = styled.li`
  flex-grow: 1;
  padding: 7px 60px 7px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  border-left: 1px solid ${(props) => props.theme.color.primary.sub};
  display: grid;
  grid-template-columns: 1fr 2fr 0.3fr 2fr 1fr;
  gap: 45px;
  align-items: center;

  & img {
    width: 65px;
    height: 65px;
    border-radius: ${(props) => props.theme.borderRadius.lv1};
  }

  & div:nth-child(2) {
    font-size: 14px;
    text-align: left;

    & p:first-child {
      color: ${(props) => props.theme.color.primary.main};
    }

    & p:last-child {
      margin-top: 5px;
    }
  }

  & span {
    font-size: 14px;
    text-align: center;
  }

  & select {
    box-sizing: border-box;
    outline: none;
    padding: 3px 20px 3px 9px;
    width: 170px;
    height: 20px;
    font-size: 12px;
    border-radius: ${(props) => props.theme.borderRadius.lv1};
    border: 1px solid ${(props) => props.theme.color.gray.g3};
    background: url(${iconDownArrow}) 95% 50% no-repeat;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const NumWrap = styled.div`
  width: 170px;
  text-align: center;
  font-size: 12px;

  & p {
    margin-bottom: 11px;
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;
