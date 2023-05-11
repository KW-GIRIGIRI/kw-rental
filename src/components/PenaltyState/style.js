import styled from "styled-components";

export const ItemUl = styled.ul`
  box-sizing: border-box;
  margin-top: 60px;

  & > li {
    display: grid;
    align-items: center;

    grid-template-columns: 1.1fr 1.6fr 3.4fr 2.6fr 1fr 1fr;
    padding: 11px 0;

    & > span:nth-child(3), & > span:nth-child(4) {
      text-align: left;
      justify-content: left;
      padding-left: 20px;
    }
  }
`

export const Header = styled.li`
  background: #E0E4E9;
  font-size: 13px;
  text-align: center;
`

export const ItemLi = styled.li`
  font-size: 12px;

  & > span,
  & > form {
    height: calc(100% + 22px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #e0e4e9;
    border-bottom: 1px solid #e0e4e9;

    &:first-child {
      border-left: 1px solid #e0e4e9;
    }

    & > p:last-child {
      color: #0e2b5a;
      &:hover {
        cursor: pointer;
      }
    }
  }

  & > form > select {
    width: 101px;
    height: 20px;
    font-size: 12px;
  }
`;