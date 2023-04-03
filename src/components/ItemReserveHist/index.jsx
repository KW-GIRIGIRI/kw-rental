import * as S from "./style"
import iconExcel from "../../assets/icon-excel.svg";
import ItemResHistTbl from "./ItemResHistTbl";
import iconCalendar from "../../assets/icon-calendar-black.svg"
import { useState } from "react";

// 품목 예약/사용 이력 컴포넌트
export default function ItemReserveHist() {
  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  // 추후 수정
  const [date, setDate] = useState(handleNextDay(0))

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
    <S.Div>
      <S.DateCont>
        <img src={iconCalendar} alt="" />
        <span>3월 12일(화)</span>
        <S.DateInp type="date"
          min={handleNextDay(1)}
          max={handleNextDay(0)}
        />
      </S.DateCont>
      <span> ~ </span>
      <S.DateCont>
        <img src={iconCalendar} alt="" />
        <span>3월 12일(화)</span>
        <S.DateInp type="date"
          // min={handleNextDay(1)}
          max={handleNextDay(0)}
        />
      </S.DateCont>
      <S.button onClick={() => { }}><S.img src={iconExcel} /></S.button>
      <ItemResHistTbl data={가짜품목대여이력데이터} />
    </S.Div>
  )
}