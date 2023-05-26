import styled from "styled-components";

export const ItemUl = styled.ul`
  box-sizing: border-box;
  margin-top: 60px;

  & > li {
    display: grid;
    align-items: center;

    grid-template-columns: 1fr 1.6fr 1.4fr 1fr 1fr;
    padding: 11px 0;

    & > span:nth-child(2),
    span:nth-child(3) {
      text-align: left;
      justify-content: left;
      padding: 0 26px;
    }

    &:hover:not(:first-child) {
      background: ${(props) => props.theme.color.primary.lightSub};
    }
  }
`;

export const Header = styled.li`
  background: ${(props) => props.theme.color.primary.sub};
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
    border-right: 1px solid ${(props) => props.theme.color.primary.sub};
    border-bottom: 1px solid ${(props) => props.theme.color.primary.sub};

    &:first-child {
      border-left: 1px solid ${(props) => props.theme.color.primary.sub};
    }
  }
`;
