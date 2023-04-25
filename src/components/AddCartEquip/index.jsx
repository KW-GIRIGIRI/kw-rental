import Button from "../../modules/Button";
import iconCalendar from "../../assets/icon-calendar.svg"
import * as S from "./style"
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addCartEquip } from "../../api/api";
import useModal from "../../hook/useModal";
import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import toArray from "dayjs/plugin/toArray"
import DatePicker from "../DatePicker";

dayjs.extend(updateLocale)
dayjs.extend(toArray)

dayjs.updateLocale('en', {
  weekdays: [
    "일", "월", "화", "수", "목", "금", "토"
  ]
})

export default function AddCartEquip({productCount}) {
  const amountRef = useRef()
  const navigate = useNavigate();
  const params = useParams()
  const { Modal, open, close } = useModal()
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(1, 'days')
  })

  const handleGetDatePicker = e => {
    e.preventDefault()
    const position = e.target.getBoundingClientRect()
    const top = position.top + position.height, left = position.left
    setCalendar(prev => ({
      ...prev,
      visible: true,
      top: top,
      left: left,
    }))
  }

  const handleAddCart = async () => {
     const data = {
      "equipmentId" : parseInt(params.id),
      "rentalStartDate" : dayjs(calendar.date).format('YYYY-MM-DD').split('-').map(i => parseInt(i)),
      "rentalEndDate" : dayjs(calendar.date).add(1, 'days').format('YYYY-MM-DD').split("-").map(i => parseInt(i)),
      "amount" : parseInt(amountRef.current.value)
     }

    const response = await addCartEquip(JSON.stringify(data))
    response.includes('/inventories') && open()
  }

  const handleSetMon = (num) => {
    setCalendar(prev => ({
      ...calendar,
      date : calendar.date.add(num, 'days')
    }))
  }

  useEffect(() => {
    switch (calendar.date.day()) {
      case 5:
        handleSetMon(3);
        break;
      case 6: 
        handleSetMon(2);
        break;
      case 0: 
        handleSetMon(1);
        break;
      default:
        break;
    }
  }, [])
  
  return (
    <S.Wrapper>
      <S.Form>
        <S.DescCont>대여 기자재 개수</S.DescCont>
        <S.InpWrapper>
          <S.Select name="equipCount" id="" ref={amountRef}>
            {
              Array(productCount).fill().map((_, i) => 
                <option key={i} value={i+1}>{i+1}</option>
              )
            }
          </S.Select> 대
        </S.InpWrapper>
        <S.DescCont>기자재 수령일 ~ 반납일</S.DescCont>
        <S.InpWrapper>
          <S.DateCont onClick={handleGetDatePicker}>
            <S.DateImg src={iconCalendar} alt="" />
             {dayjs(calendar.date).format('M월 D일(dd)')}
          </S.DateCont>
          {calendar && <DatePicker calendar={calendar} setCalendar={setCalendar} />}
          <span>~</span>
          <S.DateCont>
            {dayjs(calendar.date).add(1, 'days').format('M월 D일(dd)')}
          </S.DateCont>
        </S.InpWrapper>
      </S.Form>
      <Button onClick={handleAddCart} className="main" text="기자재 담기" padding="15px 23px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0"/>
      <Button onClick={() => navigate(-1)} className="sub" text="뒤로 가기" padding="15px 23px" borderRadius="10px" fontSize="15px" />
      <Modal>
        <p>기자재가 ‘담은 기자재’에 담겼습니다.</p>
        <Button text='담은 기자재 페이지로 이동하기 >' borderRadius='5px' padding='10px 16px' className='main' margin='0 0 10px 0' onClick={()=> {close(); navigate('/inventory')}}/>
      </Modal>
    </S.Wrapper>
  )
}
