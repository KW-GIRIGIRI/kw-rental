import { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getLabAvailableEntirePeriod, setLabAvailablePeriod } from "../../../api/api";
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
  const hanul = useSelector(state => state.labControl.lab)
  const calendarRef = useRef()
  const reserveWrapRef = useRef()

  const handleGetLabAvailable = async () => {
    const lab = hanul ? 'hanul' : 'hwado'

    const res = await getLabAvailableEntirePeriod(lab)
    changeInitial(res.available)
  }

  const handleSetLabAvailable = async (labStatus, date) => {
    const lab = hanul ? 'hanul' : 'hwado'

    const data ={
      "entirePeriod" : !!date ? false : true,
      "date" : !!date ? date.split('-').map(i => ~~i) : null,
      "available" : labStatus ? false : true
    }

    const res = await setLabAvailablePeriod(lab, JSON.stringify(data))
    res === 204 && alert('랩실 상태가 변경되었습니다.')

    calendarRef.current.handleGetCalendarLabRemain()
    reserveWrapRef.current.handleGetLabAvailable()
  }

  useEffect(() => {
    isAuth && handleGetLabAvailable()
  }, [hanul])

  return (
    <>
      {isAuth && (
        <S.OnOff>
          <S.SecTitle>대여 ON/OFF</S.SecTitle>
          <Toggle on="대여 가능" off="대여 불가" className="rental" onClickFunc={() => handleSetLabAvailable(state, null)} />
        </S.OnOff>
      )}
      {isAuth && <S.SecTitle>대여 현황</S.SecTitle>}
      <S.Section isAuth={isAuth}>
        <LabCalendar ref={calendarRef} />
        <LabReserveWrap ref={reserveWrapRef} handleSetLabAvailable={handleSetLabAvailable} />
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
