import UserState from "../../../components/UserState";
import UserHist from "../../../components/UserHist";
import * as S from "../style";
import { useContext } from "react";
import { AuthContext } from "../../../context/Context";
import PenaltyState from "../../../components/PenaltyState";
import { useState } from "react";
import { useTitle } from "../../../hook/useTitle";

export default function PenaltyHistory() {
  //가짜페널티통계
  const 가짜페널티 = [
    {
      대여자: "이영현",
      상태: "일주일 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 03월 19일(목)",
      종류: "MIRRORLESS SONY a6600",
      사유: "연체",
    },
    {
      대여자: "김효리",
      상태: "1년 이용 금지",
      기간: "23년 03월 12일(목) ~ 24년 03월 12일(잉)",
      종류: "MIRRORLESS SONY a6600",
      사유: "고장",
    },
    {
      대여자: "박다은",
      상태: "1학기 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 09월 12일(목)",
      종류: "한울관 B119호",
      사유: "메롱",
    },
    {
      대여자: "공주님",
      상태: "한 달 이용 금지",
      기간: "23년 03월 12일(목) ~ 23년 04월 12일(목)",
      종류: "PRINCESS",
      사유: "공주라서",
    },
  ];

  const [data, setData] = useState(가짜페널티);
  const { isAuth } = useContext(AuthContext);
  useTitle(isAuth ? '페널티 관리' : '페널티 이력')

  return (
    <>
      {isAuth ? (
        <>
          <S.Title>페널티 관리</S.Title>
          <S.RentalWrap>
            <PenaltyState data={data} setData={setData} />
          </S.RentalWrap>
          <div>페이지</div>
        </>
      ) : (
        <>
          <S.Title>내 대여 정보</S.Title>
          <S.RentalWrap>
            <h2>페널티</h2>
            <UserState />
            <h2>페널티 이력</h2>
            <UserHist />
          </S.RentalWrap>
        </>
      )}
    </>
  );
}
