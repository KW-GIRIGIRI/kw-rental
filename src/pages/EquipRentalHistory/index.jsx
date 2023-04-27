import UserState from "../../components/UserState"
import UserHist from "../../components/UserHist"
import * as S from "./style"

export default function EquipmentRentalHistory() {
  return (
    // 사용자
    <>
      <S.Title>내 대여 정보</S.Title>
      <S.RentalWrap>
        <h2>기자재 대여</h2>
        <UserState isEquip={true} />
        <h2>기자재 대여 이력</h2>
        <UserHist isEquip={true} />
      </S.RentalWrap>
    </>

    //관리자(?)
  )
}
