import dayjs from "dayjs";
import { useSelector } from "react-redux";
import * as S from "./style";

export default function LabConfirmTable() {
  const hanul = useSelector((state) => state.labControl.lab);
  const selectDate = useSelector((state) => state.labControl.date);
  const operationDay = useSelector(
    (state) => state.operationDay.operationDayArr
  );

  const handlePrintDate = () => {
    if (dayjs(selectDate).day() >= operationDay[operationDay.length - 1]) {
      return `${dayjs(selectDate).format("YY년 MM월 DD일(dd)")} ~ ${dayjs(
        selectDate
      )
        .add(4, "days")
        .format("YY년 MM월 DD일(dd)")}`;
    } else
      return `${dayjs(selectDate).format("YY년 MM월 DD일(dd)")} ~ ${dayjs(
        selectDate
      )
        .add(1, "days")
        .format("YY년 MM월 DD일(dd)")}`;
  };

  return (
    <S.Wrap>
      <S.Header>
        <p>사용기간</p>
        <p>랩실</p>
      </S.Header>
      <S.Info>
        <p>{handlePrintDate()}</p>
        <p>{hanul ? "한울관 B119호" : "화도관 309호"}</p>
      </S.Info>
    </S.Wrap>
  );
}
