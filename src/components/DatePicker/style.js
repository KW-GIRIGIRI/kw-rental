import styled, { css } from "styled-components";

export const Container = styled.section`
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const Wrap = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background-color: ${(props) => props.theme.color.text.white};
  z-index: 99;
  width: 205px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  margin-bottom: 12px;
  color: ${(props) => props.theme.color.primary.main};
  font-weight: 700;

  & > button {
    background-color: inherit;
    border: none;
    width: 20px;
  }
`;

export const DayWrap = styled.div`
  color: ${(props) => props.theme.color.gray.g3};
  font-weight: 600;
  font-size: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  margin-bottom: 10px;
`;

export const RowWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 10px;
  height: 20px;
  position: relative;

  ${(props) =>
    props.checkWeek &&
    css`
      &:hover {
        color: white;
        &::after {
          content: "";
          position: absolute;
          top: 1px;
          left: 26px;
          width: 120px;
          height: 18px;
          background-color: ${(props) => props.theme.color.primary.main};
          border-radius: 10px;
        }
      }
    `}
`;

export const CellWrap = styled.span`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  padding: 5px;
  z-index: 99;

  &.disabled {
    color: lightgray;
    pointer-events: none;
  }

  ${(props) =>
    props.checkWeek ||
    css`
      &:hover {
        color: white;
        background-color: ${(props) => props.theme.color.primary.main};
        border-radius: 50px;
      }
    `}
`;
