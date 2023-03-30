import styled from "styled-components";

export const FileLabel = styled.label`
  padding: 112px 125px;
  background-color: ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  text-align: center;
  & > input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  & > img {
    width: 48px;
    margin-bottom: 10px;
  }
  & > p {
    color: ${props => props.theme.color.text.gray};
    font-size: 14px;
    width: max-content;
}
`;

export const Span = styled.span`
  height: 13px;
  display: block;
`

export const BtnWrap = styled.div`
  text-align: center;
`