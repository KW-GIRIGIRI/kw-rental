import styled from "styled-components";
import iconCheckWhite from "../../../assets/icon-check-white.svg";
import iconCheckGray from "../../../assets/icon-check-gray.svg";

export const ToSWrap = styled.div`
  height: 100px;
  padding: 5px 18px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray.g3};
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  margin-bottom: 15px;
  overflow-y: scroll;
  color: ${(props) => props.theme.color.text.black};
  line-height: 17px;

  & > h4 {
    font-size: 12.4px;
    font-weight: 500;
    margin: 3px 0;
  }
  & > p,
  li {
    letter-spacing: -0.3px;
    font-size: 12px;
    color: ${(props) => props.theme.color.text.gray};
    margin-bottom: 4px;
  }
`;

export const ToSUl = styled.ul`
  & > li {
    list-style: decimal inside;

    & > ul > li {
      list-style: disc inside;
      margin-left: 5px;
    }
  }
`;

export const Check = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  border: 2px solid ${(props) => props.theme.color.primary.main};
  background: url(${iconCheckGray}) no-repeat center / 80%;
  &:checked {
    background: url(${iconCheckWhite}) no-repeat center / 80%
      ${(props) => props.theme.color.primary.main};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 14px;
  line-height: normal;
`;

export const Exclam = styled.div`
  margin-top: 10px;
  float: right;

  & > span {
    margin-left: 7px;
    font-size: 11px;
    color: ${(props) => props.theme.color.primary.main};
  }

  display: flex;
  align-items: center;
`;

export const Empty = styled.div`
  height: 26px;
`;
