import styled from "styled-components";

export const SchedLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Renter = styled.div`
  padding: 20px 0;
  text-align: center;
  width: 112px;
  flex-grow: 1;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & p {
    font-size: 12px;
  }

  & p:nth-child(2) {
    font-weight: 600;
    font-size: 15px;
  }

  & p:nth-child(3) {
    margin: 7px 0 18px;
    color: ${(props) => props.theme.color.primary.main};
  }
`;

export const PurposeBtn = styled.button`
  margin-bottom: 8px;
`;

export const RentalUl = styled.ul`
  width: 728px;
  display: flex;
  flex-direction: column;
`;

export const TimeModal = styled.span`
  font-size: 14px;
  display: block;
  margin: 30px 0 16px;
  line-height: 1.4;
`;

export const TimeCont = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.color.primary.main};
`;

export const WarnCont = styled.p`
  margin: -10px 0 8px;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: ${(props) => props.theme.color.primary.red};
`;
