import * as S from "../style"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getUserRentalHistory } from "../../../api/api"
import { rentalStatus } from "../../../data/rentalStatus"
import dayjs from "dayjs"
import EmptyData from '../../EmptyData'

export default function UserEquipHist() {
  const [equipHistory, setEquipHistory] = useState([])
  const dualDate = useSelector((state) => state.datePicker.dualDate)

  useEffect(() => {
    handleGetRentalHistory()
  }, [dualDate])

  const handleGetRentalHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const res = await getUserRentalHistory(dualDate.firstDate, dualDate.lastDate)
      setEquipHistory(res.rentals)
    }
  }

  return (
    equipHistory.length ?
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
      : <EmptyData className="user-rental" content={["조회한 일자의", "대여 이력이 없습니다."]} />
  )
}