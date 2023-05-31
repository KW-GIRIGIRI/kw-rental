import dayjs from "dayjs"
import { rentalStatus } from "../../../../data/rentalStatus"
import useModal from "../../../../hook/useModal"
import Button from "../../../../modules/Button"
import * as S from "../../style"

export default function StateListComp({ lab }) {
  const cancelModal = useModal()
  const contactsModal = useModal()

  const 대표자연락망 = [
    {
      이름: "이영현",
      전화번호: "01012341234"
    },
    {
      이름: "박다은",
      전화번호: "01098769876"
    },
  ]

  const onCancel = () => {
    // 취소 구현
    cancelModal.close()
  }


  return (
    <S.HistList className="lab labList">
      <div>
        <p>{dayjs(lab.startDate).format("YY년 MM월 DD일(dd)")}</p>
        <p>~</p>
        <p>{dayjs(lab.startDate).format("YY년 MM월 DD일(dd)")}</p>
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
            대표자연락망.map((keyholder, idx) => (
              <p key={idx}>{keyholder.이름} {keyholder.전화번호}</p>
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
