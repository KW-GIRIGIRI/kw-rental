import * as S from "./style"
import Button from "../../modules/Button"
import { getReceivedRentalList, getReturnRentalList } from "../../api/api"
import { useEffect, useState } from "react"
import SchedList from "../SchedList"
import dayjs from "dayjs"
import iconWarning from '../../assets/icon-exclamation-gray.svg'
import { useDispatch } from "react-redux";
import { setReceiveList, setReserveLen } from "../../store/reducer/authReceive"


export default function EquipSched({date}) {
  const [receive, setReceive] = useState(true)
  const [rentList, setRentList] = useState([])
  const dispatch = useDispatch()

  const handleGetReceived = async (date) => {
    const res = await getReceivedRentalList(dayjs(date).format('YYYY-MM-DD'))
    dispatch(setReceiveList(res.reservations))
    dispatch(setReserveLen(res.reservations))
    setRentList(res.reservations)
  }

  const handleGetReturned = async (date) => {
    const res = await getReturnRentalList(dayjs(date).format('YYYY-MM-DD'))
    const newArr = res.overdueReservations.reservations.concat(res.reservationsByEndDate.reservations)
    dispatch(setReceiveList(newArr))
    dispatch(setReserveLen(newArr))
    setRentList(newArr)
  }

  useEffect(() => {
    receive ? handleGetReceived(date) : handleGetReturned(date)
  }, [date, receive])

  return (
    <>
      <Button className={receive ? 'main shadow' : 'disable shadow'} text="수령 예정" padding="10px 21px" borderRadius="20px" fontSize="13px" onClick={() => setReceive(true)}/>
      <Button className={receive ? 'disable shadow' : 'main shadow'} text="반납 예정" margin="0 0 0 10px" padding="10px 21px" borderRadius="20px" fontSize="13px" onClick={() => setReceive(false)}/>

      {
        rentList.length ?
          <>
            <S.SchedTitle>{receive ? '수령 예정' : '반납 예정'}</S.SchedTitle>
            <S.SchedWrap>
              <S.Header>
                <span>대여자</span>
                <span>기자재</span>
                <span>개수</span>
                <span>자산번호</span>
              </S.Header>
              <SchedList rentList={rentList} receive={receive} />
            </S.SchedWrap>
          </>
          :
          <S.WarnWrap>
            <img src={iconWarning} alt="" />
            <p>조회한 일자의 <br />{receive ? '수령' : '반납'} 예정 기자재가 없습니다.</p>
          </S.WarnWrap>
      }
    </>
  )
}