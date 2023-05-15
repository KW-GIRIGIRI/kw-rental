import { useEffect, useState } from "react";
import iconRightArrow from "../../assets/icon-rightArrow.svg";
import iconLeftArrow from "../../assets/icon-leftArrow.svg";
import iconCalendar from "../../assets/icon-calendar.svg";
import dayjs from "dayjs";
import * as S from "./style";
import { getEquipRentStatus } from "../../api/api";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

const ItemCalendar = ({ equipId }) => {
  const [rentList, setRentList] = useState([]);
  const [dayObj, setDayObj] = useState(dayjs());

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

  const handleGetEquipRentStatus = async () => {
    const res = await getEquipRentStatus(equipId, dayObj.format("YYYY-MM"));
    setRentList(res.reservations);
  };

  useEffect(() => {
    handleGetEquipRentStatus();
  }, [dayObj]);

  return (
    <S.Wrapper>
      <S.Header>
        <S.NavBtn onClick={handlePrev}>
          <img src={iconLeftArrow} alt="이전 달 보기" />
        </S.NavBtn>
        <S.MonthWrap>
          <img src={iconCalendar} alt="" />
          <span>{dayObj.format("YY년 M월")}</span>
        </S.MonthWrap>
        <S.NavBtn onClick={handleNext}>
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
            <S.ContCell key={i}>
              <span>{i + 1}</span>
              <S.UserUl>
                {rentList[i + 1]?.map((val, idx) => (
                  <S.UserList key={idx}>
                    <p>{idx + 1}</p>
                    <p>{val}</p>
                  </S.UserList>
                ))}
              </S.UserUl>
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

export default ItemCalendar;
