import styled from "styled-components";
import iconCheck from "../../../assets/icon-check-white.svg";

export const SchedLi = styled.li`
  width: 100%;
  grid-template-columns: 1.3fr 8.2fr;

  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
`;

export const Lab = styled.div`
  grid-row-start: 1;
  grid-row-end: -1;

  & > p:first-child {
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 8px;
  }

  & > button.main {
    border: none;
  }

  & > button.gray {
    box-shadow: none;
  }
`;

export const RenterNum = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.color.primary.main};
  margin-bottom: 14px;
`;

export const TimeCont = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.color.primary.main};
`;

export const RenterUl = styled.ul`
`

export const RenterLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1.6fr 1fr 1.6fr 2fr;
  font-size: 13px;
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  border-left: 1px solid ${(props) => props.theme.color.primary.sub};

  & > button {
    margin: 0 auto;
  }

  &:last-child {
    border-bottom: none;
  }

  &.only {
    padding: 44px 0;
  }
`

export const CheckInp = styled.input`
  appearance: none;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.color.primary.main};
  border-radius: ${(props) => props.theme.borderRadius.lv1};

  &.checked {
    background: ${(props) => props.theme.color.primary.main} url(${iconCheck})
    no-repeat center / 100%;
  }
`;

export const TimeModal = styled.span`
  font-size: 14px;
  display: block;
  margin: 30px 0 16px;
  line-height: 1.4;
`;