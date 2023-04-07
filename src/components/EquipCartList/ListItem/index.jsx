import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteCartEquip } from "../../../api/api"
import { category } from "../../../data/category"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import Image from "../../../modules/Image"
import ModifyModal from "../ModifyModal"
import * as S from "./style"

export default function ListItem({ item, handleDeleteInventory }) {
  const [modal, setModal] = useState(false)
  const { Modal, open, close } = useModal()

  return (
    <S.ListLi>
      <ModifyModal modal={modal} setModal={setModal} />
      <Modal>
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <Button onClick={close} text='취소' className='sub' padding='11px 34px' borderRadius='5px' />
          <Button onClick={() => handleDeleteInventory(item.id)} text='삭제' className='main' padding='12px 34px' borderRadius='5px' />
        </div>
      </Modal>
      
      <Image width="72px" height="72px" borderRadius="10px" src={item.imgUrl} alt='' />
      <S.ItemWrap>
        <p>{category.map(value => 
            value.value === item.category && value.label
            )}</p>
        <p>{item.modelName}</p>
      </S.ItemWrap>
      <p>1</p>
      <p>{item.rentalStartDate}</p>
      <p>{item.rentalEndDate}</p>
      <S.BtnWrap>
        <button onClick={() => setModal(true)}>수정</button>
        <button onClick={open}>삭제</button>
      </S.BtnWrap>
    </S.ListLi>
  )
}
