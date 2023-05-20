import * as S from "../style"

export default function UserPenaltyState() {
  const 페널티 = {
    이용가능: true,
    사유: "",
  }

  return (
    <S.HistWrap className="penalty">
      <S.Header className="penalList">
        <span>상태</span>
        <span>비고</span>
      </S.Header>

      <S.HistList className="penalList">
        <span>{페널티.이용가능 ? "정상 이용 가능" : "정지"}</span>
        <span>{페널티.사유.length ? 페널티.사유 : "-"}</span>
      </S.HistList>
    </S.HistWrap>
  )
}