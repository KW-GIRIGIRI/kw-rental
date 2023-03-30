import styled from "styled-components";

export const InputStyle = styled.input`
  width: 100%;
  outline: none;
  padding: 5px 7px;
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  &::placeholder {
    color: ${(props) => props.theme.color.text.gray};
  }
  &.title {
    display: block;
    font-size: 20px;
    font-weight: 500;
    margin: 7px 0;
  }
`;
