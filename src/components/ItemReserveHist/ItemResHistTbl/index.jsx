import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getItemUsageHistory } from "../../../api/api";
import EmptyData from "../../EmptyData";
import * as S from "./style";
import { rentalStatus } from "../../../data/rentalStatus";
import dayjs from "dayjs";

export default function ItemResHistTbl({ propertyNumber }) {
  const dualDate = useSelector((state) => state.datePicker.dualDate);
  const [data, setData] = useState([]);

  const handleGetItemHistory = async () => {
    if (!!dualDate.firstDate && !!dualDate.lastDate) {
      const response = await getItemUsageHistory(
        propertyNumber,
        dualDate.firstDate,
        dualDate.lastDate
      );

      setData(response.rentalSpecs);
    }
  };

  useEffect(() => {
    handleGetItemHistory();
  }, [dualDate, propertyNumber]);

  return !!data.length ? (
    <S.HistUl>
      <S.HistLi>
        <p>상태</p>
        <p>수령일</p>
        <p>반납일</p>
        <p>대여자</p>
        <p>비고</p>
      </S.HistLi>
      {data.map((val, idx) => (
        <S.HistLi key={idx}>
          <p className={val.status.includes("불량") && "faulty"}>
            {val.status}
          </p>
          <p>{dayjs(val.acceptDate).format("YY년 MM월 DD일")}</p>
          <p>{dayjs(val.returnDate).format("YY년 MM월 DD일")}</p>
          <p>{val.name}</p>
          <p>{rentalStatus[val.reason] || "-"}</p>
        </S.HistLi>
      ))}
    </S.HistUl>
  ) : (
    <EmptyData content={["선택 일자에 해당하는 데이터가 없습니다."]} />
  );
}
