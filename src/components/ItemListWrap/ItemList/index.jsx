import * as S from "./style";

export default function ItemList({ id, num, isEdit }) {
  return (
    <>
      {isEdit ? (
        <S.ItemWrapEdit>
          <S.ItemId>품목 {id}</S.ItemId>
          <S.ItemNum>{num}</S.ItemNum>
        </S.ItemWrapEdit>
      ) : (
        <S.ItemWrap>
          <S.ItemId>품목 {id}</S.ItemId>
          <S.ItemNum>{num}</S.ItemNum>
        </S.ItemWrap>
      )}
    </>
  )
}
