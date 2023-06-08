import styled from "styled-components";

export const HistUl = styled.ul`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  font-size: 13px;
  margin-top: 15px;
`;

export const HistLi = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 1.5fr;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

  & > p {
    border-right: 1px solid ${(props) => props.theme.color.primary.sub};
    padding: 10px;

    &:last-of-type {
      border-right: none;
    }
    &.faulty {
      color: ${(props) => props.theme.color.primary.red};
    }
  }

  &:first-of-type {
    background-color: ${(props) => props.theme.color.primary.sub};
    & > p {
      text-align: center;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
