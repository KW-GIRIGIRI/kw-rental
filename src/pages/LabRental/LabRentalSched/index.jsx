import LabCalendar from "../../../components/LabCalendar";
import LabReserveWrap from "../../../components/LabReserveWrap";
import * as S from "./style"

export default function LabRentalSched() {
  return (
    <S.Section>
      <LabCalendar />
      <LabReserveWrap />
    </S.Section>
  )
}