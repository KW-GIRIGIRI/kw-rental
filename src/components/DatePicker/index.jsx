import * as S from "./style";
import { useLayoutEffect, useState, useRef } from "react";
import dayjs from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import dayOfYear from "dayjs/plugin/dayOfYear"
import weekOfYear from "dayjs/plugin/weekOfYear";
import iconRightArrow from "../../assets/icon-rightArrow-gray.svg";
import iconLeftArrow from "../../assets/icon-leftArrow-gray.svg";
import updateLocale from "dayjs/plugin/updateLocale";
import { useSelector } from "react-redux";

dayjs.extend(objectPlugin);
dayjs.extend(weekdayPlugin);
dayjs.extend(weekOfYear);
dayjs.extend(dayOfYear);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function DatePicker({
  className,
  checkWeek,
  calendar,
  setCalendar,
  allDaysEnabled,
}) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [arrayOfDays, setArrayOfDays] = useState([]);
  const WrapRef = useRef();
  const operationDay = useSelector(
    (state) => state.operationDay.operationDayArr
  );
  const equipment = useSelector((state) => state.modifyEquip.equip);
  const dualDate = useSelector((state) => state.datePicker.dualDate);
  const classList = String(className)

  const handleOutsideClick = (e) => {
    if (WrapRef.current === e.target) {
      setCalendar((prev) => ({
        ...prev,
        visible: false,
      }));
    }
  };

  const handleScrollClose = (e) => {
    setCalendar((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const getDate = (date) => {
    return dayjs(`${date.year}-${date.month + 1}-${date.day}`);
  };

  const handleGetDay = (date) => {
    setCalendar((prev) => ({
      ...prev,
      visible: false,
      date: dayjs(`${date.year}-${date.month + 1}-${date.day}`),
    }));
  };

  useLayoutEffect(() => {
    if (calendar.visible) {
      const timer = setTimeout(() => {
        window.addEventListener("scroll", handleScrollClose);
        window.addEventListener("resize", handleScrollClose);
      }, 200);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScrollClose);
        window.removeEventListener("resize", handleScrollClose);
      };
    }
  }, [calendar.visible]);

  const nextMonth = (e) => {
    const plus = currentMonth.add(1, "month");
    setCurrentMonth(plus);
  };

  const prevMonth = (e) => {
    const minus = currentMonth.subtract(1, "month");
    setCurrentMonth(minus);
  };

  const renderHeader = () => {
    return (
      <S.Header>
        <button
          disabled={
            classList.includes("user") && currentMonth.month() === dayjs().month()
          }
          onClick={() => prevMonth()}
        >
          <img src={iconLeftArrow} alt="이전 달 보기" />
        </button>
        <span>{currentMonth.format("YY년 MM월")}</span>
        <button
          disabled={
            classList.includes("user") && currentMonth.month() === dayjs().month() + 1
          }
          onClick={() => nextMonth()}
        >
          <img src={iconRightArrow} alt="다음 달 보기" />
        </button>
      </S.Header>
    );
  };

  const renderDays = () => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return (
      <S.DayWrap>
        {days.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </S.DayWrap>
    );
  };

  const formateDateObject = (date) => {
    const clonedObject = { ...date.toObject() };
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

  const handleSelectDate = (d) => {
    const plusDay =
      getDate(d).week() <= dayjs(dualDate.firstDate).week()
      ? equipment.maxRentalDays : 7 - operationDay.length + equipment.maxRentalDays
    
    const date = getDate(d).dayOfYear();
    const prevDate = date <= dayjs(dualDate.firstDate).add(plusDay, 'days').dayOfYear()
    const nextDate = date > dayjs(dualDate.firstDate).dayOfYear()

    if (classList.includes('select') && equipment.maxRentalDays) return !prevDate || !nextDate
    return false
  }

  const renderCells = () => {
    const rows = [];
    let days = [];
    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d, i) => {
        if (allDaysEnabled) {
          const isWeekday = [1, 2, 3, 4, 5].includes(getDate(d).day());

          days.push(
            <S.CellWrap
              checkWeek={checkWeek}
              onClick={() => handleGetDay(d)}
              className={!d.isCurrentMonth || !isWeekday ? "disabled" : ""}
              key={i}
            >
              {d.day}
            </S.CellWrap>
          );
          return;
        }

        days.push(
          <S.CellWrap
            checkWeek={checkWeek}
            onClick={() => handleGetDay(d)}
            className={
              !d.isCurrentMonth ||
                !operationDay.includes(getDate(d).day()) ||
                handleSelectDate(d) ||
                (classList.includes("user") && getDate(d) < dayjs()) ||
                (classList.includes("user") && getDate(d) > dayjs().add(31, "days"))
                ? "disabled"
                : ""
            }
            key={i}
          >
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

  useLayoutEffect(() => {
    setCurrentMonth(calendar.date);
  }, [calendar.date]);

  useLayoutEffect(() => {
    getAllDays();
  }, [currentMonth]);

  return (
    calendar.visible && (
      <S.Container ref={WrapRef} onClick={handleOutsideClick}>
        <S.Wrap
          top={calendar.top}
          left={calendar.left}
          onClick={(e) => e.stopPropagation()}
        >
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </S.Wrap>
      </S.Container>
    )
  );
}
