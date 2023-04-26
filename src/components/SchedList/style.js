import styled from "styled-components";

export const SchedLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Rental = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Renter = styled.div`
  padding: 18px 0;
  text-align: center;
  width: 112px;
  flex-grow: 1;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & p {
    font-size: 12px;
  }

  & p:first-child {
    font-weight: 600;
    font-size: 15px;
  }

  & p:nth-child(2) {
    margin-top: 7px;
    color: ${(props) => props.theme.color.primary.main};
  }

  & p:nth-child(3) {
    margin-top: 7px;
    color: #e20f0f;
  }

  & Button {
    margin-top: 14px;
  }
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