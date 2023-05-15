import styled from "styled-components";

export const Div = styled.div`
  margin-top: 16px;

  span {
    border-right: 1px solid ${props => props.theme.color.primary.third};
    height: calc(100% + 20px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:last-child {
      border-right: none;
    }
  }

  /* 기자재 */
  .equip {
    grid-template-columns: 2fr 2fr 3fr 1fr 2.8fr;

    & > span:nth-child(3) {
      justify-content: left;
      margin-left: 20px;
    }
  }

  .equipList {
    grid-template-columns: 2fr 2fr 6.8fr;
  }

  /* 랩실 */
  .lab {
    grid-template-columns: 1.7fr 1fr 1fr 1fr;
    padding: 10px 0;
  }

  /* 페널티 */
  .penalty {
    grid-template-columns: repeat(3, 1fr) 1.7fr 1fr;
    padding: 10px 0;

    span:nth-child(4) {
      justify-content: left;
      margin-left: 20px;
    }
  }
`

export const Cal = styled.div`
  box-sizing: border-box;
  width: 145px;
  height: 26.07px;
  border: 1px solid #000000;
  border-radius: 4.12409px;
  justify-content: center;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const HistWrap = styled.ul`
  box-sizing: border-box;
  text-align: center;
  font-size: 13px;
`

export const Header = styled.li`
  padding: 10px 0;
  background-color: #E0E4E9;
  border: 1px solid #8B95A1;
  display: grid;
  align-items: center;

  & span {
    grid-row-start: 1;
    grid-row-end: -1;
  }
`

export const HistList = styled.li`
  border: 1px solid #8B95A1;
  border-top: none;
  display: grid;
  align-items: center;
`

export const ItemUl = styled.ul`
`

export const ItemLi = styled.li`
  padding: 10px 0;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1fr 2.8fr;
  border-bottom: 1px solid ${props => props.theme.color.primary.third};

  &:last-child {
    border-bottom: none;
  }
  
  & > span {
    grid-row-start: 1;
    grid-row-end: -1;

    &:first-child {
      justify-content: left;
      margin-left: 20px;
    }
  }
`

export const DateEquip = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row-start: 1;
  grid-row-end: -1;
  border-right: 1px solid ${props => props.theme.color.primary.third};
`