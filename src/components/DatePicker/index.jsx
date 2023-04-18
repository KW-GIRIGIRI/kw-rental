import * as S from "./style"  
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import weekOfYear from "dayjs/plugin/weekOfYear"
import iconRightArrow from "../../assets/icon-rightArrow-gray.svg"
import iconLeftArrow from "../../assets/icon-leftArrow-gray.svg"
import { useRef } from "react";

dayjs.extend(objectPlugin);
dayjs.extend(weekdayPlugin);
dayjs.extend(weekOfYear)

export default function DatePicker({ checkWeek, calendar, setCalendar }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [arrayOfDays, setArrayOfDays] = useState([]);
  const WrapRef = useRef()

  const handleOutsideClick = e => {
    if(WrapRef.current === e.target) {
      setCalendar(prev => ({
        ...prev,
        visible: false
      }))
    }
  }

  const handleScrollClose = e => {
    setCalendar(prev => ({
      ...prev,
      visible: false
    }))
  }

  const getDate = (date) => {
    return dayjs(`${date.year}-${date.month + 1}-${date.day}`)
  }

  const handleGetDay = (date) => {
    setCalendar(prev => ({
      ...prev,
      visible: false,
      date : dayjs(`${date.year}-${date.month + 1}-${date.day}`)
    }))
  }

  // 수정
  useEffect(() => {
      window.addEventListener('scroll', handleScrollClose)
      return () => {
        window.removeEventListener('scroll', handleScrollClose)
      }
  }, []) 

  const nextMonth = e => {
    const plus = currentMonth.add(1, "month");
    setCurrentMonth(plus);
  };

  const prevMonth = e => {
    const minus = currentMonth.subtract(1, "month");
    setCurrentMonth(minus);
  }; 

  const renderHeader = () =>{
    return (
      <S.Header>
        <button onClick={() => prevMonth()}>
          <img src={iconLeftArrow} alt="이전 달 보기" />
        </button>
        <span>{currentMonth.format('YY년 MM월')}</span>
        <button onClick={() => nextMonth()}>
          <img src={iconRightArrow} alt="다음 달 보기" />
        </button>
      </S.Header>
    );
  };

  const renderDays = () => { 
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return <S.DayWrap>{days.map(i => <span key={i}>{i}</span>)}</S.DayWrap>
  };

  const formateDateObject = date => {
    const clonedObject = {...date.toObject()};
    const formatedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === currentMonth.month(),
    };
    return formatedObject;
  };
  
  const getAllDays = () => {
    let currentDate = currentMonth.startOf("month").weekday(0);
    const nextMonth = currentMonth.add(1, "month").month();
    let allDates = [];
    let weekDates = [];
    let weekCounter = 1;
    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formated = formateDateObject(currentDate);
      weekDates.push(formated);
      if (weekCounter === 7) {
        allDates.push({ dates: weekDates });
        weekDates = [];
        weekCounter = 0;
      }
      weekCounter++;
      currentDate = currentDate.add(1, "day");
    }
    setArrayOfDays(allDates);
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d, i) => {
        days.push(
          <S.CellWrap checkWeek={checkWeek}
            onClick={() => handleGetDay(d)}
            className={!d.isCurrentMonth || getDate(d) < dayjs() || getDate(d) > dayjs().add(31, 'days') || getDate(d).day() === 5 || getDate(d).day() === 6 || getDate(d).day() === 0  ? "disabled" : ""} key={i}>
            {d.day}
          </S.CellWrap>
          );
      });
      rows.push(
        <S.RowWrap checkWeek={checkWeek} key={index}>
          {days}
        </S.RowWrap>
      );
      days = [];
    });
    return <>{rows}</>;
  };

  useEffect(() => {
    getAllDays();
  }, [currentMonth]);

  return (
    calendar.visible &&
    <S.Container ref={WrapRef} onClick={handleOutsideClick}>
      <S.Wrap top={calendar.top} left={calendar.left} onClick={e => e.stopPropagation()}>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </S.Wrap>
    </S.Container>
  )
}