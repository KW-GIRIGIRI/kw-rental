import styled from "styled-components";
import iconDownArrow from "../../assets/icon-downArrow-gray.svg";

export const SchedTitle = styled.h1`
  margin-top: 30px;
  font-weight: 600;
  font-size: 18px;
`

export const SchedWrap = styled.ul`
  margin-top: 36px;
  width: 100%;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.text.white};
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
`

export const Header = styled.ul`
  padding: 0 20px;
  height: 54px;
  background: ${(props) => props.theme.color.primary.sub};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;

  & span {
    font-weight: 600;
    font-size: 15px;
    position: absolute;
  }

  & span:first-child {
    left: 37px;
  }

  & span:nth-child(2) {
    left: 155px;
  }

  & span:nth-child(3) {
    left: 428px;
  }

  & span:last-child {
    left: 552px;
  }
`

export const SchedLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Rental = styled.div`
  display: flex;
  flex-direction: row;
`

export const Renter = styled.div`
  padding: 18px 0;
  text-align: center;
  width: 112px;
  flex-grow: 1;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & p {
    font-size: 12px;
  }

  & p:first-child {
    font-weight: 600;
    font-size: 15px;
  }

  & p:nth-child(2) {
    margin-top: 7px;
    color: ${(props) => props.theme.color.primary.main};
  }

  & p:nth-child(3) {
    margin-top: 7px;
    color: #E20F0F;
  }

  & Button {
    margin-top: 14px;
  }
`

export const RentalUl = styled.ul`
  width: 728px;
  display: flex;
  flex-direction: column;
`

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
`

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
`