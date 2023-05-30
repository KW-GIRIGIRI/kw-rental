import UserState from "../../../components/UserState"
import UserHist from "../../../components/UserHist"
import * as S from "../style"
import { useContext } from "react"
import { AuthContext } from "../../../context/Context"
import PenaltyState from "../../../components/PenaltyState"
import useTitle from "../../../hook/useTitle"

export default function PenaltyHistory() {
  const { isAuth } = useContext(AuthContext);
  useTitle(isAuth ? '페널티 관리' : '페널티 이력')

  return (
    <>
      {isAuth ? (
        <>
          <S.Title>페널티 관리</S.Title>
          <S.RentalWrap>
            <PenaltyState />
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
  )
}
