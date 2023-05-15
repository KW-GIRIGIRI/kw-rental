import DualDatePicker from "../DatePicker/DualDatePicker"
import * as S from "./style"

export default function UserHist({ isEquip, isLab }) {
  const 기자재대여이력 = [
    {
      수령일: "23년 03월 11일(수)",
      반납일: "23년 03월 12일(목)",
      대여리스트: [
        {
          기자재명: "Oclulus Quest2",
          개수: 1,
          정상반납: true
        },
        {
          기자재명: "MIRRORLESS SONY a6600",
          개수: 3,
          정상반납: true
        },
      ]
    },
    {
      수령일: "23년 03월 10일(화)",
      반납일: "23년 03월 11일(수)",
      대여리스트: [
        {
          기자재명: "Oclulus Quest2",
          개수: 1,
          정상반납: false
        },
        {
          기자재명: "MIRRORLESS SONY a6600",
          개수: 3,
          정상반납: true
        },
        {
          기자재명: "Rode NTG-2",
          개수: 1,
          정상반납: false
        },
      ]
    },
  ]

  const 랩실대여이력 = [
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관 B119호",
      사용인원: 4,
      정상사용: true
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "화도관 302호",
      사용인원: 2,
      정상사용: true
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관 B119호",
      사용인원: 6,
      정상사용: false
    },
  ]

  const 페널티이력 = [
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체"
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "한울관 B119호",
      사유: "연체"
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "한울관 B119호",
      사유: "연체"
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체"
    },
  ]

  return (
    <>
      { (isEquip || isLab) &&  <DualDatePicker firstInitial={-90} /> }
      <S.Div>
        {
          isEquip ?
            <S.HistWrap>
              <S.Header className="equip">
                <span>수령일</span>
                <span>반납일</span>
                <span>기자재</span>
                <span>개수</span>
                <span>상태</span>
              </S.Header>
              {기자재대여이력.map((기자재, i) => (
                <S.HistList className="equipList" key={i}>
                  <S.DateEquip>{기자재.수령일}</S.DateEquip>
                  <S.DateEquip>{기자재.반납일}</S.DateEquip>
                  <S.ItemUl>
                    {기자재.대여리스트.map((아이템, idx) => (
                      <S.ItemLi key={idx}>
                        <span>{아이템.기자재명}</span>
                        <span>{아이템.개수}</span>
                        <span>{아이템.정상반납 ? "정상 반납" : "불량 반납"}</span>
                      </S.ItemLi>
                    ))}
                  </S.ItemUl>
                </S.HistList>
              ))}
            </S.HistWrap>
            : isLab ?
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
              :
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
        }
      </S.Div>
    </>

  )
}
