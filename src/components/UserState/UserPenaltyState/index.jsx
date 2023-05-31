import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { getMyPenaltyStatus } from "../../../api/api"
import * as S from "../style"

export default function UserPenaltyState() {
  const [penaltyStatus, setPenaltyStatus] = useState({})

  const handleGetPenaltyStatus = async () => {
    const res = await getMyPenaltyStatus()
    setPenaltyStatus(res)
  }

  useEffect(() => {
    handleGetPenaltyStatus()
  }, [])

  return (
    <S.HistWrap className="penalty">
      <S.Header className="penalList">
        <span>상태</span>
        <span>비고</span>
      </S.Header>

      <S.HistList className="penalList">
        <span>{penaltyStatus.canUse ? "정상 이용 가능" : "정지"}</span>
        <span>{penaltyStatus.canUse ? "-" : dayjs(penaltyStatus.endDate).format('YY년 M월 D일까지 이용 불가')}</span>
      </S.HistList>
    </S.HistWrap>
  )
}