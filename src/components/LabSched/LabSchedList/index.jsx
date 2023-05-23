import dayjs from "dayjs"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLabReturnConfirm, setLabUsingConfirm } from "../../../api/api"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import { asyncGetLabReceived, asyncGetLabReturned } from "../../../store/reducer/authReceiveSlice"
import CancelModal from "../CancelModal"
import * as S from "./style"

export default function LabSchedList({ acceptTime, lab, renterList, receive }) {
  const [info, setInfo] = useState({})
  const [cancelModal, setCancelModal] = useState(false)
  const { Modal, open, close } = useModal()
  const dispatch = useDispatch()
  const selectDate = useSelector((state) => state.datePicker.singularDate);

  const handleCancelModal = (item) => {
    setInfo(item)
    setCancelModal(true)
  }

  const handleReceive = async () => {
    const data = {
      "name" : lab,
      "reservationSpecIds" : renterList.map(i => i.id)
    }

    const res = await setLabUsingConfirm(JSON.stringify(data))
    res === 204 && close()
    dispatch(asyncGetLabReceived(selectDate))
  }

  const handleReturn = async () => {
    const data = {
      "name": lab,
      "reservationSpecIds": renterList.map(i => i.id)
    }

    const res = await setLabReturnConfirm(JSON.stringify(data))
    res === 204 && close()
    dispatch(asyncGetLabReturned(selectDate))
  }

  return (
    <S.SchedLi>
      <S.Lab>
        <p>{lab === "hanul" ? "한울관" : "화도관"}</p>
        {lab === "hanul" && <S.RenterNum>총 {renterList.reduce((a, c) => a + c.rentalAmount, 0)}명 대여</S.RenterNum>}
        {
          acceptTime && receive ? 
          <S.TimeCont> { acceptTime.split("T")[1].slice(0, 5) }</S.TimeCont> : 
          <Button
            className={"main"}
            text={receive ? "키 수령" : "키 반납"}
            borderRadius="20px"
            padding="7px 9px"
            fontSize="13px"
            onClick={open}
          />
        }

      </S.Lab>
      <ul>
        {
          renterList.map((renterItem) => (
            <S.RenterLi className={renterList.length === 1 ? "only" : ""} key={renterItem.id}>
              <p>{renterItem.renterName} &emsp; {renterItem.memberNumber}</p>
              <p>{renterItem.rentalAmount}</p>
              <p>{renterItem.phoneNumber}</p>
              { (receive && !acceptTime)  && <Button text="대여취소" width="75px" borderRadius="20px" padding="5px 7px" className="sub" fontSize="14px" onClick={() => handleCancelModal(renterItem)} /> }
            </S.RenterLi>
          ))
        }
      </ul>
      {cancelModal &&
        <CancelModal
          info={info}
          receive={receive}
          cancelModal={cancelModal}
          setCancelModal={setCancelModal}
        />}
      <Modal>
        <S.TimeModal>
          {receive ? "수령" : "반납"}을 확정하시겠습니까?
          <br />
          {dayjs().format("M월 D일(dd) HH:mm")}
        </S.TimeModal>
        <div>
          <Button
            text="취소"
            className="sub"
            padding="10px 24px"
            borderRadius="5px"
            fontSize="14px"
            onClick={() => close()}
          />
          <Button
            text="확인"
            className="main"
            padding="11px 24px"
            borderRadius="5px"
            fontSize="14px"
            onClick={receive ? handleReceive : handleReturn}
          />
        </div>
      </Modal>
    </S.SchedLi>
  );
}
