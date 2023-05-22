import { useContext, useEffect, useState } from "react";
import iconRightArrow from "../../assets/icon-rightArrow.svg";
import iconLeftArrow from "../../assets/icon-leftArrow.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import dayjs from "dayjs";
import * as S from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setLabDate } from "../../store/reducer/LabControllerSlice";
import { getLabRemainQuantities } from "../../api/api";
import { AuthContext } from "../../context/Context";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const LabCalendar = () => {
  const [dayObj, setDayObj] = useState(dayjs());
  const [seatArray, setSeatArray] = useState({})
  const hanul = useSelector(state => state.labControl.lab)
  const selectDate = useSelector(state => state.labControl.date)
  const dispatch = useDispatch()
  const { isAuth } = useContext(AuthContext);

  const handleGetLabRemain = async () => {
    const startDate = dayObj.startOf('month').format('YYYY-MM-DD')
    const endDate = dayObj.endOf('month').format('YYYY-MM-DD')
    const lab = hanul ? 'hanul' : 'hwado'

    const res = await getLabRemainQuantities(lab, startDate, endDate)

    const newObj = {}
    
    res.remainQuantities.length && res.remainQuantities.forEach(item => {
      newObj[~~item.date.split('-').slice(-1)[0]] = item.remainQuantity;
    });
    
    setSeatArray(newObj)
  }

  const thisYear = dayObj.year();
  const thisMonth = dayObj.month();
  const daysInMonth = dayObj.daysInMonth();

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day();

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };

  const handleSetDate = e => {
    if (isAuth) {
      dispatch(setLabDate(dayjs(`${thisYear}-${thisMonth + 1}-${e.target.value}`).format('YYYY-MM-DD')))
    } else {
      const selectDate = dayjs(`${thisYear}-${thisMonth + 1}-${e.target.value}`).valueOf()

      if(selectDate > dayjs().valueOf() && selectDate < dayjs().add(1, 'month').valueOf()) dispatch(setLabDate(dayjs(`${thisYear}-${thisMonth + 1}-${e.target.value}`).format('YYYY-MM-DD')))
    }
  }

  const handleCalendar = (i) => {
    if(!isAuth) {
      if (dayjs(`${dayObj.year()}-${dayObj.month() + 1}-${i + 1}`).valueOf() > dayjs().valueOf() && dayjs(`${dayObj.year()}-${dayObj.month() + 1}-${i + 1}`).valueOf() < dayjs().add(1, 'month').valueOf()) return true
      else return false
    } else return true
  }

  useEffect(() => {
    handleGetLabRemain()
  }, [dayObj, hanul])

  useEffect(() => {
    if (!isAuth) {
      const date = dayjs().add(1, 'days').day() === 4 ? dayjs().add(4, 'days') : dayjs().add(1, 'days')
  
      setDayObj(date)
      dispatch(setLabDate(date.format('YYYY-MM-DD')))
    }
  }, [])

  return (
    <S.Wrapper>
      <S.Header>
        <S.NavBtn
          onClick={handlePrev}
          disabled={!isAuth && dayjs().month() === dayObj.month()}
        >
          <img src={iconLeftArrow} alt="이전 달 보기" />
        </S.NavBtn>
        <S.MonthWrap>
          <img src={iconCalendar} alt="" />
          <span>{dayObj.format("YY년 M월")}</span>
        </S.MonthWrap>
        <S.NavBtn
          onClick={handleNext}
          disabled={!isAuth && dayjs().add(1, 'month').month() === dayObj.month()}
        >
          <img src={iconRightArrow} alt="다음 달 보기" />
        </S.NavBtn>
      </S.Header>
      <S.Container>
        {weekDays.map((d) => (
          <S.ContCell className="month" key={d}>
            {d}
          </S.ContCell>
        ))}
      </S.Container>
      <S.Container>
        {Array(weekDayOf1)
          .fill()
          .map((_, i) => (
            <S.ContCell className="faded" key={i}>
              {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
            </S.ContCell>
          ))}

        {Array(daysInMonth)
          .fill()
          .map((_, i) => (
            <S.ContCell
              onClick={handleSetDate}
              key={i}
              value={i + 1}
              className={
                dayjs(`${dayObj.year()}-${dayObj.month() + 1}-${i + 1}`).format(
                  "YYMMDD"
                ) === dayjs().format("YYMMDD") && "today"
              }
            >
              <span>{i + 1}</span>
              {
                (
                  dayjs(`${dayObj.year()}-${dayObj.month() + 1}-${i}`).day() < 4 &&
                  handleCalendar(i)
                )
                && (
                  dayjs(`${dayObj.year()}-${dayObj.month() + 1}-${i+1}`).format('YYMMDD') === dayjs(selectDate).format('YYMMDD') ?
                  <ins>{hanul ? `대여(${seatArray[i+1] || 16}/16)` : seatArray[i+1] > 0 ? "대여 가능" :"대여 불가"}</ins> :
                  <p>{hanul ? `대여(${seatArray[i+1] || 16}/16)` : seatArray[i+1] > 0 ? "대여 가능" :"대여 불가"}</p>
                )
              }
            </S.ContCell>
          ))}

        {Array(6 - weekDayOfLast)
          .fill()
          .map((_, i) => (
            <S.ContCell className="faded" key={i}>
              {dayObjOfLast.add(i + 1, "day").date()}
            </S.ContCell>
          ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default LabCalendar;
