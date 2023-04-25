import * as S from "./style"
import EquipSched from "../../components/EquipSched"
import iconCalendar from "../../assets/icon-calendar.svg"

export default function RentalStatus() {
  return (
    <S.Wrapper>
      <S.Div>
        <S.Title>대여 현황</S.Title>
        <S.DateCont>
          <img src={iconCalendar} alt="" />
          <span>3월 12일(화)</span>
          <S.DateInp type="date"
          />
        </S.DateCont>
      </S.Div>
      <EquipSched />
    </S.Wrapper>
  )
}