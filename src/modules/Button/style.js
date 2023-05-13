import styled from "styled-components";

export const BtnDefault = styled.button`
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  box-shadow: ${(props) => props.boxShadow};
  line-height: 1;
  float: ${(props) => props.float};
  box-sizing: border-box;

  /* main color button */
  &.main {
    background-color: ${(props) => props.theme.color.primary.main};
    border: 1px solid ${(props) => props.theme.color.primary.main};
    color: ${(props) => props.theme.color.text.white};
  }

  /* gray border color button */
  &.sub {
    border: 1px solid ${(props) => props.theme.color.gray.g3};
    color: ${(props) => props.theme.color.gray.g3};
  }

  /* gray bg color button */
  &.gray {
    color: ${(props) => props.theme.color.text.white};
    background-color: ${(props) => props.theme.color.gray.g4};
    box-shadow: 0 0 0 1px #c6c6c6 inset;
  }

  &.disable {
    border: 1px solid ${(props) => props.theme.color.primary.sub};
    color: ${(props) => props.theme.color.gray.g5};
  }

  &.shadow {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
