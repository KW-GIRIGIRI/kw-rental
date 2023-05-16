import styled from "styled-components";

export const ListLi = styled.li`
  display: grid;
  font-size: 15px;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  text-align: center;
  border: 0.8px solid ${(props) => props.theme.color.gray.g4};
  padding: 8px 0;
  &:first-of-type {
    padding: 18px 0;
    background-color: ${(props) => props.theme.color.primary.sub};
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    & > p:nth-child(2) {
      text-align: left;
    }
  }
  & > img {
    margin: 0 auto;
  }
  &:not(:first-child):hover {
    outline: 1px solid ${(props) => props.theme.color.primary.main};
    outline-offset: -1px;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  & :first-child {
    font-size: 14px;
  }
`;
