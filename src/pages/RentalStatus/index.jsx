import * as S from "./style";
import EquipSched from "../../components/EquipSched";
import SingularDatePicker from "../../components/DatePicker/SingularDatePicker";
import useTitle from "../../hook/useTitle";

export default function RentalStatus() {
  useTitle('기자재 대여 현황')

  return (
    <S.Wrapper>
      <S.Div>
        <S.Title>대여 현황</S.Title>
        <SingularDatePicker className='admin' />
      </S.Div>
      <EquipSched />
    </S.Wrapper>
  );
}
