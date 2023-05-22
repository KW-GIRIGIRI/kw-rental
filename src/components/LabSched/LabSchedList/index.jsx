import dayjs from "dayjs"
import { useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import CancelModal from "../CancelModal"
import * as S from "./style"

export default function LabSchedList({ acceptTime, lab, renterList, receive }) {
  const [info, setInfo] = useState({})
  const [cancelModal, setCancelModal] = useState(false)
  const { Modal, open, close } = useModal()

  const handleCancelModal = (item) => {
    setInfo(item)
    setCancelModal(true)
  }
  
  const handleConfirmation = () => {
    // 수령 확정

    // 반납 확정
  }

  return (
    <S.SchedLi>
      <S.Lab>
        <p>{lab}</p>
        {lab === "hanul" && <S.RenterNum>총 {renterList.reduce((a, c) => a + c.rentalAmount, 0)}명 대여</S.RenterNum>}
        {
          acceptTime ? 
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
              <Button text="대여취소" width="75px" borderRadius="20px" padding="5px 7px" className="sub" fontSize="14px" onClick={() => handleCancelModal(renterItem)} />
            </S.RenterLi>
          ))
        }
      </ul>
      {cancelModal &&
        <CancelModal
          renter={info.renter}
          ID={info.ID}
          num={info.num}
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
            onClick={handleConfirmation}
          />
        </div>
      </Modal>
    </S.SchedLi>
  );
}
