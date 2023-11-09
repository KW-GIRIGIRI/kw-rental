import { useEffect, useRef, useState } from "react";
import Button from "../../../../modules/Button";
import * as S from "../style";
import { getProductAmountFromDate, modifyCartEquip } from "../../../../api/api";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetCartList } from "../../../../store/reducer/cartListSlice";
import DualDatePicker from "../../../DatePicker/DualDatePicker";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function ModifyComp({ cart, close, setModal }) {
  const [rentalAmount, setRentalAmount] = useState();
  const amountRef = useRef();
  const dispatch = useDispatch();
  const dualDate = useSelector(state => state.datePicker.dualDate)
  const rentalStartDate = dayjs(cart.rentalStartDate).dayOfYear() - dayjs().dayOfYear()
  const rentalEndDate = dayjs(cart.rentalEndDate).dayOfYear() - dayjs().dayOfYear()

  const handleGetProductAmount = async () => {
    const startDate = dayjs(dualDate.firstDate).format("YYYY-MM-DD");
    const endDate = dayjs(dualDate.lastDate).format("YYYY-MM-DD");

    const start = dayjs(dualDate.firstDate).dayOfYear()
    const end = dayjs(dualDate.lastDate).dayOfYear()

    if (end > start) {
      const res = await getProductAmountFromDate(
        cart.equipmentId,
        startDate,
        endDate
      );
      res.remainQuantities.length &&
        setRentalAmount(res.remainQuantities[0].remainQuantity);
    }
  };

  const handleClose = () => {
    close();
    setModal(false);
  };

  const handleModifyCartEquip = async () => {
     const data = {
      rentalStartDate: dayjs(dualDate.firstDate)
        .format("YYYY-MM-DD")
        .split("-")
        .map((i) => parseInt(i)),
      rentalEndDate: dayjs(dualDate.lastDate)
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
  }, [dualDate.firstDate, dualDate.lastDate]);

  return (
    <>
      <p>기자재 수령일~반납일</p>
      <div className="item">
        <DualDatePicker firstInitial={rentalStartDate} lastInitial={rentalEndDate} className="user modify-modal"/>
      </div>
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
