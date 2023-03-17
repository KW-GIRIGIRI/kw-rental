import styled from "styled-components";

export const ListUl = styled.ul`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const ListLi = styled.li`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.color.primary.sub};
  padding: 15px 20px;
  &:first-of-type {
    padding: 20px;
    background-color: ${(props) => props.theme.color.primary.sub};
    font-weight: 600;
    border-radius: 10px 10px 0 0;
    & > p {
      font-size: 1rem;
      &:nth-child(2) {
        text-align: left;
      }
    }
  }
  & > img {
    margin: 0 auto;
  }
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: left;
  & :nth-child(2){
    font-size: 18px;
  }
`