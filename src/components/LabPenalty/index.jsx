import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getSpecificDateLabRental, modifyLabPenaltyStatus } from "../../api/api"
import Button from "../../modules/Button"
import * as S from "./style"

export default function LabPenalty() {
  const selectDate = useSelector(state => state.labControl.date)
  const [rentalList, setRentalList] = useState([])
  const [sendData, setSendData] = useState([])

  const handleSetPenaltyStatus = (e, id) => {
    const newArr = sendData
    const existingItem = newArr.find(item => item.reservationId === id);

    if (existingItem) {
      existingItem.rentalSpecStatus = e.target.value;
    } else {
      newArr.push({ rentalSpecStatus: e.target.value, reservationId: id });
    }

    setSendData(newArr)
  }

  const handleModifyLabPenalty = async () => {
    const item = rentalList.map(({ reservationId, reason }) => ({ reservationId, rentalSpecStatus: reason }))

    const filteredArr = sendData.filter(item2 => {
      return !item.some(item1 =>
        item1.rentalSpecStatus === item2.rentalSpecStatus &&
        item1.reservationId === item2.reservationId
      );
    });

    const res = await modifyLabPenaltyStatus(JSON.stringify({ reservations: filteredArr }))
    res === 204 && alert('페널티 상태가 저장되었습니다.')
    handleGetPenaltyList()
  }

  const handleGetPenaltyList = async () => {
    const res = await getSpecificDateLabRental(selectDate)

    setRentalList(res.reservations);
  }

  useEffect(() => {
    handleGetPenaltyList()
    setSendData([])
  }, [selectDate])

  return (
    rentalList.length ?
      <>
        <S.ListUl>
          <S.ListLi>
            <p>상태</p>
            <p>사용일</p>
            <p>퇴실일</p>
            <p>대여자</p>
            <p>사유</p>
          </S.ListLi>
          {
            rentalList.map(list =>
              <S.ListLi key={list.reservationId}>
                <p className={list.status.includes('정상') ? '' : 'faulty'}>{list.status}</p>
                <p>{dayjs(list.startDate).format('YY년 MM월 DD일')}</p>
                <p>{dayjs(list.endDate).format('YY년 MM월 DD일')}</p>
                <p>{list.renterName}</p>
                <S.Select name="" id="" defaultValue={list.reason} onChange={e => handleSetPenaltyStatus(e, list.reservationId)}>
                  <option value="RETURNED">정상</option>
                  <option value="LOST">분실</option>
                  <option value="BROKEN">고장</option>
                  <option value="OVERDUE_RENTED">연체</option>
                </S.Select>
              </S.ListLi>
            )
          }
        </S.ListUl>
        <Button text='저장' className='main' padding='7px 14px' borderRadius='5px' margin='10px 0' float='right' onClick={handleModifyLabPenalty} />
        <div style={{"clear": "both"}}></div>
      </>
      : <S.InfoDesc>조회한 일자의 대여 내역이 없습니다.</S.InfoDesc>
  )
}
