import dayjs from "dayjs"
import { useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import { rentalStatus } from "../../../data/rentalStatus"
import * as S from "../style"

export default function StateListComp({ penalty }) {
  const { Modal, open, close } = useModal()

  const handelEditPenaltyState = async (e, idx) => {
    const newState = e.target.value
    console.log(newState)
  // setData((prevData) => {
  //   const newData = [...prevData]
  //   newData[idx].상태 = newState
  //   return newData
  // })
  }
  
  
  const onDelete = (idx) => {
    // setIndex(idx)
    open()
  }

  const handleDeletePenalty = async () => {
    // 나중에 api로 바꿔야함
    // setData((prevData) => prevData.filter((_, i) => i !== index))
    // setIndex(0)
    close()
  }
  
  return (
    <S.ItemLi>
      <span>{penalty.renterName}</span>
      <form action="#">
        <select
          name="penalty"
          defaultValue={penalty.status}
          onChange={handelEditPenaltyState}
        >
          <option value="ONE_WEEK">7일 이용 금지</option>
          <option value="ONE_MONTH">1개월 이용 금지</option>
          <option value="THREE_MONTH">3개월 이용 금지</option>
          <option value="SIX_MONTH">6개월 이용 금지</option>
          <option value="ONE_YEAR">12개월 이용 금지</option>
        </select>
      </form>
      <span>{dayjs(penalty.startDate).format('YY년 MM월 DD일(dd)')} ~ {dayjs(penalty.endDate).format('YY년 MM월 DD일(dd)')}</span>
      <span>{penalty.assetName}</span>
      <span>{rentalStatus[penalty.reason]}</span>
      <span>
        <p onClick={() => onDelete()}>삭제</p>
      </span>
      <Modal>
        <p>해당 패널티를 정말 삭제하시겠습니까?</p>
        <div>
          <Button
            text="취소"
            className="sub"
            padding="11px 30px"
            borderRadius="5px"
            fontSize="14px"
            onClick={close}
          />
          <Button
            text="삭제"
            className="main"
            padding="11px 30px"
            borderRadius="5px"
            fontSize="14px"
            onClick={handleDeletePenalty}
          />
        </div>
      </Modal>
    </S.ItemLi>
  )
}
