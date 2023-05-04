import { useEffect, useState } from "react"
import iconLeftArrow from "../../assets/icon-leftArrow.svg"
import iconRightArrow from "../../assets/icon-rightArrow.svg"
import iconCalendar from "../../assets/icon-calendar.svg"
import * as S from "./style"
import DatePicker from "../DatePicker"
import updateLocale from "dayjs/plugin/updateLocale"
import dayjs from "dayjs"

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "일", "월", "화", "수", "목", "금", "토"
  ]
})

export default function WeekPicker({ modify }) {
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

  const handleWeekNumberByThurFnc = () => {
    const firstDayOfWeek = calendar.date.startOf('month').day() === 0 ? 7 : calendar.date.startOf('month').day()
    const lastDayOfWeek = calendar.date.endOf('month').day()
    const lastDay = calendar.date.endOf('month').date()

    const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
    const lastWeekCheck = lastDayOfWeek === 1 || lastDayOfWeek === 2 || lastDayOfWeek === 3;

    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

    let weekNo = Math.ceil((firstDayOfWeek - 1 + calendar.date.date()) / 7)

    if (weekNo === 1 && firstWeekCheck) weekNo = 'prev'
    else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next'
    else if (firstWeekCheck) weekNo = weekNo - 1;

    return weekNo;
  }

  const handleCalcDate = () => {
    let weekNo = handleWeekNumberByThurFnc()
    if (weekNo === 'prev') weekNo = handleWeekNumberByThurFnc(calendar.date.subtract(-1, 'month'));
    if (weekNo === 'next') weekNo = 1;
    return weekNo;
  }

  const handleDate = num => {
    setCalendar(prev => ({
      ...prev,
      date : calendar.date.add(num, 'week')
    }))
  }

  const handleWeekPrint = (num) => {
    const pDate = calendar.date.startOf('week').add(num, 'days')
    
    return (
      <S.DateLi modify={modify} key={num}>
      <S.DateTit modify={modify}>{pDate.format('M월 D일(dd)')}</S.DateTit>
        <S.DateSubTit modify={modify} className={pDate >= dayjs() ? false : 'disabled'}>
          {num} {/* 대여 가능 개수 */}
        </S.DateSubTit>
      </S.DateLi>
    )
  }

  useEffect(() => {
    handleCalcDate()
  }, [calendar])
  
  useEffect(() => {
   if (calendar.date.day() > 4 || calendar.date.day() === 0) {
      setCalendar(prev => ({
        ...prev, 
        date: calendar.date.add(1, 'week')
      }))
   }
  handleCalcDate()
  }, [])

  return (
    <>
      <S.DateWrap modify={modify}>
        <S.NextBtn  modify={modify} 
          disabled={calendar.date.week() === dayjs().week()}
          onClick={() => handleDate(-1)}>
          <img src={iconLeftArrow} alt="이전 주 보기" />
        </S.NextBtn>
        <S.DateCont modify={modify} onClick={handleGetDatePicker}>
          <S.DateImg modify={modify} src={iconCalendar} alt="" />
          {calendar.date.format(`YY년 M월 ${handleCalcDate()}째 주`)}
        </S.DateCont>
        {calendar && <DatePicker checkWeek={true} calendar={calendar} setCalendar={setCalendar} />}
        <S.NextBtn modify={modify} 
          disabled={calendar.date.week() === dayjs().add(31, 'days').week()}
          onClick={() => handleDate(1)}>
          <img src={iconRightArrow} alt="다음 주 보기" />
        </S.NextBtn>
      </S.DateWrap>
      <S.DateUl modify={modify}>
        {
          modify ? <></> :
          <S.DateLi>
            <S.DateTit>날짜</S.DateTit>
            <S.DateSubTit className="text">대여 가능 개수</S.DateSubTit>
          </S.DateLi>
        }
        {
          [...Array(4)].map((v,i) => i+1).map(i => handleWeekPrint(i))
        }
      </S.DateUl>
    </>
  )
}
