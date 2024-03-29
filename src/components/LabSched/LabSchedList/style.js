import styled from "styled-components";

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
    margin-bottom: 10px;
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

export const RenterLi = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 2fr 1fr;
  align-items: center;
  font-size: 13px;
  padding: 30px 50px 30px 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};
  border-left: 1px solid ${(props) => props.theme.color.primary.sub};

  & :nth-child(2) {
    text-align: left;
  }

  & > button {
    margin: 0 auto;
  }

  &:last-child {
    border-bottom: none;
  }

  &.only {
    padding: 54px 50px 54px 24px;
  }
`;

export const PurposeBtn = styled.button`
  & > img {
    vertical-align: text-top;
  }
`;

export const TimeModal = styled.span`
  font-size: 14px;
  display: block;
  margin: 30px 0 16px;
  line-height: 1.4;
`;
