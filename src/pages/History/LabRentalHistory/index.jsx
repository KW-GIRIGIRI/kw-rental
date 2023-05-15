import UserState from "../../../components/UserState";
import UserHist from "../../../components/UserHist";
import * as S from "../style";

export default function LabRentalHistory() {
  return (
    <>
      <S.Title>내 대여 정보</S.Title>
      <S.RentalWrap>
        <h2>랩실 대여</h2>
        <UserState isLab={true} />
        <h2>랩실 대여 이력</h2>
        <UserHist isLab={true} />
      </S.RentalWrap>
    </>
  );
}
