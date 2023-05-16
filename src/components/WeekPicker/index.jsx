import { useEffect, useState } from "react";
import iconLeftArrow from "../../assets/icon-leftArrow.svg";
import iconRightArrow from "../../assets/icon-rightArrow.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import * as S from "./style";
import DatePicker from "../DatePicker";
import dayjs from "dayjs";
import { getProductAmountFromDate } from "../../api/api";
import { useParams } from "react-router-dom";

export default function WeekPicker({ modify }) {
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs().add(1, "days"),
  });
  const params = useParams()
  const [amountArr, setAmountArr] = useState([])

  const handleGetDatePicker = (e) => {
    e.preventDefault();
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

  const handleWeekNumberByThurFnc = () => {
    const firstDayOfWeek =
      calendar.date.startOf("month").day() === 0
        ? 7
        : calendar.date.startOf("month").day();
    const lastDayOfWeek = calendar.date.endOf("month").day();
    const lastDay = calendar.date.endOf("month").date();

    const firstWeekCheck =
      firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
    const lastWeekCheck =
      lastDayOfWeek === 1 || lastDayOfWeek === 2 || lastDayOfWeek === 3;

    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

    let weekNo = Math.ceil((firstDayOfWeek - 1 + calendar.date.date()) / 7);

    if (weekNo === 1 && firstWeekCheck) weekNo = "prev";
    else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = "next";
    else if (firstWeekCheck) weekNo = weekNo - 1;

    return weekNo;
  };

  const CalcDate = () => {
    let num = 1;
    let weekNo = handleWeekNumberByThurFnc();
    if (weekNo === "prev")
      weekNo = handleWeekNumberByThurFnc(calendar.date.subtract(-1, "month"));
    if (weekNo === "next") {
      weekNo = 1;
      num = 2;
    }

    return calendar.date.format(
      `YY년 ${calendar.date.month() + num}월 ${weekNo}째 주`
    );
  };

  const handleDate = (num) => {
    setCalendar((prev) => ({
      ...prev,
      date: calendar.date.add(num, "week"),
    }));
  };

  const handleGetProductAmount = async () => {
    const startDate = calendar.date.startOf("week").add(1, "days").format('YYYY-MM-DD');
    const endDate = calendar.date.startOf("week").add(4, "days").format('YYYY-MM-DD');

    const res = await getProductAmountFromDate(params.id, startDate, endDate)
    setAmountArr(res.remainQuantities);
  }

  const handleWeekPrint = (num) => {
    const pDate = calendar.date.startOf("week").add(num, "days");

    return (
      <S.DateLi modify={modify} key={num}>
        <S.DateTit modify={modify}>{pDate.format("M월 D일(dd)")}</S.DateTit>
        <S.DateSubTit
          modify={modify}
          className={pDate >= dayjs() ? false : "disabled"}
        >
          {amountArr[num-1]?.remainQuantity}
        </S.DateSubTit>
      </S.DateLi>
    );
  };


  useEffect(() => {
    CalcDate();
    handleGetProductAmount()
  }, [calendar]);

  useEffect(() => {
    if (calendar.date.day() > 4 || calendar.date.day() === 0) {
      setCalendar((prev) => ({
        ...prev,
        date: calendar.date.add(1, "week"),
      }));
    }
    CalcDate();
  }, []);

  return (
    <>
      <S.DateWrap modify={modify}>
        <S.NextBtn
          modify={modify}
          disabled={calendar.date.week() === dayjs().week()}
          onClick={() => handleDate(-1)}
        >
          <img src={iconLeftArrow} alt="이전 주 보기" />
        </S.NextBtn>
        <S.DateCont modify={modify} onClick={handleGetDatePicker}>
          <S.DateImg modify={modify} src={iconCalendar} alt="" />
          <span>
            <CalcDate />
          </span>
        </S.DateCont>
        {calendar && (
          <DatePicker
            checkWeek={true}
            calendar={calendar}
            setCalendar={setCalendar}
          />
        )}
        <S.NextBtn
          modify={modify}
          disabled={calendar.date.week() === dayjs().add(31, "days").week()}
          onClick={() => handleDate(1)}
        >
          <img src={iconRightArrow} alt="다음 주 보기" />
        </S.NextBtn>
      </S.DateWrap>
      <S.DateUl modify={modify}>
        {modify ? (
          <></>
        ) : (
          <S.DateLi>
            <S.DateTit>날짜</S.DateTit>
            <S.DateSubTit className="text">대여 가능 개수</S.DateSubTit>
          </S.DateLi>
        )}
        {[...Array(4)].map((v, i) => i + 1).map((i) => handleWeekPrint(i))}
      </S.DateUl>
    </>
  );
}
