import * as S from "./style";

export default function ItemManager({ id }) {
  return (
    <>
      <S.ItemWrap>
        <S.p>품목 {id}</S.p>
        <S.InputId placeholder="재물번호를 입력하세요." />
      </S.ItemWrap>
    </>
  )
}
