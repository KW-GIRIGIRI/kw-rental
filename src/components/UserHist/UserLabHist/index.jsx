import * as S from "../style"

export default function UserLabHist() {
  const 랩실대여이력 = [
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관",
      사용인원: 4,
      정상사용: true,
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "화도관",
      사용인원: 2,
      정상사용: true,
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관",
      사용인원: 6,
      정상사용: false,
    },
  ]

  return (
    <S.HistWrap>
      <S.Header className="lab">
        <span>사용 기간</span>
        <span>랩실</span>
        <span>사용 인원</span>
        <span>상태</span>
      </S.Header>
      {랩실대여이력.map((랩실, i) => (
        <S.HistList className="lab" key={i}>
          <span>{랩실.사용기간}</span>
          <span>{랩실.장소}</span>
          <span>{랩실.사용인원}</span>
          <span>{랩실.정상사용 ? "정상 사용" : "불량 사용"}</span>
        </S.HistList>
      ))}
    </S.HistWrap>
  )
}