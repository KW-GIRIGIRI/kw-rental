import { useEffect, useState } from "react"
import iconLeftArrow from "../../assets/icon-leftArrow.svg"
import iconRightArrow from "../../assets/icon-rightArrow.svg"
import iconCalendar from "../../assets/icon-calendar.svg"
import * as S from "./style"

export default function WeekPicker() {
  const [date, setDate] = useState({
    cYear: null,
    cMonth: null,
    cWeek: null,
    cWeekNo: null,
  })

  // 년도 기준 주차 계산 함수
  const handleGetNumberOfWeek = (today = new Date()) => {
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7); 
  }

  // 목요일 기준 월 주차 계산 함수
  const handleWeekNumberByThurFnc = (data) => {
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

  // input date 관리 함수
  const handleDate = (e) => {
    const inputDate =
      !!e.target ? new Date(e.target.value) : new Date(date.cYear, 0, 5 + (date.cWeek - 1 + e) * 7)

    const week = handleGetNumberOfWeek(inputDate)

    year = inputDate.getFullYear();
    month = inputDate.getMonth() + 1;

    weekNo = handleWeekNumberByThurFnc(inputDate)

    if (weekNo === 'prev') {
      const afterDate = new Date(year, month - 1, 0)
      year = month === 1 ? year - 1 : year;
      month = month === 1 ? 12 : month - 1;
      weekNo = handleWeekNumberByThurFnc(afterDate);
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

  // 가용범위 설정 함수
  const handleNextDay = (days) => {
    let today = new Date();
    today.setDate(today.getDate() + days)
    return today.toISOString().split('T')[0];
  }

  // 대여 현황 출력 함수
  const handleWeekPrint = (num) => {
    const days = ["일","월","화","수","목","금","토"];
    const day = new Date(date.cYear, 0, 1 + num + (date.cWeek - 1) * 7)
    
    const gMonth = day.getMonth() + 1
    const gDate = day.getDate() 
    const gDay = days[day.getDay()]
    const gStringDay = parseInt(day.toISOString().split('T')[0].split('-').join(''))

    const today = parseInt(handleNextDay(0).split('-').join('')) 
    
    return (
        <S.DateLi key={num}>
          <S.DateTit>{gMonth}월 {gDate}일({gDay})</S.DateTit>
        <S.DateSubTit className={gStringDay > today ? false : 'disabled'}>
            {num} {/* 대여 가능 개수 */}
          </S.DateSubTit>
        </S.DateLi>
      )
    }

  useEffect(() => {
    let today = new Date()
    today = today.getDay() >= 4 ? new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000) : new Date()
    
    const todayWeekNo = handleWeekNumberByThurFnc(today)
    const week = handleGetNumberOfWeek(today)
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
          disabled={date.cWeek === handleGetNumberOfWeek(new Date())}
          onClick={() => handleDate(-1)}>
          <img src={iconLeftArrow} alt="이전 주 보기" />
        </S.NextBtn>
        {
          date &&
          <>
            <S.DateCont>
              <S.DateImg src={iconCalendar} alt="" />
              {date.cYear}년 {date.cMonth}월 {date.cWeekNo}째 주
            </S.DateCont>
          </>
        }
        <S.DateInp type="date" name="" id="" 
          value={new Date(date.cYear, 0, 3 + (date.cWeek -1 )* 7).toISOString().split('T')[0]}
          onChange={handleDate}
          min={handleNextDay(1)}
          max={handleNextDay(31)}
        />
        <S.NextBtn
          disabled={date.cWeek  === handleGetNumberOfWeek(new Date(handleNextDay(31)))}
          onClick={() => handleDate(1)}>
          <img src={iconRightArrow} alt="다음 주 보기" />
        </S.NextBtn>
      </S.DateWrap>
      <S.DateUl>
        <S.DateLi>
          <S.DateTit>날짜</S.DateTit>
          <S.DateSubTit className="text">대여 가능 개수</S.DateSubTit>
        </S.DateLi>
        {
          [...Array(4)].map((v,i) => i+1).map(i => handleWeekPrint(i))
        }
      </S.DateUl>
    </>
  )
}
