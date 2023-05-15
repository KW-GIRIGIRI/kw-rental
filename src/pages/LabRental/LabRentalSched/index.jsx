import { useContext } from "react";
import LabCalendar from "../../../components/LabCalendar";
import LabReserveWrap from "../../../components/LabReserveWrap";
import { AuthContext } from "../../../context/Context";
import useToggle from "../../../hook/useToggle";
import { SubTitle } from "../style";
import * as S from "./style";

export default function LabRentalSched() {
  const { isAuth } = useContext(AuthContext);
  const { Toggle, state, changeInitial } = useToggle();

  return (
    <>
      {isAuth && (
        <S.OnOff>
          <SubTitle>대여 ON/OFF</SubTitle>
          <Toggle on="대여 가능" off="대여 불가" className="rental" />
        </S.OnOff>
      )}
      {isAuth && <SubTitle>대여 현황</SubTitle>}
      <S.Section isAuth={isAuth}>
        <LabCalendar />
        <LabReserveWrap />
      </S.Section>
      {isAuth && <SubTitle>사용 이력</SubTitle>}
    </>
  );
}
