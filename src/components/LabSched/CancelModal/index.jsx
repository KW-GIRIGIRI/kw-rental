import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cancelRentalSpec } from "../../../api/api"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import { asyncGetLabReceived, asyncGetReturned } from "../../../store/reducer/authReceiveSlice"
import * as S from "./style"

export default function CancelModal({
  info,
  receive,
  cancelModal,
  setCancelModal,
}) {
  const { Modal, open, close } = useModal()
  const dispatch = useDispatch()
  const selectDate = useSelector((state) => state.datePicker.singularDate);

  const handleCancelRental = async () => {
    const data = {
      "amount" : info.rentalAmount
    }

    const res = await cancelRentalSpec(info.id, JSON.stringify(data))

    if (res === 204) {
      setCancelModal(false)
      close()
      receive ? dispatch(asyncGetLabReceived(selectDate)) : dispatch(asyncGetReturned(selectDate))
    }
      
    
  }

  useEffect(() => {
    cancelModal && open()
  }, [cancelModal, open, close])

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
          <p>{info.renterName} {info.memberNumber}</p>
          <p>{info.rentalAmount}</p>
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
