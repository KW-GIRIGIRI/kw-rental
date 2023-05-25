import styled from "styled-components";

export const TabButton = styled.button`
  font-size: 1rem;
  width: 100px;
  font-weight: 600;
  position: relative;
  padding: 0 9px 15px;
  margin-right: 5px;
  &.on::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 100%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.primary.main};
  }
`;
