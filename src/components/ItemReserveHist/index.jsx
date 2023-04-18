import * as S from "./style"
import ItemResHistTbl from "./ItemResHistTbl";
import iconCalendar from "../../assets/icon-calendar-black.svg"
import { useState } from "react";
import dayjs from "dayjs"
import updateLocale from "dayjs/plugin/updateLocale"
import DatePicker from "../DatePicker";

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "일", "월", "화", "수", "목", "금", "토"
  ]
})

export default function ItemReserveHist() {
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
  
  const 가짜품목대여이력데이터 = [
    {
      id: 1,
      returnStatus: '정상 반납',
      pickupDate: '23년 03월 11일',
      returnDate: '23년 03월 12일',
      renter: '박다은',
      note: '',
    },
    {
      id: 2,
      returnStatus: '정상 반납',
      pickupDate: '23년 03월 09일',
      returnDate: '23년 03월 10일',
      renter: '이영현',
      note: '',
    },
    {
      id: 3,
      returnStatus: '불량 반납',
      pickupDate: '23년 03월 01일',
      returnDate: '23년 03월 02일',
      renter: '홍길동',
      note: '렌즈 손상',
    },
    {
      id: 4,
      returnStatus: '정상 반납',
      pickupDate: '23년 02월 14일',
      returnDate: '23년 02월 15일',
      renter: '김효리',
      note: '',
    },
  ]
  return (
    <>
      <S.DateCont onClick={handleGetDatePicker}>
        <img src={iconCalendar} alt="" />
        <span>{calendar.date.format('M월 D일(dd)')}</span>
      </S.DateCont>
      <span>~</span>
      <S.DateCont  onClick={handleGetDatePicker}>
        <img src={iconCalendar} alt="" />
        <span>{calendar.date.add(7, 'days').format('M월 D일(dd)')}</span>
      </S.DateCont>
      <ItemResHistTbl data={가짜품목대여이력데이터} />
      {calendar && <DatePicker calendar={calendar} setCalendar={setCalendar} />}
    </>
  )
}