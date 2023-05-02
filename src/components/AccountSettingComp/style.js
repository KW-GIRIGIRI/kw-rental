import styled from "styled-components";

export const Form = styled.form`
  width: 330px;
  position: relative;

  & > label {
    font-size: 13px;
    margin-top: 19px;
    color: ${(props) => props.theme.color.gray.g5};
  }
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g4};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  padding: 11px 15px;
  font-size: 15px;
  margin: 10px 0;
  &::placeholder {
    font-size: 15px;
    color: ${(props) => props.theme.color.primary.third};
  }
  &:disabled {
    background-color: ${(props) => props.theme.color.primary.sub};
    color: ${(props) => props.theme.color.text.gray};
  }
`;

export const PwImg = styled.img`
  position: absolute;
  width: 18px;
  right: 16px;
  bottom: ${(props) => props.bottom};
`;
