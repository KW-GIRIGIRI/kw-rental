import styled from "styled-components";

export const ModalSection = styled.section`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Div = styled.div`
  width: 300px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.text.white};

  & > p {
    font-size: 14px;
    margin: 30px 0 20px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  &.modify {
    width: 461px;
    font-size: 14px;
    text-align: left;
    box-sizing: border-box;
    padding: 29px 27px;

    & > p {
      margin: 26px 0 15px 0;
      font-size: 13px;
      font-weight: 600;
      &:first-of-type {
        margin: 0 0 22px;
        font-size: 14px;
      }
    }

    & > div.item {
      display: flex;
      justify-content: flex-start;
      gap: 12px;
    }
  }

  &.contacts {
    position: relative;
    padding: 20px 20px;

    & > button {
      position: absolute;
      right: 20px;
    }

    & > p {
      margin: 0;
      position: absolute;
      font-weight: 600;
      top: 20px;
      left: 20px;
    }

    & > div {
      display: block;
      text-align: left;
      margin-top: 40px;

      & > p:not(:last-child) {
        margin-bottom: 8px;
      }
    }

    & > div:last-child {
      margin-top: 10px;
      text-align: right;
    }
  }
`;

export const CloseBtn = styled.button`
  float: right;
`;
