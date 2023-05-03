import * as S from "./style"

export default function EquipStatistics({data}) {
  return (
    <S.ItemUl>
      <S.Header>
        <span>카테고리</span>
        <span>기자재명</span>
        <span>품목</span>
        <span>기간 내 대여 수</span>
        <span>불량반납 수</span>
      </S.Header>
      {data.map(item => (
        <S.ItemLi>
          <span>{item.카테고리}</span>
          <span>{item.기자재명}</span>
          <span>{item.자산번호}</span>
          <span>{item.기간내대여수}</span>
          <span>{item.불량반납}</span>
        </S.ItemLi>
      ))
      }
    </S.ItemUl>
  )
}