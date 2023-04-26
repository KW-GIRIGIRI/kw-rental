import styled from "styled-components";
import iconDownArrow from "../../../assets/icon-downArrow-gray.svg";

export const RentalLi = styled.li`
  flex-grow: 1;
  padding: 24px 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  border-left: 1px solid ${(props) => props.theme.color.primary.sub};
  display: flex;
  align-items: center;

  & img {
    margin-left: 30px;
    width: 65px;
    height: 65px;
    border: black 1px solid;
  }

  & div:nth-child(2) {
    width: 40px;
    margin-left: 45px;
    width: 174px;
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
    width: 28px;
    font-size: 14px;
    text-align: center;
  }

  & select {
    box-sizing: border-box;
    outline: none;
    padding: 3px 20px 3px 9px;
    margin-left: 50px;
    width: 165px;
    height: 20px;
    font-size: 12px;
    border-radius: ${(props) => props.theme.borderRadius.lv1};
    border: 1px solid ${(props) => props.theme.color.gray.g3};
    background: url(${iconDownArrow}) 95% 50% no-repeat;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  & Button {
    box-sizing: border-box;
    margin-left: 45px;
  }
`;

export const NumWrap = styled.div`
  margin-left: 50px;
  width: 165px;
  text-align: center;
  font-size: 12px;

  & p {
    margin-bottom: 11px;
  }

  & p:last-child {
    margin-bottom: 0;
  }
`;
