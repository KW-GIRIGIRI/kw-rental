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

  /* main color button */
  &.main {
    background-color: ${(props) => props.theme.color.primary.main};
    color: ${(props) => props.theme.color.text.white};
  }

  /* gray color button */
  &.sub {
    background-color: ${(props) => props.theme.color.gray.g1};
    color: ${(props) => props.theme.color.text.white};
  }
`;
