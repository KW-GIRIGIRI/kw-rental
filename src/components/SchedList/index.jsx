import dayjs from "dayjs"
import { useState } from "react"
import useModal from "../../hook/useModal"
import Button from "../../modules/Button"
import ReturnModal from "../EquipSched/ReturnModal"
import SchedListComp from "./SchedListComp"
import * as S from "./style"

export default function SchedList({ receive }) {
  const [returnModal, setReturnModal] = useState(false)
  const { Modal, open, close } = useModal()

  
  return (
    <>
      <S.SchedLi>
        <S.Rental>
          <S.Renter>
            <p>이름</p>
            <p>학번</p>
            {/* <p>반납일 초과</p> */}
            <Button className="main shadow" text={ receive ? "수령확인" : "반납확인" } borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" onClick={() => receive ? open() : setReturnModal(true)} />
          </S.Renter>
          <S.RentalUl>
            <SchedListComp receive={receive}/>
            <SchedListComp receive={receive}/>
            <SchedListComp receive={receive}/>
          </S.RentalUl>
        </S.Rental>
      </S.SchedLi>
      <ReturnModal returnModal={returnModal} setReturnModal={setReturnModal} />
      <Modal>
        <S.TimeModal>수령을 확정하시겠습니까?<br />
        {dayjs().format('M월 D일(dd) HH:mm')}</S.TimeModal>
        <div>
          <Button text='취소'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={() => close()} />
          <Button text='확인' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px"/>
        </div>
      </Modal>
    </>
  )
}
