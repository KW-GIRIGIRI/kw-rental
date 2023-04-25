import * as S from "./style"
import Button from "../../../modules/Button"
import { useNavigate } from "react-router-dom"
import EquipCartList from "../../../components/EquipCartList"
import { deleteAllCartEquip, deleteCartEquip, getCartEquip, modifyCartEquip } from "../../../api/api"
import { useEffect, useState } from "react"
import useModal from "../../../hook/useModal"

export default function EquipmentBox() {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const { Modal, open, close } = useModal()

  const handleDeleteCart = async () => {
    const response = await deleteAllCartEquip()
    response === 204 && close()
    handleGetCart()
  }

  const handleGetCart = async () => {
    const response = await getCartEquip()
    setCart(response)
  }

  const handleDeleteInventory = async (id) => {
    const response = await deleteCartEquip(id)
    response === 204 && handleGetCart()
  }

  const handleModifyCartEquip = async (id, data) => {
    await modifyCartEquip(id, data)
    handleGetCart()
  }

  useEffect(() => {
    handleGetCart()
  }, [])

  return (
    <>
      {
        cart.length ?
          <>
            <S.Div>
              <Button onClick={open} text='전체 삭제' className='sub shadow' padding='7px 10px' borderRadius='50px' />
            </S.Div>
            <EquipCartList cart={cart} handleDeleteInventory={handleDeleteInventory} handleModifyCartEquip={handleModifyCartEquip} />
            <S.MainBtnWrap>
              <Button onClick={() => navigate('/inventory/application')} className="main" text="대여하기" padding="16px 36px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
              <Button onClick={() => navigate('/')} className="sub" text="목록보기" padding="16px 36px" borderRadius="10px" fontSize="15px" />
            </S.MainBtnWrap>
            <Modal>
              <p>정말 삭제하시겠습니까?</p>
              <div>
                <Button onClick={close} text='취소' className='sub' padding='11px 34px' borderRadius='5px' />
                <Button onClick={handleDeleteCart} text='삭제' className='main' padding='12px 34px' borderRadius='5px' />
              </div>
            </Modal>
          </> 
          : <S.DescText>담은 기자재가 없습니다.</S.DescText>
      }
    </>
  )
}
