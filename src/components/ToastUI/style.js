import styled from "styled-components";

export const Wrap = styled.div`
  margin-top: 46px;
  height: 450px;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  border-radius: ${(props) => props.theme.borderRadius.lv2};
  padding: 18px 25px;
  position: relative;
`;

export const BtnWrap = styled.div`
  margin-top: 20px;

  & > button:first-child {
    margin-right: 13px;
  }

  text-align: center;
`;

export const Div = styled.div`
  display: flex;
  position: absolute;
  top: -38px;
  right: 0;
  cursor: pointer;

  & > p {
    margin-left: 7px;
    font-size: 13px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primary.main};
  }
`;
