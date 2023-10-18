import styled from "styled-components";

export const Wrap = styled.ul`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.primary.sub};
  text-align: center;

  & > div {
    display: grid;
    grid-template-columns: 3fr repeat(3, 1fr);
  }

  & > div > span {
    padding: 10px 0;
    border-right: 1px solid ${(props) => props.theme.color.primary.sub};
  }

  & > div > span:last-child {
    border-right: none;
  }
`;
export const HistHeader = styled.div`
  background: ${(props) => props.theme.color.primary.sub};
  font-weight: 500;
  font-size: 13px;
`;

export const Content = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const ItemUl = styled.ul`
  box-sizing: border-box;
  margin-top: 35px;

  & > li {
    display: grid;
    align-items: center;

    grid-template-columns: 1fr 1.45fr 1.45fr 1fr 1fr;
    padding: 11px 0;

    &:hover:not(:first-child) {
      background: ${(props) => props.theme.color.primary.lightSub};
    }
  }
`;

export const ItemHeader = styled.li`
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
