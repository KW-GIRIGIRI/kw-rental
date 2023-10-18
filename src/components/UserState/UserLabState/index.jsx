import * as S from "../style";
import EmptyData from "../../EmptyData";
import { getCurrentLabReservation } from "../../../api/api";
import { useState, useEffect } from "react";
import StateListComp from "./StateListComp";

export default function UserLabState() {
  const [myRental, setMyRental] = useState([]);

  const handleGetCurrentRental = async () => {
    const res = await getCurrentLabReservation();
    setMyRental(res.reservations);
  };

  useEffect(() => {
    handleGetCurrentRental();
  }, []);

  return myRental.length ? (
    <S.HistWrap>
      <S.Header className="lab">
        <span>사용 기간</span>
        <span>랩실</span>
        <span>사용 인원</span>
        <span>상태</span>
        <span></span>
      </S.Header>
      {myRental.map((lab, i) => (
        <StateListComp
          handleGetCurrentRental={handleGetCurrentRental}
          key={i}
          lab={lab}
        />
      ))}
    </S.HistWrap>
  ) : (
    <EmptyData className="user-rental" content={["예정된 대여가 없습니다."]} />
  );
}
