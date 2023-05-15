import styled from "styled-components";

export const HistTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${props => props.theme.color.primary.third};
  font-size: 13px;
  margin-top: 20px;

  & th, td {
    border: 1px solid ${props => props.theme.color.primary.third};
    vertical-align: middle;
  }

  & th {
    align-items: center;
    &:nth-child(-n+4) {
      width: 150px;
    }
    &:first-child {
      width: 140px;
    }

  }

  & tr {
    box-sizing: border-box;
    height: 36px;
  }

  & > thead {
    background-color: ${props => props.theme.color.primary.sub};
  }

  & td {
    text-align: center;
    padding: 0 20px;
  }

  & td:nth-child(5) {
    text-align: left;
  }
`