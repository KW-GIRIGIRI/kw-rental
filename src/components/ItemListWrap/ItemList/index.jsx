import * as S from "./style";

export default function ItemList({ id, num }) {
  return (
    <>
      <S.ItemWrap>
        <S.ItemId>품목 {id}</S.ItemId>
        <S.ItemNum>{num}</S.ItemNum>
      </S.ItemWrap>
    </>
  )
}
