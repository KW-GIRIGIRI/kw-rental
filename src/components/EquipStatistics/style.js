import styled from "styled-components";

export const ItemUl = styled.ul`
  box-sizing: border-box;
  margin-top: 60px;

  & > li {
    display: grid;
    align-items: center;

    grid-template-columns: 1fr 1.45fr 1.45fr 1fr 1fr;
    padding: 11px 0;

    & > span:nth-child(2) {
      text-align: left;
      justify-content: left;
      padding-left: 26px;
    }
  }
`;

export const Header = styled.li`
  background: #e0e4e9;
  font-size: 13px;
  text-align: center;
`;

export const ItemLi = styled.li`
  font-size: 12px;

  & > div,
  & > span {
    height: calc(100% + 22px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #e0e4e9;
    border-bottom: 1px solid #e0e4e9;

    &:first-child {
      border-left: 1px solid #e0e4e9;
    }
  }
`;
