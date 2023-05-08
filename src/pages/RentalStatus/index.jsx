import * as S from "./style"
import EquipSched from "../../components/EquipSched"
import iconCalendar from "../../assets/icon-calendar.svg"
import DatePicker from "../../components/DatePicker"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

export default function RentalStatus() {
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs()
  })

  const handleGetDatePicker = e => {
    const position = e.target.getBoundingClientRect()
    const top = position.top + position.height, left = position.left
    setCalendar(prev => ({
      ...prev,
      visible: true,
      top: top,
      left: left,
    }))
  }

  useEffect(() => {
    if (calendar.date.day() > 4) 
      setCalendar(prev => ({
        ...prev,
        date: calendar.date.add(1, 'week').startOf('week').add(1, 'day')
      }))
    else if (calendar.date.day() === 0) 
      setCalendar(prev => ({
        ...prev,
        date: calendar.date.add(1, 'day')
      }))
  },[])
  
  return (
    <S.Wrapper>
      <S.Div>
        <S.Title>대여 현황</S.Title>
        {calendar && <DatePicker calendar={calendar} setCalendar={setCalendar} />}
        <S.DateCont onClick={handleGetDatePicker}>
            <img src={iconCalendar} alt="" />
            <span>{calendar.date.format('M월 D일(dd)')}</span>
        </S.DateCont>
      </S.Div>
      <EquipSched date={calendar.date} />
    </S.Wrapper>
  )
}