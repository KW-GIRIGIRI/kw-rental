import UserState from "../../../components/UserState"
import UserHist from "../../../components/UserHist"
import * as S from "../style"
import { AuthContext } from "../../../context/Context"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import LabHist from "../../../components/LabHist"
import DualDatePicker from "../../../components/DatePicker/DualDatePicker"
import Button from "../../../modules/Button"
import { setLab } from "../../../store/reducer/LabControllerSlice"
import LabStatistics from "../../../components/LabStatistics"

export default function LabRentalHistory() {
  const { isAuth } = useContext(AuthContext)
  const dispatch = useDispatch()
  const lab = useSelector(state => state.labControl.lab)

  return (
    isAuth ?
      <>
        <S.Wrap>
          <S.Title>랩실 통계</S.Title>
          <DualDatePicker firstInitial={-31} lastInitial={0} className="authHistory" />
        </S.Wrap>
        <S.ButtonWrap>
          <Button
            className={lab ? "main shadow" : "disable shadow"}
            text="한울관"
            padding="10px 29px"
            borderRadius="20px"
            margin="0 10px 0 0"
            onClick={() => dispatch(setLab(true))}
          />
          <Button
            className={lab ? "disable shadow" : "main shadow"}
            text="화도관"
            padding="10px 29px"
            borderRadius="20px"
            onClick={() => dispatch(setLab(false))}
          />
        </S.ButtonWrap>
        <S.RentalWrap>
          <LabHist />
          <LabStatistics />
        </S.RentalWrap>
        {/* {pageArray && (
          <S.PageBtnWrap>
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>
              <img src={iconPageArrow} alt="이전 페이지" />
            </button>
            {pageArray?.map((_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setPage(index)}
                  className={page === index ? "on" : null}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              onClick={() => setPage(page + 1)}
              disabled={page + 1 === pageArray.length}
            >
              <img src={iconPageArrow} alt="다음 페이지" />
            </button>
          </S.PageBtnWrap>
        )} */}
      </>
      :
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
