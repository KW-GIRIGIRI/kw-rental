import Button from "../../modules/Button";
import iconCalendar from "../../assets/icon-calendar.svg"
import * as S from "./style"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCartEquip() {
  const [date, setDate] = useState({
    cYear: null,
    cDate: null,
    cDayText: null
  })
  const [week, setWeek] = useState(null)
  const navigate = useNavigate();
  
  // 년도 기준 주차 계산 함수
  const handleGetNumberOfWeek = (pDate) => {
    const pickDate = new Date(pDate)
    const firstDayOfYear = new Date(date.cYear, 0, 1);
    const pastDaysOfYear = (pickDate - firstDayOfYear) / 86400000;
    const week = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7)
    setWeek(week)
  }

  // 장바구니 추가 함수
  const handleAddCart = () => {
    handleGetNumberOfWeek(date.cDate)
  }

  // inp min-max 관리 함수
  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  // day -> text 변환 함수
  const handleDateChangeText = (date = new Date()) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const pDate = new Date(date)

    return `${pDate.getMonth() + 1}월 ${pDate.getDate()}일(${days[pDate.getDay()]})`
  }

  // inp date 관리 함수
  const handleDate = (e) => {
    let pickDate = e.target.value
    const year = new Date(pickDate).getFullYear()
    const day = new Date(pickDate).getDay()
    if (day === 5 || day === 6 || day === 0) {
      alert('대여 불가능한 요일입니다.')
      pickDate = handleSetMon(pickDate, day)
    }
    const dayText = handleDateChangeText(pickDate)
    setDate({
      cYear: year,
      cDate: pickDate,
      cDayText: dayText
    })
  }

  const handleSetMon = (date, num) => {
    const returnDate = new Date(date)
    if (num === 5) returnDate.setDate(returnDate.getDate() + 3)
    else if (num === 6) returnDate.setDate(returnDate.getDate() + 2)
    else if (num === 0) returnDate.setDate(returnDate.getDate() + 1)

    return returnDate
  }
  
  useEffect(() => {
    let today = new Date()
    const day = today.getDay()
    if (day === 5 || day === 6 || day === 0) {
      today = handleSetMon(today, day)
    } else {
      today = new Date(handleNextDay(1))
    }
    const dayText = handleDateChangeText(today)
    setDate({
      cYear: today.getFullYear(),
      cDate: today,
      cDayText: dayText
    })
  }, [])

  return (
    <S.Wrapper>
      <S.Form>
        <S.DescCont>대여 기자재 개수</S.DescCont>
        <S.InpWrapper>
          <S.Select name="equipCount" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </S.Select> 대
        </S.InpWrapper>
        <S.DescCont>기자재 수령일 ~ 반납일</S.DescCont>
        <S.InpWrapper>
          <S.DateCont>
            <S.DateImg src={iconCalendar} alt="" />
            {date.cDayText}
            <S.DateInp type="date"
              onChange={handleDate}
              defaultValue={handleNextDay(1)}
              min={handleNextDay(1)}
              max={handleNextDay(31)}
            />
          </S.DateCont>
          <span>~</span>
          <S.DateCont>
            {date.cDayText}
            <S.DateInp type="date"
              // disabled // 최대 대여 가능 일수가 1 이상일 때 false
              defaultValue={handleNextDay(2)}
              min={handleNextDay(2)}
              max={handleNextDay(2)}
              />
          </S.DateCont>
        </S.InpWrapper>
      </S.Form>
      <Button onClick={handleAddCart} className="main" text="기자재 담기" padding="15px 23px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0"/>
      <Button onClick={() => navigate(-1)} className="sub" text="뒤로 가기" padding="15px 23px" borderRadius="10px" fontSize="15px"/>
    </S.Wrapper>
  )
}
