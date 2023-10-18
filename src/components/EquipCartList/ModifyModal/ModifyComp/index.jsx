import { useEffect, useRef, useState } from "react";
import Button from "../../../../modules/Button";
import iconCalendar from "../../../../assets/icon-calendar-black.svg";
import * as S from "../style";
import { InpWrapper } from "../../../AddCartEquip/style";
import { getProductAmountFromDate, modifyCartEquip } from "../../../../api/api";
import DatePicker from "../../../DatePicker";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCartList } from "../../../../store/reducer/cartListSlice";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function ModifyComp({ cart, close, modal, setModal }) {
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs(cart.rentalStartDate),
  });
  const [rentalAmount, setRentalAmount] = useState();
  const amountRef = useRef();
  const dispatch = useDispatch();
  const operationDay = useSelector(
    (state) => state.operationDay.operationDayArr
  );

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

  const handleGetProductAmount = async () => {
    const startDate = calendar.date.format("YYYY-MM-DD");
    const endDate = calendar.date.add(1, "days").format("YYYY-MM-DD");

    const res = await getProductAmountFromDate(
      cart.equipmentId,
      startDate,
      endDate
    );
    res.remainQuantities.length &&
      setRentalAmount(res.remainQuantities[0].remainQuantity);
  };

  const handleClose = () => {
    close();
    setModal(false);
  };

  const handleModifyCartEquip = async () => {
    let endDate = calendar.date.add(1, "days");
    if (calendar.date.day() >= operationDay[operationDay.length - 1])
      endDate = endDate.add(1, "week").day(operationDay[0]);

    const data = {
      rentalStartDate: calendar.date
        .format("YYYY-MM-DD")
        .split("-")
        .map((i) => parseInt(i)),
      rentalEndDate: endDate
        .format("YYYY-MM-DD")
        .split("-")
        .map((i) => parseInt(i)),
      amount: parseInt(amountRef.current.value),
    };

    const res = await modifyCartEquip(cart.id, JSON.stringify(data));
    if (res === 200) {
      close();
      setModal(false);
      dispatch(asyncGetCartList());
    }
  };

  useEffect(() => {
    handleGetProductAmount();
  }, [calendar.date]);

  return (
    <>
      <p>기자재 수령일~반납일</p>
      {calendar && (
        <DatePicker
          calendar={calendar}
          setCalendar={setCalendar}
          className="user"
        />
      )}
      <InpWrapper className="item">
        <S.DateCont onClick={handleGetDatePicker}>
          <S.DateImg src={iconCalendar} alt="" />
          <span>{calendar.date.format("M월 D일(dd)")} </span>
        </S.DateCont>
        <span>~</span>
        <S.DateCont>
          <span>
            {calendar.date.day() >= operationDay[operationDay.length - 1]
              ? calendar.date
                  .add(1, "week")
                  .day(operationDay[0])
                  .format("M월 D일(dd)")
              : calendar.date.add(1, "days").format("M월 D일(dd)")}
          </span>
        </S.DateCont>
      </InpWrapper>

      <p>대여 기자재 수정</p>
      <S.SelectCount name="" id="" ref={amountRef} defaultValue={cart.amount}>
        {Array(rentalAmount)
          .fill()
          .map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
      </S.SelectCount>

      <div>
        <Button
          text="수정하기"
          className={!!rentalAmount ? "main" : "gray"}
          disabled={!rentalAmount}
          padding="11px 24px"
          borderRadius="5px"
          fontSize="14px"
          onClick={handleModifyCartEquip}
        />
        <Button
          text="취소하기"
          className="sub"
          padding="10px 24px"
          borderRadius="5px"
          fontSize="14px"
          onClick={handleClose}
        />
      </div>
    </>
  );
}
