import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getSpecificDateLabRental } from "../../api/api"
import Button from "../../modules/Button"
import * as S from "./style"

export default function LabPenalty() {
  const selectDate = useSelector(state => state.labControl.date)
  const [rentalList, setRentalList] = useState(null)

  const handleGetPenaltyList = async () => {
    const res = await getSpecificDateLabRental(selectDate)
    res.reservations.length && setRentalList(res.reservations);
  }

  useEffect(() => {
    handleGetPenaltyList()
  }, [selectDate])


  return (
    rentalList ?
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
              <S.ListLi key={list.id}>
                <p className={list.state ? '' :'faulty'}>{list.state ? '정상 반납' : '불량 반납'}</p>
                <p>{dayjs(list.usingDate).format('YY년 MM월 DD일')}</p>
                <p>{dayjs(list.returnDate).format('YY년 MM월 DD일')}</p>
                <p>{list.name}</p>
                <S.Select name="" id="">
                  <option value="">분실</option>
                  <option value="">고장</option>
                  <option value="">연체</option>
                </S.Select>
              </S.ListLi>
            )
          }
        </S.ListUl>
        <Button text='저장' className='main' padding='7px 14px' borderRadius='5px' margin='10px 0'float='right'/>
      </>
      : <S.InfoDesc>조회한 일자의 대여 내역이 없습니다.</S.InfoDesc>
  )
}
