import { useEffect, useState } from "react"
import leftArrow from "../../assets/icon-leftArrow.svg"
import rightArrow from "../../assets/icon-rightArrow.svg"
import * as S from "./style"

export default function WeekPicker() {
  const [date, setDate] = useState({
    cYear: null,
    cMonth: null,
    cWeek: null,
    cWeekNo: null,
  })

  const getNumberOfWeek = (today = new Date()) => {
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7); 
  }

  const weekNumberByThurFnc = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth();
    const date = data.getDate();
    
    const firstDate = new Date(year, month, 1)
    const lastDate = new Date(year, month + 1, 0)
    const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
    const lastDayOfWeek = lastDate.getDay()

    const lastDay = lastDate.getDate();

    const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
    const lastWeekCheck = lastDayOfWeek === 1 || lastDayOfWeek === 2 || lastDayOfWeek === 3;

    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

    let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7)

    if (weekNo === 1 && firstWeekCheck) weekNo = 'prev'
    else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next'
    else if (firstWeekCheck) weekNo = weekNo - 1;

    return weekNo;
  }

  let year, month, weekNo;


  const handleDate = (e) => {
    const inputDate =
      !!e.target ? new Date(e.target.value) : new Date(date.cYear, 0, 5 + (date.cWeek - 1 + e) * 7)

    const week = getNumberOfWeek(inputDate)

    year = inputDate.getFullYear();
    month = inputDate.getMonth() + 1;

    weekNo = weekNumberByThurFnc(inputDate)

    if (weekNo === 'prev') {
      const afterDate = new Date(year, month - 1, 0)
      year = month === 1 ? year - 1 : year;
      month = month === 1 ? 12 : month - 1;
      weekNo = weekNumberByThurFnc(afterDate);
    }
    if (weekNo === 'next') {
      year = month === 12 ? year + 1 : year;
      month = month === 12 ? 1 : month + 1;
      weekNo = 1;
    }
    setDate({
      cYear: year,
      cMonth: month,
      cWeek: week,
      cWeekNo : weekNo
    })
  }

  const handleNextWeek = (num) => {
    handleDate(num)
  }

  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  useEffect(() => {
    const today = new Date()
    const todayWeekNo = weekNumberByThurFnc(today)
    const week = getNumberOfWeek(today)
    setDate({
      cYear: today.getFullYear(),
      cMonth: today.getMonth() + 1,
      cWeek: week,
      cWeekNo: todayWeekNo
    })
  }, [])
  
  return (
    <>
      <S.DateWrap>
        <S.NextBtn
          disabled={date.cWeek === getNumberOfWeek(new Date())}
          onClick={() => handleNextWeek(-1)}>
          <img src={leftArrow} alt="이전 주 보기" />
        </S.NextBtn>
        {
          date && <S.DateCont>{date.cYear}년 {date.cMonth}월 {date.cWeekNo}째 주</S.DateCont>
        }
        <S.DateInp type="date" name="" id="" 
          onChange={handleDate}
          min={handleNextDay(1)}
          max={handleNextDay(31)}
        />
        <S.NextBtn onClick={() => handleNextWeek(1)}>
          <img src={rightArrow} alt="다음 주 보기" />
        </S.NextBtn>
      </S.DateWrap>
      <S.DateUl>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit>대여 가능 개수</S.DateSubTit>
        </S.DateLi>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit>대여 가능 개수</S.DateSubTit>
        </S.DateLi>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit>대여 가능 개수</S.DateSubTit>
        </S.DateLi>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit>대여 가능 개수</S.DateSubTit>
        </S.DateLi>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit>대여 가능 개수</S.DateSubTit>
        </S.DateLi>
      </S.DateUl>
    </>
  )
}
