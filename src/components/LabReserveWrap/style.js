import styled from "styled-components";

export const Div = styled.div`
  min-width: 310px;
`;

export const ReserveUl = styled.ul`
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  width: ${(props) => (props?.hanul ? "100%" : "210px")};
`;

export const ReserveLi = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  font-size: 13px;
  padding: 12px;
  text-align: center;

  &.auth {
    grid-template-columns: repeat(2, 1fr);

    & > button {
      margin: 0 auto;
    }
  }

  &:first-of-type {
    font-size: 12px;
    padding: 8px;
    background-color: ${(props) => props.theme.color.primary.sub};
  }

  & > button {
    margin-left: auto;
  }
`;

export const DateP = styled.p`
  font-size: 15px;
  margin-bottom: 17px;
  font-weight: 600;
`;
