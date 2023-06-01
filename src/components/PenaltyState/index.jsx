import * as S from "./style"
import { useEffect, useState } from "react"
import EmptyData from '../EmptyData'
import { getPenaltyHistory } from "../../api/api"
import Pagination from "../Pagination"
import StateListComp from "./StateListComp"

export default function PenaltyState() {
  const [penaltyList, setPenaltyList] = useState([])
  const [pageArray, setPageArray] = useState([])
  const [page, setPage] = useState(0)

  const handleGetPenaltyHistory = async () => {
    const res = await getPenaltyHistory(15, page)

    setPenaltyList(res.penalties)
    setPageArray(res.endPoints)
  }

  useEffect(() => {
    handleGetPenaltyHistory()
  }, [])

  return (
    penaltyList.length ?
      <>
      <S.ItemUl>
        <S.Header>
          <span>대여자</span>
          <span>상태</span>
          <span>페널티 기간</span>
          <span>기자재/랩실</span>
          <span>사유</span>
          <span></span>
        </S.Header>
          {penaltyList.map((penalty) => 
            <StateListComp penalty={penalty} key={penalty.id} handleGetPenaltyHistory={handleGetPenaltyHistory} />
          )}
        </S.ItemUl>
        {pageArray && (
          <Pagination
            page={page}
            setPage={setPage}
            pageArray={pageArray}
          />
        )}
      </>
      : <EmptyData content={["페널티 받은 대여자가 없습니다."]} />
  )
}
