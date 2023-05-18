import { useEffect } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import * as S from "./style"

export default function CancelModal({
  renter,
  ID,
  num,
  cancelModal,
  setCancelModal,
}) {
  const { Modal, open, close } = useModal()

  const handleCancelRental = () => {
    setCancelModal(false)
    close()
  }

  useEffect(() => {
    cancelModal && open()
  }, [cancelModal, open, close])

  useEffect(() => {
    if(document.body.style.overflow === "unset")
    setCancelModal(false)
  }, [document.body.style.overflow])

  return (
    <Modal className="modify">
      <p>대여취소</p>
      <S.Span>해당 대여를 취소하시겠습니까?</S.Span>
      <S.ProductUl>
        <S.ProductLi>
          <p>대여자</p>
          <p>인원</p>
        </S.ProductLi>
        <S.ProductLi>
          <p>{renter} {ID}</p>
          <p>{num}</p>
        </S.ProductLi>
      </S.ProductUl>
      <div>
        <Button
          text="대여취소"
          className="main"
          padding="11px 24px"
          borderRadius="5px"
          fontSize="14px"
          onClick={handleCancelRental}
        />
      </div>
    </Modal>
  )
}
