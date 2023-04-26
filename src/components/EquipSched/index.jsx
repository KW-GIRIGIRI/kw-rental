import * as S from "./style"
import Button from "../../modules/Button"
import { useState } from "react"
import SchedList from "../SchedList"

export default function EquipSched() {
  const [receive, setReceive] = useState(true)

  return (
    <>
      <Button className={receive ? 'main shadow' : 'disable shadow'} text="수령 예정" padding="10px 21px" borderRadius="20px" fontSize="13px" onClick={() => setReceive(true)}/>
      <Button className={receive ? 'disable shadow' : 'main shadow'} text="반납 예정" margin="0 0 0 10px" padding="10px 21px" borderRadius="20px" fontSize="13px" onClick={() => setReceive(false)}/>
      <S.SchedTitle>{receive ? '수령 예정' : '반납 예정'}</S.SchedTitle>
      <S.SchedWrap>
        <S.Header>
          <span>대여자</span>
          <span>기자재</span>
          <span>개수</span>
          <span>자산번호</span>
        </S.Header>
        <SchedList receive={receive} />
      </S.SchedWrap>
    </>
  )
}