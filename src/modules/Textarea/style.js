import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  width: 100%;
`

export const TextareaStyle = styled.textarea`
  width: 100%;
  outline: none;
  font-size: 14px;
  padding: 5px 7px;
  line-height: 140%;
  box-sizing: border-box;
  font-family: inherit;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.color.text.gray};
  }

  &.detailDesc {
    border: 1px solid ${(props) => props.theme.color.primary.sub};
    padding: 30px;
    margin-bottom: 40px;
    border-radius: ${(props) => props.theme.borderRadius.lv2};
    line-height: 160%;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.color.text.gray};
  position: absolute;
  bottom: 60px;
  right: 20px;
`;