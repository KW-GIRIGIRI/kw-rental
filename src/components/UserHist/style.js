import styled from "styled-components";

export const Div = styled.div`
  .flex {
    display: flex;
    align-items: center;
  }

  & > div {
    margin-bottom: 16px;
    & > span {
      margin: 0 12px;
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
`

export const HistWrap = styled.ul`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-size: 13px;

  .lab > div, .penalty > div {
    height: 36px;
    line-height: 36px;
    border-right: 1px solid #8B95A1;
    
    &:last-child {
      border-right: none;
    }
  }
`

export const Header = styled.li`
  background-color: #E0E4E9;
  height: 36px;
  border: 1px solid #8B95A1;
  border-bottom: none;

  & > div {
    height: 100%;
    line-height : 36px;
    border-right: 1px solid #8B95A1;
  }

  .last-list {
    border-right: none;
  }
`

export const HistList = styled.li`
  border: 1px solid #8B95A1;
  border-bottom: none;
  min-height: 36px;

  &:last-child {
    border-bottom: 1px solid #8B95A1;
  }
`

export const ItemUl = styled.ul`
`

export const ItemLi = styled.li`
  padding: 11px 0;
`

// 기자재 이력
export const PickupEquip = styled.div`
  width: 140px;
`

export const ReturnEquip = styled.div`
  width: 139px;
`

export const NameEquip = styled.div`
  width: 218px;
  text-align: left;

  & > span, & > p {
    margin-left: 21px;
  }
`

export const NumEquip = styled.div`
  width: 71px;
`

export const StateEquip = styled.div`
  width: 198px;
`

// 랩실 이력
export const DateLab = styled.div`
  width: 140px;
`

export const NameLab = styled.div`
  width: 120px;
`

export const NumLab = styled.div`
  width: 110px;
`

export const StateLab = styled.div`
  width: 146px;
`

//페널티 이력
export const DatePenalty = styled.div`
  width: 140px;
`

export const StatePenalty = styled.div`
  width: 120px;
`

export const NamePenalty = styled.div`
  width: 220px;
`

export const CausePenalt = styled.div`
  width: 146px;
`