import { useEffect } from "react"
import useModal from "../../../hook/useModal"
import Button from "../../../modules/Button"
import Image from "../../../modules/Image"
import WeekPicker from "../../WeekPicker"
import iconCalendar from "../../../assets/icon-calendar-black.svg"
import * as S from "./style"
import { DateInp, InpWrapper } from "../../AddCartEquip/style"

export default function ModifyModal({modal, setModal}) {
  const { Modal, open, close } = useModal()

  const handleClose = () => {
    close()
    setModal(false)
  }

  useEffect(() => {
    modal && open()
  }, [modal])

  return (
    <Modal className="modify">
      <p>담은 기자재 수정</p>
      <S.Div className="item">
       <Image width="54px" height="54px" borderRadius="10px" src='https://cdn.pixabay.com/photo/2014/08/29/14/53/camera-431119_1280.jpg' alt='' />
        <S.ItemWrap>
          {/* <p>{category.map(value => 
              value.value === item.category && value.label
            )}</p> */}
            <p>카메라</p>
            <p>MIRRORLESS SONY a6600</p>
        </S.ItemWrap>
      </S.Div>
      <p>대여 기자재 수정</p>
      <S.SelectCount name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </S.SelectCount>
      <p>기자재 수령일~반납일</p>
      <InpWrapper className="item">
          <S.DateCont>
            <S.DateImg src={iconCalendar} alt="" />
            2월 28일(화) 
            <DateInp type="date" />
          </S.DateCont>
          <span>~</span>
          <S.DateCont>
            2월 28일(화) 
            <DateInp type="date"  />
          </S.DateCont>
        </InpWrapper>
        <p>대여 현황</p>
        <WeekPicker modify='true'/>
          <div>
          <Button text='수정하기' className='main' padding="11px 24px" borderRadius="5px" fontSize="14px"/>
          <Button text='취소하기'className='sub' padding="10px 24px" borderRadius="5px" fontSize="14px" onClick={handleClose}  />
        </div>
      </Modal>
  )
}
