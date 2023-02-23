import styled from "styled-components";

export const TabButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding-top: 10px;
  width: 133px;
  &.on::after {
    content: "";
    display: block;
    height: 5px;
    margin-top: 9px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.primary.main};
  }
`;
