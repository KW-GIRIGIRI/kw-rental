import * as S from "./style";
import EmptyData from "../EmptyData";
import { useSelector } from "react-redux";
import { getAdminLabHistory, getAdminLabStatistics } from "../../api/api";
import { useEffect, useState } from "react";
import { rentalStatus } from "../../data/rentalStatus";
import dayjs from "dayjs";

export default function LabStatistics({ page, setPageArray }) {
  const hanul = useSelector((state) => state.labControl.lab);
  const dualDate = useSelector((state) => state.datePicker.dualDate);
  const [labHistoryList, setLabHistoryList] = useState([]);
  const [labStatisticsList, setLabStatisticsList] = useState([]);

  const handleGetLabHistory = async () => {
    if (dualDate.firstDate && dualDate.lastDate) {
      const reqUrlHist = `startDate=${dualDate.firstDate}&endDate=${dualDate.lastDate}&page=${page}`;
      const reqUrlStat = `${hanul ? "hanul" : "hwado"}&startDate=${
        dualDate.firstDate
      }&endDate=${dualDate.lastDate}`;
      const responseHist = await getAdminLabHistory(
        hanul ? "hanul" : "hwado",
        reqUrlHist
      );
      const responseStat = await getAdminLabStatistics(reqUrlStat);

      setPageArray(responseHist.endPoints);
      setLabHistoryList(responseHist.labRoomReservations);
      setLabStatisticsList(responseStat);

      window.scrollTo({
        top: 0,
      });
    }
  };

  useEffect(() => {
    handleGetLabHistory();
  }, [dualDate, hanul]);

  return labHistoryList.length ? (
    <>
      <S.Wrap>
        <S.HistHeader>
          <span>랩실</span>
          <span>대여 인원</span>
          <span>사용 인원</span>
          <span>불량반납</span>
        </S.HistHeader>
        <S.Content>
          <span>{hanul ? "한울관" : "화도관"}</span>
          <span>{labStatisticsList.reservationCount}</span>
          <span>{labStatisticsList.userCount}</span>
          <span>{labStatisticsList.abnormalReturnCount}</span>
        </S.Content>
      </S.Wrap>

      <S.ItemUl>
        <S.ItemHeader>
          <span>상태</span>
          <span>사용일</span>
          <span>퇴실일</span>
          <span>대여자</span>
          <span>사유</span>
        </S.ItemHeader>
        {labHistoryList.map((lab, idx) => (
          <S.ItemLi key={idx}>
            <span>{lab.status}</span>
            <span>{dayjs(lab.startDate).format("YY년 MM월 DD일")}</span>
            <span>{dayjs(lab.endDate).format("YY년 MM월 DD일")}</span>
            <span>{lab.renterName}</span>
            <span>
              {lab.reason === "RETURNED" ? "" : rentalStatus[lab.reason]}
            </span>
          </S.ItemLi>
        ))}
      </S.ItemUl>
    </>
  ) : (
    <EmptyData content={["선택 일자에 해당하는 데이터가 없습니다."]} />
  );
}
