import { useEffect, useRef, useState } from "react";
import useModal from "../../../hook/useModal";
import Button from "../../../modules/Button";
import Image from "../../../modules/Image";
import WeekPicker from "../../WeekPicker";
import iconCalendar from "../../../assets/icon-calendar-black.svg";
import * as S from "./style";
import { InpWrapper } from "../../AddCartEquip/style";
import { category } from "../../../data/category";
import { getProductAmountFromDate, modifyCartEquip } from "../../../api/api";
import DatePicker from "../../DatePicker";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { useDispatch } from "react-redux";
import { asyncGetCartList } from "../../../store/reducer/cartListSlice";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function ModifyModal({
  modal,
  setModal,
  cart,
}) {
  const { Modal, open, close } = useModal();
  const amountRef = useRef([]);
  const [calendar, setCalendar] = useState({
    visible: false,
    top: 0,
    left: 0,
    date: dayjs(cart.rentalStartDate),
  });
  const [rentalAmount, setRentalAmount] = useState()
  const dispatch = useDispatch()

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
    const startDate = calendar.date.format('YYYY-MM-DD')
    const endDate = calendar.date.add(1, 'days').format('YYYY-MM-DD')

    const res = await getProductAmountFromDate(cart.equipmentId, startDate, endDate)
    res.remainQuantities && setRentalAmount(res.remainQuantities[0].remainQuantity);
  }

  const handleClose = () => {
    close();
    setModal(false);
  }

  const handleModifyCartEquip = async () => {
    const data = {
      rentalStartDate: calendar.date
        .format("YYYY-MM-DD")
        .split("-")
        .map((i) => parseInt(i)),
      rentalEndDate: calendar.date
        .add(1, "days")
        .format("YYYY-MM-DD")
        .split("-")
        .map((i) => parseInt(i)),
      amount: parseInt(amountRef.current.value),
    };

    const res = await modifyCartEquip(cart.id, JSON.stringify(data))
    if (res === 200) {
      close()
      setModal(false)
      dispatch(asyncGetCartList())
    }
  };

  useEffect(() => {
    handleGetProductAmount()
  }, [calendar.date])

  useEffect(() => {
    modal && open();
    setModal(false);
  }, [modal, close]);

  return (
    cart && (
      <Modal className="modify">
        <p>담은 기자재 수정</p>
        <S.Div className="item">
          <Image
            width="54px"
            height="54px"
            borderRadius="10px"
            src={cart.imgUrl}
            alt=""
          />
          <S.ItemWrap>
            <p>
              {category.map(
                (value) => value.value === cart.category && value.label
              )}
            </p>
            <p>{cart.modelName}</p>
          </S.ItemWrap>
        </S.Div>
        <p>대여 현황</p>
        <WeekPicker equipId={cart.equipmentId} modify="true" />
        
        <p>기자재 수령일~반납일</p>
        {calendar && (
          <DatePicker calendar={calendar} setCalendar={setCalendar} />
        )}
        <InpWrapper className="item">
          <S.DateCont onClick={handleGetDatePicker}>
            <S.DateImg src={iconCalendar} alt="" />
            <span>{calendar.date.format("M월 D일(dd)")} </span>
          </S.DateCont>
          <span>~</span>
          <S.DateCont>
            <span>{calendar.date.add(1, "days").format("M월 D일(dd)")}</span>
          </S.DateCont>
        </InpWrapper>

        <p>대여 기자재 수정</p>
        <S.SelectCount name="" id="" ref={amountRef} defaultValue={cart.amount}>
         {Array(rentalAmount)
            .fill()
            .map((_, i) => 
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            )}
        </S.SelectCount>
         
        <div>
          <Button
            text="수정하기"
            className="main"
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
      </Modal>
    )
  );
}