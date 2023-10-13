import dayjs from "dayjs"
import { cancelRentalSpec, getLabRentalOnSameDate } from "../../../../api/api"
import { rentalStatus } from "../../../../data/rentalStatus"
import useModal from "../../../../hook/useModal"
import Button from "../../../../modules/Button"
import * as S from "../../style"
import { useEffect, useState } from 'react'

export default function StateListComp({ lab, handleGetCurrentRental }) {
  const [contacts, setContacts] = useState([])
  const cancelModal = useModal()
  const contactsModal = useModal()

  const handleGetLabRental = async () => {
    const res = await getLabRentalOnSameDate(lab.reservationId)
    setContacts(res.reservations)
  }

  const onCancel = async () => {
    const data = {
      "amount": lab.amount
    }
    
    const res = await cancelRentalSpec(lab.reservationSpecId, JSON.stringify(data))
    res === 204 && cancelModal.close()
    handleGetCurrentRental()
  }

  useEffect(() => {
    handleGetLabRental()
  }, [])

  return (
    <S.HistList className="lab labList">
      <div>
        <p>{dayjs(lab.startDate).format("YY년 MM월 DD일(dd)")}</p>
        <p>~</p>
        <p>{dayjs(lab.endDate).format("YY년 MM월 DD일(dd)")}</p>
      </div>
      <span>{lab.name === "hanul" ? "한울관" : "화도관"}</span>
      <span>{lab.amount}</span>
      <S.State>{rentalStatus[lab.status]}</S.State>
      <S.BtnWrap>
        {lab.name === "hanul" && (
          <Button
            text="대표자 연락망"
            className="main shadow"
            borderRadius="20px"
            fontSize="14px"
            padding="5px 7px"
            onClick={contactsModal.open}
          />
        )}
        {lab.status === "RESERVED" && (
          <Button
            text="대여취소"
            className="sub shadow"
            borderRadius="20px"
            fontSize="14px"
            padding="5px 7px"
            onClick={cancelModal.open}
          />
        )}
      </S.BtnWrap>
      <cancelModal.Modal>
        <p>랩실 대여를 취소하시겠습니까?</p>
        <div>
          <Button
            onClick={cancelModal.close}
            text="아니오"
            className="sub"
            padding="10px 24px"
            borderRadius="5px"
          />
          <Button
            onClick={onCancel}
            text="네"
            className="main"
            padding="10px 35px"
            borderRadius="5px"
          />
        </div>
      </cancelModal.Modal>
      <contactsModal.Modal className="contacts">
        <p>대표자 연락망</p>
        <div>
          {
            contacts.map((keyholder, idx) => (
              <p key={idx}>{keyholder.name} {keyholder.phoneNumber}</p>
            ))
          }
        </div>
        <div>
          <Button
            onClick={contactsModal.close}
            text="확인"
            className="main"
            padding="10px 20px"
            borderRadius="5px"
          />
        </div>
      </contactsModal.Modal>
    </S.HistList>
  )
}
