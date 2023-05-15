import * as S from "./style";
import EquipSched from "../../components/EquipSched";
import SingularDatePicker from "../../components/DatePicker/SingularDatePicker";

export default function RentalStatus() {
  return (
    <S.Wrapper>
      <S.Div>
        <S.Title>대여 현황</S.Title>
        <SingularDatePicker />
      </S.Div>
      <EquipSched />
    </S.Wrapper>
  );
}
