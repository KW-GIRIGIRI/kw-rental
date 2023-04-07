import styled from "styled-components";

export const ListLi = styled.li`
  display: grid;
  font-size: 14px;
  grid-template-columns: 1fr 1.3fr 0.3fr 1fr 1fr 0.6fr;
  align-items: center;
  text-align: center;
  border: 0.8px solid ${(props) => props.theme.color.primary.sub};
  padding: 8px 20px 8px 10px;
  &:first-of-type {
    padding: 18px 20px 18px 10px;
    background-color: ${(props) => props.theme.color.primary.sub};
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    & > p:nth-child(2) {
      text-align: left;
    }
  }
  &:last-of-type {
    border-radius: 0 0 10px 10px;
  }
  & > img {
    margin: 0 auto;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
  & :first-child {
    font-size: 14px;
    color: ${(props) => props.theme.color.primary.main};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  & :first-child {
    font-weight: 600;
    color: ${(props) => props.theme.color.primary.main};
  }
  & :last-child {
    font-weight: 600;
    color: ${(props) => props.theme.color.text.gray};
  }
`;
