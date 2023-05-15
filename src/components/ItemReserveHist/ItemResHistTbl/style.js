import styled from "styled-components";

export const HistUl = styled.ul`
  width: 100%;
  border-radius: 10px 10px 0 0;
  border: 1px solid ${(props) => props.theme.color.primary.third};
  font-size: 13px;
  margin-top: 15px;
`;

export const HistLi = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 1.5fr;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.third};

  & > p {
    border-right: 1px solid ${(props) => props.theme.color.primary.third};
    padding: 10px;

    &:last-of-type {
      border-right: none;
      text-align: left;
      margin-left: 10px;
    }
  }

  &:first-of-type {
    border-radius: 10px 10px 0 0;
    background-color: ${(props) => props.theme.color.primary.sub};
    & > p {
      text-align: center;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
