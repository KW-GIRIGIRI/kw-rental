import EmptyData from '../../EmptyData'
import * as S from "../style"

export default function UserPenaltyHist() {
  const 페널티이력 = [
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체",
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "한울관",
      사유: "연체",
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "한울관",
      사유: "연체",
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체",
    },
  ]

  return (
    페널티이력.length ?
      <S.HistWrap>
        <S.Header className="penalty">
          <span>수령일</span>
          <span>반납일</span>
          <span>상태</span>
          <span>기자재/랩실</span>
          <span>사유</span>
        </S.Header>

        {페널티이력.map((페널티, i) => (
          <S.HistList className="penalty" key={i}>
            <span>{페널티.수령일}</span>
            <span>{페널티.반납일}</span>
            <span>{페널티.상태}</span>
            <span>{페널티.종류}</span>
            <span>{페널티.사유}</span>
          </S.HistList>
        ))}
      </S.HistWrap>
      : <EmptyData className="user-rental" content={["페널티 이력이 없습니다."]} />
  )
}