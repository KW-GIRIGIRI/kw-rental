import styled from "styled-components";

export const InpWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  &.authHistory {
    gap: 7px;
  }
`;

export const DateCont = styled.div`
  position: relative;
  border: 1px solid #000000;
  font-size: 14px;
  font-weight: 500;
  border-radius: ${(props) => props.theme.borderRadius.lv1};
  box-sizing: border-box;
  padding: 5px 0;
  width: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > img {
    width: 15px;
    pointer-events: none;
  }

  & > span {
    pointer-events: none;
    margin-top: 2px;
  }

  &.user {
    width: 120px;
  }

  &.authHistory {
    border-radius: ${(props) => props.theme.borderRadius.circle};
    border: 1px solid ${(props) => props.theme.color.primary.main};
    color: ${(props) => props.theme.color.primary.main};
  }
`;