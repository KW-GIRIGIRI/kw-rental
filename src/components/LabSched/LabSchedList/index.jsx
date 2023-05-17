import dayjs from "dayjs"
import { useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import CancelModal from "../CancelModal"
import * as S from "./style"

export default function LabSchedList({ lab, renterList, receive }) {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null)
  const [info, setInfo] = useState({})
  const [cancelModal, setCancelModal] = useState(false)
  const { Modal, open, close } = useModal()

  const handleCheckboxChange = (idx) => {
    if (selectedCheckbox === idx)
      setSelectedCheckbox(null)
    else
      setSelectedCheckbox(idx)
  }

  const handleCreateRental = (학번) => {
    // 랩실키 수령 완료 api post
  }

  const handleCancelModal = (item) => {
    setInfo(item)
    setCancelModal(true)
  }

  const handleProcess = () => {
    if (selectedCheckbox !== null)
      open()
  }

  const handleConfirmation = () => {
    // 수령 확정

    // 반납 확정
  }

  return (
    <S.SchedLi>
      <S.Lab>
        <p>{lab}</p>
        {
          lab === "한울관" ?
            <S.RenterNum>총 {renterList.reduce((a, c) => a + c.num, 0)}명 대여</S.RenterNum> :
            <></>
        }

        <S.TimeCont>
          15:10
        </S.TimeCont>
        <Button
          className={selectedCheckbox === null ? "gray" : "main"}
          text={receive ? "키 수령" : "키 반납"}
          borderRadius="20px"
          padding="5.5px 7.5px"
          fontSize="13px"
          onClick={handleProcess}
        />

      </S.Lab>
      <S.RenterUl>
        {
          renterList.map((renterItem, idx) => (
            <S.RenterLi className={renterList.length === 1 ? "only" : ""} key={idx}>
              <S.CheckInp
                type="checkbox"
                onClick={() => handleCheckboxChange(idx)}
                className={selectedCheckbox === idx ? "checked" : ""}
              />
              <p>{renterItem.renter}</p>
              <p>{renterItem.ID}</p>
              <p>{renterItem.num}</p>
              <p>{renterItem.phoneNumber}</p>
              <Button text="대여취소" width="75px" borderRadius="20px" padding="5px 7px" className="sub" fontSize="14px" onClick={() => handleCancelModal(renterItem)} />
            </S.RenterLi>
          ))
        }
      </S.RenterUl>
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
          {selectedCheckbox !== null ? renterList[selectedCheckbox].renter + " / " + dayjs().format("M월 D일(dd) HH:mm") : ""}
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
