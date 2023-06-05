import styled from "styled-components";

export const Section = styled.article`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

export const Div = styled.div`
  z-index: 99;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: ${(props) => props.theme.color.text.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 15px;
  box-sizing: border-box;
  height: 113px;
  width: 200px;
  font-size: 12px;
  overflow-y: scroll;
  text-align: left;

  &::-webkit-scrollbar {
    border-radius: ${(props) => props.theme.borderRadius.lv2};
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 3px solid transparent;
    background-color: ${(props) => props.theme.color.primary.third};
    border-radius: ${(props) => props.theme.borderRadius.lv2};
  }

  &::-webkit-scrollbar-track {
    border-radius: ${(props) => props.theme.borderRadius.lv2};
    background-color: ${(props) => props.theme.color.gray.g2};
  }
`;
