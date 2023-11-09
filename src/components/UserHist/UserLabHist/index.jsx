import EmptyData from "../../EmptyData";
import * as S from "../style";
import dayjs from "dayjs";
import { rentalStatus } from "../../../data/rentalStatus";
import { getUserLabRentalHistory } from "../../../api/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserLabHist() {
  const [labHistory, setLabHistory] = useState([]);
  const dualDate = useSelector((state) => state.datePicker.dualDate);

  useEffect(() => {
    handleGetRentalHistory();
  }, [dualDate]);

  const handleGetRentalHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const res = await getUserLabRentalHistory(
        dualDate.firstDate,
        dualDate.lastDate
      );
      setLabHistory(res.rentals);
    }
  };

  return labHistory.length ? (
    <S.HistWrap>
      <S.Header className="lab">
        <span>사용 기간</span>
        <span>랩실</span>
        <span>사용 인원</span>
        <span>상태</span>
      </S.Header>
      {labHistory.map((lab, i) => (
        <S.HistList className="lab" key={i}>
          <span>{`${dayjs(lab.startDate).format(
            "YY년 MM월 DD일(dd)"
          )} ~ ${dayjs(lab.endDate).format("YY년 MM월 DD일(dd)")}`}</span>
          <span>{lab.name === "hanul" ? "한울관" : "화도관"}</span>
          <span>{lab.amount}</span>
          <span>{rentalStatus[lab.rentalSpecStatus]}</span>
        </S.HistList>
      ))}
    </S.HistWrap>
  ) : (
    <EmptyData
      className="user-rental"
      content={["조회한 일자의", "대여 이력이 없습니다."]}
    />
  );
}
