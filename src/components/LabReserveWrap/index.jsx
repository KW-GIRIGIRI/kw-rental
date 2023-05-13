import dayjs from "dayjs"
import Button from "../../modules/Button"
import * as S from "./style"

export default function LabReserveWrap() {
  const hanul = false;

  return (
    <S.Div>
      <S.DateP>{dayjs().format('YY년 M월 D일(dd)')}</S.DateP>
      {
        hanul ?
        <S.ReserveUl>
          <S.ReserveLi>
            <p>현재 대여 인원수</p>
            <p>대여 가능 인원수</p>
          </S.ReserveLi>
          <S.ReserveLi>
            <p>2</p>
            <p>16</p>
            <Button text='대여신청' className='main' padding='6px 0' width='65px' borderRadius='50px' fontSize='12px' fontWeight='500' />
          </S.ReserveLi>
        </S.ReserveUl>
        : 
        <Button text='대여신청' className='main' padding='6px 0' width='65px' borderRadius='50px' fontSize='12px' fontWeight='500'/>
      }
    </S.Div>
  )
}
