import styled from "styled-components";

export const ModalSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content : center;
  align-items: center;
  text-align: center;
`;

export const Div = styled.div`
  width: 300px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: #ffffff;

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
`;

export const CloseBtn = styled.button`
  float: right;
`
