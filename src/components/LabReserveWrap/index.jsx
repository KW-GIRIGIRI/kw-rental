import dayjs from "dayjs";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/Context";
import useToggle from "../../hook/useToggle";
import Button from "../../modules/Button";
import * as S from "./style";

export default function LabReserveWrap() {
  const { isAuth } = useContext(AuthContext);
  const { Toggle, state, changeInitial } = useToggle();
  const hanul = useSelector(state => state.labControl.lab)

  return (
    <S.Div>
      <S.DateP>{dayjs().format("YY년 M월 D일(dd)")}</S.DateP>
      {hanul ? (
        <S.ReserveUl hanul={hanul}>
          <S.ReserveLi>
            <p>현재 대여 인원수</p>
            <p>대여 가능 인원수</p>
            {isAuth && <p>대여 ON/OFF</p>}
          </S.ReserveLi>
          <S.ReserveLi>
            <p>2</p>
            <p>16</p>
            {isAuth ? (
              <Toggle on="대여 가능" off="대여 불가" className="rental" />
            ) : (
              <Button
                text="대여신청"
                className="main"
                padding="6px 12px"
                borderRadius="50px"
                fontSize="12px"
                fontWeight="500"
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
                <p>대여 없음</p>
                <Toggle on="대여 가능" off="대여 불가" className="rental" />
              </S.ReserveLi>
            </S.ReserveUl>
          ) : (
            <Button
              text="대여신청"
              className="main"
              padding="6px 0"
              width="65px"
              borderRadius="50px"
              fontSize="12px"
              fontWeight="500"
            />
          )}
        </>
      )}
    </S.Div>
  );
}
