import styled from "styled-components";

export const Div = styled.div`
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  width: 100%;

  & .equip {
    grid-template-columns: 1.7fr 1fr 2fr 1fr 1.2fr 1.1fr;
  }

  & .equipList {
    grid-template-columns: 1.7fr 6.3fr;
    min-height: 90px;
  }

  & .lab {
    grid-template-columns: 2fr 1.35fr 1fr 1.35fr 2.3fr;
  }

  & .labList {
    padding: 15px 0;
  }

  & .penalty {
    min-width: 280px;
    max-width: 390px;
  }

  & .penalList {
    grid-template-columns: 1fr 2fr;
    padding: 10px 0;

    & span:first-child {
      height: calc(100% + 20px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid ${(props) => props.theme.color.primary.third};
    }
  }
`;

export const HistWrap = styled.ul`
  align-items: center;
`;

export const Header = styled.li`
  background-color: ${(props) => props.theme.color.primary.sub};
  padding: 10px 0;
  border: 1px solid ${(props) => props.theme.color.primary.third};
  display: grid;
  align-items: center;
`;

export const HistList = styled.li`
  border: 1px solid ${(props) => props.theme.color.primary.third};
  border-top: none;
  display: grid;
  align-items: center;

  & img {
    margin: auto;
  }

  & > div > p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemUl = styled.ul``;

export const ItemLi = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr 1.2fr 1.1fr;
  padding: 12px 0;

  & > button {
    margin: auto;
  }
`;

export const DateEquip = styled.span`
  grid-row-start: 1;
  grid-row-end: -1;

  & > p {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const NameEquip = styled.div`
  text-align: left;
  margin-left: 10px;

  & > p:first-child {
    color: ${(props) => props.theme.color.primary.main};
  }

  & > p:last-child {
    font-size: 14px;
    margin-top: 5px;
  }
`;

export const State = styled.span`
  color: ${(props) => props.theme.color.primary.main};
`;

export const BtnWrap = styled.div`
  & > button:first-child {
    margin-right: 5px;
  }
`;
