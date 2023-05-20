import DualDatePicker from "../DatePicker/DualDatePicker"
import * as S from "./style"
import { getUserRentalHistory } from "../../api/api"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { rentalStatus } from "../../data/rentalStatus"
import { useSelector } from "react-redux"

export default function UserHist({ isEquip, isLab }) {
  const [equipHistory, setEquipHistory] = useState([]);
  const dualDate = useSelector((state) => state.datePicker.dualDate)

  useEffect(() => {
    handleGetRentalHistory()
  }, [dualDate])

  const handleGetRentalHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const res = await getUserRentalHistory(dualDate.firstDate, dualDate.lastDate)
      setEquipHistory(res.rentals)
    }

  };

  const 랩실대여이력 = [
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관 B119호",
      사용인원: 4,
      정상사용: true,
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "화도관 302호",
      사용인원: 2,
      정상사용: true,
    },
    {
      사용기간: "22년 09월 11일(수) ~ 22년 09월 12일(목)",
      장소: "한울관 B119호",
      사용인원: 6,
      정상사용: false,
    },
  ];

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
      종류: "한울관 B119호",
      사유: "연체",
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "한울관 B119호",
      사유: "연체",
    },
    {
      수령일: "21년 09월 11일(수)",
      반납일: "21년 09월 12일(목)",
      상태: "6개월 이용 금지",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체",
    },
  ];

  return (
    <>
      {
        isEquip || isLab ? (
          <DualDatePicker firstInitial={-90} />
        ) : (
          <></>
        )
      }
      <S.Div>
        {isEquip && equipHistory.length ? (
          <S.HistWrap>
            <S.Header className="equip">
              <span>수령일</span>
              <span>반납일</span>
              <span>기자재</span>
              <span>상태</span>
            </S.Header>
            {equipHistory.map((history, i) => (
              <S.HistList className="equipList" key={i}>
                <S.DateEquip>
                  {dayjs(history.startDate).format("YY년 MM월 DD일(dd)")}
                </S.DateEquip>
                <S.DateEquip>
                  {dayjs(history.endDate).format("YY년 MM월 DD일(dd)")}
                </S.DateEquip>
                <S.ItemUl>
                  {history.rentalSpecs.map((item, idx) => (
                    <S.ItemLi key={idx}>
                      <span>{item.modelName}</span>
                      <span className={!item.status === "RETURNED" ? "on" : ""}>
                        {rentalStatus[item.status]}
                      </span>
                    </S.ItemLi>
                  ))}
                </S.ItemUl>
              </S.HistList>
            ))}
          </S.HistWrap>
        ) : (
          <></>
        )}
        {isLab ? (
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
        ) : (
          <></>
        )}
        {!isEquip && !isLab ? (
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
        ) : (
          <></>
        )}
      </S.Div>
    </>
  )
}
