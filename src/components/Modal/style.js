import styled from "styled-components";
import Button from "../../modules/Button";

export const ModalSection = styled.section`
  display: ${(props) => (props.visible ? "block" : "none")};
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Div = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  width: fit-content;
  padding: 40px 33px 65px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;

  & > p {
    text-align: center;
    font-size: 14px;
  }

  & > button:first-of-type {
    position: absolute;
    right: 12px;
    top: 12px;
  }
`;

export const SearchBtn = styled(Button)`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
