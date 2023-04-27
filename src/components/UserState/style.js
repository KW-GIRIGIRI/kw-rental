import styled from "styled-components";

export const HistWrapRent = styled.ul`
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  width: 100%;
  
  .flex {
    display: flex;
    align-items: center;
  }

  .lab-list {
    padding: 11px 0;
  }
`

export const HistWrapPenalty = styled.ul`
  box-sizing: border-box;
  font-size: 13px;
  text-align: center;
  width: 280px;
  
  .flex {
    display: flex;
    align-items: center;
  }
`

export const Header = styled.li`
  background-color: #E0E4E9;
  height: 36px;
  border: 1px solid #8B95A1;
  border-bottom: none;
`

export const HistList = styled.li`
  border: 1px solid #8B95A1;
  border-bottom: none;

  &:last-child {
    border-bottom: 1px solid #8B95A1;
  }
`

export const ItemUl = styled.ul`
`

export const ItemList = styled.li`
  padding: 11px 0;
`


// 기자재 대여 정보
export const DateEquip = styled.div`
  width: 145px;
  & > p {
    margin-bottom: 10px;
  }
`

export const NameEquip = styled.div`
  width: 300px;
  text-align: left;

  & > span {
    margin-left: 21px;
  }

  & img {
    margin-left: 18px;
    background: #D9D9D9;
  }

  & div {
    margin-left: 40px;

    & p:first-child {
      color: #0E2B5A;
      margin-bottom: 5px;
    }
  }
`

export const NumEquip = styled.div`
  width: 80px;
`

export const StateEquip = styled.div`
  width: 140px;
`

export const ButtonEquip = styled.div`
  width: 101px;
`


// 랩실 대여 정보
export const DateLab = styled.div`
  width: 160px;
  & > p {
    margin: 15px 0;
  }
`

export const NameLab = styled.div`
  width: 120px;
`

export const NumLab = styled.div`
  width: 104px;
`

export const NumEquipLab = styled.div`
  width: 170px;
`

export const StateLab = styled.div`
  width: 80px;

  & > p {
    color: #0E2B5A;
  }
`

export const ButtonLab = styled.div`
  width: 132px;
`

// 페널티 정보
export const Penalty = styled.div`
  width: 140px;
  padding: 11px 0;
  &:nth-child(2n-1) {
    border-right: 1px solid #8B95A1;
  }
`