import { useEffect } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import * as S from "./style"

export default function CancelModal({cancelModal, setCancelModal,}) {
  const { Modal, open, close } = useModal()

  const handleCancelRental = () => {
    setCancelModal(false)
    close()
  }

  useEffect(() => {
    cancelModal && open()
    setCancelModal(false)
  }, [cancelModal, close])

  return (
    <Modal className="modify">
      <p>대여취소</p>
      <S.Span>해당 기자재를 취소하시겠습니까?</S.Span>
      <S.ProductUl>
        <S.ProductLi>
          <p>기자재</p>
          <p>취소 개수 설정</p>
        </S.ProductLi>
         <S.ProductLi>
          <p>Oculus Quest2</p>
          <S.Select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </S.Select>
        </S.ProductLi>
      </S.ProductUl>
      <div>
        <Button text='대여취소' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px" onClick={handleCancelRental}/>
      </div>
    </Modal>
  )
}
