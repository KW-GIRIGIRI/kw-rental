import { cancelRentalSpec } from "../../../../api/api"
import { category } from "../../../../data/category"
import { rentalStatus } from "../../../../data/rentalStatus"
import useModal from "../../../../hook/useModal"
import Button from "../../../../modules/Button"
import Image from "../../../../modules/Image"
import * as S from "../../style"

export default function StateListComp({ item, handleGetCurrentRental }) {
  const { Modal, open, close } = useModal()

  const handleCancel = async (item) => {
    const data = {
      "amount": item.rentalAmount
    }

    const res = await cancelRentalSpec(item.id, JSON.stringify(data))

    res === 204 && close()
    handleGetCurrentRental()
  }

  return (
    <S.ItemLi>
      <Image
        src={item.imgUrl}
        width="50px"
        height="50px"
        borderRadius="5px"
      />
      <S.NameEquip>
        <p>{category.map(i => i.value === item.category && i.label)}</p>
        <p>{item.modelName}</p>
      </S.NameEquip>
      <span>{item.rentalAmount}</span>
      <S.State>{rentalStatus[item.status]}</S.State>
      {item.status === "RESERVED" && (
        <Button
          text="대여취소"
          className="shadow sub"
          borderRadius="20px"
          fontSize="14px"
          width="70px"
          height="27px"
          onClick={open}
        />
      )}
      <Modal>
        <p>기자재 대여를 취소하시겠습니까?</p>
        <div>
          <Button
            onClick={close}
            text="아니오"
            className="sub"
            padding="11px 34px"
            borderRadius="5px"
          />
          <Button
            onClick={() => handleCancel(item)}
            text="네"
            className="main"
            padding="12px 34px"
            borderRadius="5px"
          />
        </div>
      </Modal>
    </S.ItemLi>
  )
}
