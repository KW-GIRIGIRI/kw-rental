import * as S from "../style"
import { getCurrentRental } from "../../../api/api"
import { useState, useEffect } from "react"
import StateListComp from "./StateListComp"

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
  )
}