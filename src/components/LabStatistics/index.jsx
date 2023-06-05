import * as S from "./style"
import EmptyData from '../EmptyData'
import { useSelector } from 'react-redux'
import { getAdminLabHistory } from "../../api/api"
import { useEffect, useState } from 'react'
import { rentalStatus } from "../../data/rentalStatus"
import dayjs from "dayjs"

export default function LabStatistics({ page, setPageArray }) {
  const hanul = useSelector(state => state.labControl.lab)
  const dualDate = useSelector((state) => state.datePicker.dualDate)
  const [labHistoryList, setLabHistoryList] = useState([])

  const handleGetLabHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const reqUrl = `startDate=${dualDate.firstDate}&endDate=${dualDate.lastDate}&page=${page}`
      const response = await getAdminLabHistory(hanul ? "hanul" : "hwado", reqUrl)
      setPageArray(response.endPoints)
      setLabHistoryList(response.labRoomReservations)

      window.scrollTo({
        top: 0,
      })
    }
  }

  useEffect(() => {
    handleGetLabHistory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dualDate, hanul])

  return (
    labHistoryList.length ?
      <>
        <S.Wrap>
          <S.HistHeader>
            <span>랩실</span>
            <span>대여 인원</span>
            <span>사용 인원</span>
            <span>불량반납</span>
          </S.HistHeader>
          <S.Content>
            <span>{hanul ? "한울관" : "화도관"}</span>
            <span>8</span>
            <span>24</span>
            <span>2</span>
          </S.Content>
        </S.Wrap>

        <S.ItemUl>
          <S.ItemHeader>
            <span>상태</span>
            <span>사용일</span>
            <span>퇴실일</span>
            <span>대여자</span>
            <span>사유</span>
          </S.ItemHeader>
          {labHistoryList.map((lab, idx) => (
            <S.ItemLi key={idx}>
              <span>{lab.status}</span>
              <span>{dayjs(lab.startDate).format("YY년 MM월 DD일")}</span>
              <span>{dayjs(lab.endDate).format("YY년 MM월 DD일")}</span>
              <span>{lab.renterName}</span>
              <span>{lab.reason === "RETURNED" ? "" : rentalStatus[lab.reason]}</span>
            </S.ItemLi>
          ))}
        </S.ItemUl>
      </>
      : <EmptyData content={["선택 일자에 해당하는 데이터가 없습니다."]} />
  )
}
