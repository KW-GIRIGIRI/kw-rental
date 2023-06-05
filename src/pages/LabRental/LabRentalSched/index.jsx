import { useContext } from "react";
import { setLabAvailablePeriod } from "../../../api/api";
import LabCalendar from "../../../components/LabCalendar";
import LabPenalty from "../../../components/LabPenalty";
import LabReserveWrap from "../../../components/LabReserveWrap";
import { AuthContext } from "../../../context/Context";
import useTitle from "../../../hook/useTitle";
import useToggle from "../../../hook/useToggle";
import * as S from "./style";

export default function LabRentalSched() {
  const { isAuth } = useContext(AuthContext);
  const { Toggle, state, changeInitial } = useToggle();
  useTitle(isAuth ? '랩실 관리' : '랩실 대여 현황')


  const handleSetLabAvailable = async () => {
    const data ={
      "entirePeriod" : true,
      "date" : null,
      "available" : state ? false : true
    }

    // 상태 조회 api 나오면 수정
    const res = await setLabAvailablePeriod(JSON.stringify(data))
    res === 204 && alert('랩실 상태가 변경되었습니다.')
  }

  return (
    <>
      {isAuth && (
        <S.OnOff>
          <S.SecTitle>대여 ON/OFF</S.SecTitle>
          <Toggle on="대여 가능" off="대여 불가" className="rental" onClickFunc={handleSetLabAvailable} />
        </S.OnOff>
      )}
      {isAuth && <S.SecTitle>대여 현황</S.SecTitle>}
      <S.Section isAuth={isAuth}>
        <LabCalendar />
        <LabReserveWrap />
      </S.Section>
      {
        isAuth &&
        <>
          <S.PenaltyTitle>페널티 관리</S.PenaltyTitle>
          <LabPenalty />
        </>
      }
    </>
  );
}
