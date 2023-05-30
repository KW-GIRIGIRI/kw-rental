import styled from "styled-components";

export const FileLabel = styled.label`
  padding: 112px 125px;
  background-color: ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  text-align: center;
  color: ${(props) => props.theme.color.text.gray};

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
    font-size: 14px;
    width: max-content;
  }
`;

export const BtnWrap = styled.div`
  text-align: center;
`;

export const FileBtn = styled.label`
  position: absolute;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background-color: ${(props) => props.theme.color.primary.main};
  color: ${(props) => props.theme.color.text.white};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  font-size: 13px;
  transform: translate(10px, 130px);
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
    width: 14px;
  }
  & > p {
    margin-top: 2px;
  }
`;
