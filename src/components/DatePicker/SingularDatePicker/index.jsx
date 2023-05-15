import dayjs from "dayjs";
import { useEffect, useState } from "react";
import iconCalendar from "../../../assets/icon-calendar.svg";
import DatePicker from "..";
import * as S from "./style";
import { useDispatch } from "react-redux";
import { setSingularDate } from "../../../store/reducer/datePickerSlice";

export default function SingularDatePicker({ initial }) {
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(initial || 0, "days"),
  });

  const dispatch = useDispatch();

  const handleGetDatePicker = (e) => {
    const position = e.target.getBoundingClientRect();
    const top = position.top + position.height,
      left = position.left;
    setCalendar((prev) => ({
      ...prev,
      visible: true,
      top: top,
      left: left,
    }));
  };

  useEffect(() => {
    dispatch(setSingularDate(dayjs(calendar.date).format("YYYY-MM-DD")));
  }, [calendar.date]);

  return (
    <>
      <S.DateCont onClick={handleGetDatePicker}>
        <img src={iconCalendar} alt="" />
        <span>{calendar.date.format("M월 D일(dd)")}</span>
      </S.DateCont>
      {calendar && (
        <DatePicker
          className="user"
          initial={initial}
          calendar={calendar}
          setCalendar={setCalendar}
        />
      )}
    </>
  );
}
