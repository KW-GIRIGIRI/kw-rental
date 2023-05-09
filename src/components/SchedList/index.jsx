import dayjs from "dayjs"
import { useRef, useState } from "react"
import { createRental } from "../../api/api"
import useModal from "../../hook/useModal"
import Button from "../../modules/Button"
import ReturnModal from "../EquipSched/ReturnModal"
import SchedListComp from "./SchedListComp"
import * as S from "./style"

export default function SchedList({ receive, rentList }) {
  const [returnModal, setReturnModal] = useState(false)
  const { Modal, open, close } = useModal()
  const itemRef = useRef([])

  const handleCreateRental = async (index) => {
    const rentItem = rentList[index]

    const data = {
      "reservationId" : rentItem.reservationId,
      "rentalSpecsRequests" : [{
        "reservationSpecId" : 9,
        "propertyNumbers" : [ "123456789" ]
      }]
    }

    // const res = await createRental(JSON.stringify(data))
  }

  return (
    rentList?.map((user, index) => 
      <S.SchedLi key={user.memberNumber + index}>
        <S.Renter>
          <p>{user.name}</p>
          <p>{user.memberNumber}</p>
          {
            user.returnDate && <p>반납일 초과</p>
          }
          <Button
            className='main shadow' text={receive ? "수령확인" : "반납확인"} borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" onClick={() => receive ? open() : setReturnModal(true)} />
        </S.Renter>
        <S.RentalUl>
          {
            user.reservationSpecs?.map(rentItem =>
              <SchedListComp ref={itemRef} key={rentItem.reservationSpecId} rentItem={rentItem} receive={receive} />
            )
          }
        </S.RentalUl>

        <ReturnModal reservationSpecs={user.reservationSpecs} returnModal={returnModal} setReturnModal={setReturnModal} />
        <Modal>
          <S.TimeModal>수령을 확정하시겠습니까?<br />
          {dayjs().format('M월 D일(dd) HH:mm')}</S.TimeModal>
          <div>
            <Button text='취소'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={() => close()} />
            <Button text='확인' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px" onClick={() => handleCreateRental(index)}/>
          </div>
        </Modal>
      </S.SchedLi>
      )
  )
}
