import UserState from "../../components/UserState"
import UserHist from "../../components/UserHist"
import * as S from "./style"

export default function LabRentalHistory() {
  return (
    // 사용자
    <>
      <S.Title>내 대여 정보</S.Title>
      <S.RentalWrap>
        <h2>페널티</h2>
        <UserState />
        <h2>페널티 이력</h2>
        <UserHist />
      </S.RentalWrap>
    </>

    //관리자(?)
  )
}
