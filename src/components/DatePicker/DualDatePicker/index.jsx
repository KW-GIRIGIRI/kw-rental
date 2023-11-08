import dayjs from "dayjs";
import { useEffect, useState } from "react";
import iconCalendar from "../../../assets/icon-calendar.svg";
import DatePicker from "..";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  setDualLastDate,
  setDualFirstDate,
} from "../../../store/reducer/datePickerSlice";

export default function DualDatePicker({
  firstInitial,
  lastInitial,
  className,
  initialMonth,
  allDaysEnabled,
}) {
  const [firstCalendar, setFirstCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: initialMonth
      ? dayjs().add(firstInitial || 0, "month")
      : dayjs().add(firstInitial || 0, "days"),
  });

  const [lastCalendar, setLastCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: initialMonth
      ? dayjs().add(lastInitial || 0, "month")
      : dayjs().add(lastInitial || 0, "days"),
  });
  const dispatch = useDispatch();
  const operationDay = useSelector(
    (state) => state.operationDay.operationDayArr
  );
  const classList = String(className)

  const handleGetDatePicker = (e, bool) => {
    const position = e.target.getBoundingClientRect();
    const top = position.top + position.height,
      left = position.left;

    bool
      ? setFirstCalendar((prev) => ({
        ...prev,
        visible: true,
        top: top,
        left: left,
      }))
      : setLastCalendar((prev) => ({
        ...prev,
        visible: true,
        top: top,
        left: left,
      }));
  };

  useEffect(() => {
    if (!initialMonth && !!operationDay.length) {
      if (firstCalendar.date.day() < operationDay[0]) {
        setFirstCalendar((prev) => ({
          ...prev,
          date: prev.date.day(operationDay[0]),
        }));
      } else if (
        firstCalendar.date.day() > operationDay[operationDay.length - 1]
      ) {
        setFirstCalendar((prev) => ({
          ...prev,
          date: prev.date.add(1, "week").day(operationDay[0]),
        }));
      }
    }

    if (
      !classList.includes("user") &&
      lastCalendar.date.valueOf() < firstCalendar.date.valueOf()
    ) {
      setLastCalendar((prev) => ({
        ...prev,
        date: dayjs(firstCalendar.date.add(1, "days")),
      }));
    }

    dispatch(setDualFirstDate(dayjs(firstCalendar.date).format("YYYY-MM-DD")));

    if (classList.includes("user")) {
      const first = firstCalendar.date.day();
      let last = first + 1;
      let week = 0;

      while (!operationDay.includes(last)) {
        if (last > 5) {
          last = 0;
          week += 1;
        }
        
        last += 1;
      }

      setLastCalendar((prev) => ({
        ...prev,
        date: firstCalendar.date.add(week, "week").day(last),
      }));
    }
  }, [firstCalendar.date]);

  useEffect(() => {
    if (
      !initialMonth &&
      !classList.includes("user") &&
      lastCalendar.date.valueOf() < firstCalendar.date.valueOf()
      ) {
        setFirstCalendar((prev) => ({
        ...prev,
        date: dayjs(lastCalendar.date.subtract(1, "days")),
      }));
    }
    dispatch(setDualLastDate(dayjs(lastCalendar.date).format("YYYY-MM-DD")));
  }, [lastCalendar.date]);

  useEffect(() => {
    const firstInitialDate = initialMonth
      ? dayjs().add(firstInitial || 0, "month")
      : dayjs().add(firstInitial || 0, "days");

    const lastInitialDate = initialMonth
      ? dayjs().add(lastInitial || 0, "month")
      : dayjs().add(lastInitial || 0, "days");

    if (firstInitial)
      dispatch(setDualFirstDate(firstInitialDate.format("YYYY-MM-DD")));
    else dispatch(setDualFirstDate(dayjs().format("YYYY-MM-DD")));

    if (lastInitial)
      dispatch(setDualLastDate(lastInitialDate.format("YYYY-MM-DD")));
    else dispatch(setDualLastDate(dayjs().format("YYYY-MM-DD")));
  }, [dispatch, firstInitial, initialMonth, lastInitial]);

  return (
    operationDay && (
      <S.InpWrapper className={className}>
        <S.DateCont
          onClick={(e) => handleGetDatePicker(e, 1)}
          className={className}
        >
          <img src={iconCalendar} alt="" />
          <span>
            {dayjs(firstCalendar.date).format(
              !classList.includes("user") ? "YY년 M월 D일(dd)" : "M월 D일(dd)"
            )}
          </span>
        </S.DateCont>
        {firstCalendar && (
          <DatePicker
            className={className}
            calendar={firstCalendar}
            setCalendar={setFirstCalendar}
            allDaysEnabled={allDaysEnabled}
          />
        )}
        <span>~</span>
        <S.DateCont
          onClick={(e) => handleGetDatePicker(e, 0)}
          className={className}
        >
          {!classList.includes("user") && <img src={iconCalendar} alt="" />}
          <span>
            {classList.includes("user")
              ?
              dayjs(lastCalendar.date).format("M월 D일(dd)")
              // dayjs(firstCalendar.date).day() >=
              //   operationDay[operationDay.length - 1]
              //   ? dayjs(lastCalendar.date)
              //     .add(1, "week")
              //     .day(operationDay[0])
              //     .format("M월 D일(dd)")
              //   : dayjs(lastCalendar.date).add(1, "days").format("M월 D일(dd)")
              : dayjs(lastCalendar.date).format("YY년 M월 D일(dd)")}
          </span>
        </S.DateCont>
        {lastCalendar && (
          <DatePicker
            className={classList.includes('user') && 'user select'}
            calendar={lastCalendar}
            setCalendar={setLastCalendar}
            allDaysEnabled={allDaysEnabled}
          />
        )}
      </S.InpWrapper>
    )
  );
}
