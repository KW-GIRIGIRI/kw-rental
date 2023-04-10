import { useEffect, useRef, useState } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import Image from "../../../modules/Image"
import WeekPicker from "../../WeekPicker"
import iconCalendar from "../../../assets/icon-calendar-black.svg"
import * as S from "./style"
import { DateInp, InpWrapper } from "../../AddCartEquip/style"
import { category } from "../../../data/category"
import { getProductDetail } from "../../../api/api"

export default function ModifyModal({modal, setModal, item, handleModifyCartEquip}) {
  const { Modal, open, close } = useModal()
  const [equip, setEquip] = useState()
  const inpRef = useRef([])

  const handleGetEquip = async () => {
    const response = await getProductDetail(item.id)
    setEquip(response)
  }

  const handleClose = () => {
    close()
    setModal(false)
  }

  const handleModify = () => {
    const data = {
      "rentalStartDate" : inpRef.current.rentalStartDate.value.split("-").map(i => parseInt(i)),
      "rentalEndDate" : inpRef.current.rentalEndDate.value.split("-").map(i => parseInt(i)),
      "amount" : parseInt(inpRef.current.amount.value)
    }

    handleModifyCartEquip(equip.id, JSON.stringify(data)) && close() && setModal(false)
  }

  useEffect(() => {
    handleGetEquip()
  }, [])

  useEffect(() => {
    modal && open()
    setModal(false)
  }, [modal, close])

  return (
    equip &&
    <Modal className="modify">
      <p>담은 기자재 수정</p>
      <S.Div>
        <Image width="54px" height="54px" borderRadius="10px" src={equip.imgUrl} alt='' />
        <S.ItemWrap>
          <p>{category.map(value => 
              value.value === equip.category && value.label
            )}</p>
          <p>{equip.modelName}</p>
        </S.ItemWrap>
      </S.Div>
      <p>대여 기자재 수정</p>
        <S.SelectCount name="" id="" ref={el => inpRef.current.amount = el} defaultValue={item.amount}> 
        {
          Array(equip.totalQuantity).fill().map((_, i) =>  <option key={i} value={i + 1}>{i + 1}</option>)
        }
      </S.SelectCount>
      <p>기자재 수령일~반납일</p>
      <InpWrapper className="item">
          <S.DateCont>
            <S.DateImg src={iconCalendar} alt="" />
            {item.rentalStartDate} 
            <DateInp type="date"  ref={el => inpRef.current.rentalStartDate = el} defaultValue={item.rentalStartDate} />
          </S.DateCont>
          <span>~</span>
          <S.DateCont>
            {item.rentalEndDate}
            <DateInp type="date"  ref={el => inpRef.current.rentalEndDate = el} defaultValue={item.rentalEndDate} />
          </S.DateCont>
        </InpWrapper>
        <p>대여 현황</p>
        <WeekPicker modify='true'/>
          <div>
          <Button text='수정하기' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px" onClick={handleModify}/>
          <Button text='취소하기'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={handleClose}  />
        </div>
      </Modal>
  )
}
