import dayjs from "dayjs"
import { useState } from "react"
import { createRental } from "../../api/api"
import useModal from "../../hook/useModal"
import Button from "../../modules/Button"
import ReturnModal from "../EquipSched/ReturnModal"
import SchedListComp from "./SchedListComp"
import * as S from "./style"
import { useDispatch, useSelector } from "react-redux";
import { asyncGetReceived } from "../../store/reducer/authReceiveSlice"

export default function SchedList({ date, user, receive }) {
  const [returnModal, setReturnModal] = useState(false)
  const { Modal, open, close } = useModal()
  const receiveCheckList = useSelector(state => state.authReceive.receiveCheckList)
  const dispatch = useDispatch()

  const handleCreateRental = async (reserveId) => {
    const sendData = receiveCheckList.find(item => item.reservationId === reserveId)

    const res = await createRental(JSON.stringify(sendData))
    res === 201 && close()

    dispatch(asyncGetReceived(date))
  }

  return (
    <S.SchedLi key={user.memberNumber}>
      <S.Renter>
        <p>{user.name}</p>
        <p>{user.memberNumber}</p>
        {
          user.returnDate && <S.WarnCont>반납일 초과</S.WarnCont>
        }
        {
          receive && user.acceptDateTime ?
            <S.TimeCont>{user.acceptDateTime.split('T')[1].slice(0, 5)}</S.TimeCont> :
            <Button
              disabled={receiveCheckList.filter(value => value.reservationId === user.reservationId)[0].rentalSpecsRequests.flatMap((item) => item.propertyNumbers).includes(undefined)}
              className={receiveCheckList.filter(value => value.reservationId === user.reservationId)[0].rentalSpecsRequests.flatMap((item) => item.propertyNumbers).includes(undefined) ? 'gray shadow' : 'main shadow'}
              text={receive ? "수령확인" : "반납확인"}
              borderRadius="20px" padding="5.5px 7.5px" fontSize="13px" onClick={() => receive ? open() : setReturnModal(true)} />}
      </S.Renter>
      <S.RentalUl>
        {
          user.reservationSpecs?.map(id =>
            <SchedListComp id={id} key={id} receive={receive} />
          )
        }
      </S.RentalUl>
      {
        !receive && <ReturnModal user={user} returnModal={returnModal} setReturnModal={setReturnModal} date={date} />
      }
      <Modal>
        <S.TimeModal>수령을 확정하시겠습니까?<br />
        {dayjs().format('M월 D일(dd) HH:mm')}</S.TimeModal>
        <div>
          <Button text='취소' className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={() => close()} />
          <Button text='확인' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px" onClick={() => handleCreateRental(user.reservationId)}/>
        </div>
      </Modal>
    </S.SchedLi>
  )
}
