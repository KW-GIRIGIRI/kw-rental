import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getHwadoLabRemainCounts, getLabAvailableParticularPeriod, getLabRemainQuantities, setLabAvailablePeriod } from "../../api/api";
import { AuthContext } from "../../context/Context";
import useToggle from "../../hook/useToggle";
import Button from "../../modules/Button";
import * as S from "./style";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  weekdays: ["일", "월", "화", "수", "목", "금", "토"],
});

export default function LabReserveWrap() {
  const { isAuth } = useContext(AuthContext);
  const [seatAmount, setSeatAmount] = useState(0)
  const { Toggle, state, changeInitial } = useToggle();
  const hanul = useSelector(state => state.labControl.lab)
  const selectDate = useSelector(state => state.labControl.date)
  const navigate = useNavigate()

  const handleGetLabAvailable = async () => {
    const lab = hanul ? 'hanul' : 'hwado'

    const res = await getLabAvailableParticularPeriod(lab, selectDate)
    changeInitial(res.available)
  }

  const handleSetLabAvailable = async () => { 
    const lab = hanul ? 'hanul' : 'hwado'
    const data ={
      "entirePeriod" : false,
      "date" : selectDate.split('-').map(i => ~~i),
      "available" : state ? false : true
    }

    const res = await setLabAvailablePeriod(lab, JSON.stringify(data))
    res === 204 && alert('랩실 상태가 변경되었습니다.')
  }

  const handleGetLabRemain = async () => {
    const lab = hanul ? 'hanul' : 'hwado'

    if (selectDate) {
      if (hanul) {
        const res = await getLabRemainQuantities(lab, selectDate, selectDate)
  
        res.remainQuantities.length && setSeatAmount(res.remainQuantities[0].remainQuantity)
      } else {
        const res = await getHwadoLabRemainCounts(lab, selectDate, selectDate)
  
         res.remainReservationCounts.length && setSeatAmount(res.remainReservationCounts[0].remainReservationCount)
      }
    }
  }

  useEffect(() => {
    handleGetLabRemain()
    if(~~dayjs(selectDate).format('YYMMDD') >= ~~dayjs().format('YYMMDD') && isAuth) handleGetLabAvailable()
  }, [hanul, selectDate])

  return (
    <S.Div>
      <S.DateP>{dayjs(selectDate).format("YY년 M월 D일(dd)")}</S.DateP>
      {hanul ? (
        <S.ReserveUl hanul={hanul}>
          <S.ReserveLi>
            <p>현재 대여 인원수</p>
            <p>대여 가능 인원수</p>
            {isAuth && (~~dayjs(selectDate).format('YYMMDD') > ~~dayjs().format('YYMMDD')) && <p>대여 ON/OFF</p>}
          </S.ReserveLi>
          <S.ReserveLi>
            <p>{16 - seatAmount}</p>
            <p>{seatAmount}</p>
            {isAuth ? (
              (~~dayjs(selectDate).format('YYMMDD') >= ~~dayjs().format('YYMMDD')) && <Toggle on="대여 가능" off="대여 불가" className="rental" onClickFunc={handleSetLabAvailable} />
            ) : (
              <Button
                text="대여신청"
                className={seatAmount ? "main" : "gray"}
                padding="6px 12px"
                borderRadius="50px"
                fontSize="12px"
                fontWeight="500"
                disabled={!seatAmount}
                onClick={() => navigate('/lab/application')}
              />
            )}
          </S.ReserveLi>
        </S.ReserveUl>
      ) : (
        <>
          {isAuth ? (
            <S.ReserveUl>
              <S.ReserveLi className="auth">
                <p>대여 상태</p>
                <p>대여 가능 ON/OFF</p>
              </S.ReserveLi>
              <S.ReserveLi className="auth">
                <p>{seatAmount ? "대여 없음": "대여 완료"}</p>
                <Toggle on="대여 가능" off="대여 불가" className="rental" />
              </S.ReserveLi>
            </S.ReserveUl>
            ) : (
            <Button
              text="대여신청"
              className={seatAmount ? "main" : "gray"}
              padding="6px 0"
              width="65px"
              borderRadius="50px"
              fontSize="12px"
              fontWeight="500"
              disabled={!seatAmount}
              onClick={() => navigate('/lab/application')}
            />
          )}
        </>
      )}
    </S.Div>
  );
}
