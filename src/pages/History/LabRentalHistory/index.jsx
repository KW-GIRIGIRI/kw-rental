import UserState from "../../../components/UserState"
import UserHist from "../../../components/UserHist"
import * as S from "../style"
import { AuthContext } from "../../../context/Context"
import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DualDatePicker from "../../../components/DatePicker/DualDatePicker"
import Button from "../../../modules/Button"
import { setLab } from "../../../store/reducer/LabControllerSlice"
import LabStatistics from "../../../components/LabStatistics"
import useTitle from "../../../hook/useTitle"
import Pagination from '../../../components/Pagination'

export default function LabRentalHistory() {
  const { isAuth } = useContext(AuthContext)
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [pageArray, setPageArray] = useState([])
  const lab = useSelector(state => state.labControl.lab)
  useTitle(isAuth ? '랩실 대여 통계' : '랩실 대여 이력')

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
          <LabStatistics
            page={page}
            setPageArray={setPageArray}
          />
        </S.RentalWrap>
        {pageArray.length ?
          <Pagination
            page={page}
            setPage={setPage}
            pageArray={pageArray}
          /> : <></>
        }
      </>
      :
      <>
        <S.Title>내 대여 정보</S.Title>
        <S.RentalWrap>
          <h2>랩실 대여</h2>
          <UserState />
          <h2>랩실 대여 이력</h2>
          <UserHist />
        </S.RentalWrap>
      </>
  );
}
