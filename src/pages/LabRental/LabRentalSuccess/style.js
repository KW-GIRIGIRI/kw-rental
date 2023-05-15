import styled from "styled-components";

export const SimpleDesc = styled.div`
  font-size: 13px;
  & > span:not(:last-child)::after {
    content: " > ";
  }
  & :nth-child(3) {
    color: ${(props) => props.theme.color.primary.main};
    font-weight: 600;
  }
`;

export const Div = styled.div`
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > p:first-of-type {
    font-size: 24px;
  }

  & > div {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
`;
