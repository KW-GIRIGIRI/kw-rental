import * as S from "../style"
import { getCurrentRental } from "../../../api/api"
import { useState, useEffect } from "react"
import StateListComp from "./StateListComp"
import EmptyData from '../../EmptyData'

export default function UserEquipState() {
  const [myRental, setMyRental] = useState([])

  const handleGetCurrentRental = async () => {
    const res = await getCurrentRental()
    setMyRental(res.reservations)
  }

  useEffect(() => {
    handleGetCurrentRental()
  }, [])

  return (
    myRental.length ?
      <S.HistWrap>
        <S.Header className="equip">
          <span>수령일 ~ 반납일</span>
          <span>기자재</span>
          <span></span>
          <span>개수</span>
          <span>상태</span>
        </S.Header>
        {myRental.map((rental, i) => (
          <StateListComp key={i} rental={rental} handleGetCurrentRental={handleGetCurrentRental} />
        ))}
      </S.HistWrap>
      : <EmptyData className="user-rental" content={["예정된 대여가 없습니다."]} />
  )
}