import * as S from "./style"
import iconExcel from "../../assets/icon-excel.svg";
import ItemResHistTbl from "./ItemResHistTbl";

// 품목 예약/사용 이력 컴포넌트
export default function ItemReserveHist() {
  const 가짜품목대여이력데이터 = [
    {
      returnStatus: '정상 반납',
      pickupDate: '23년 3월 11일',
      returnDate: '23년 3월 12일',
      renter: '박다은',
      note: '',
    },
    {
      returnStatus: '정상 반납',
      pickupDate: '23년 3월 9일',
      returnDate: '23년 3월 10일',
      renter: '이영현',
      note: '',
    },
    {
      returnStatus: '불량 반납',
      pickupDate: '23년 3월 1일',
      returnDate: '23년 3월 2일',
      renter: '홍길동',
      note: '렌즈 손상',
    },
    {
      returnStatus: '정상 반납',
      pickupDate: '23년 2월 14일',
      returnDate: '23년 2월 15일',
      renter: '김효리',
      note: '',
    },
  ]
  return (
    <S.Div>
      <div>달력 선택</div> <span> ~ </span> <div>달력 선택</div>
      <S.button onClick={() => { }}><S.img src={iconExcel} /></S.button>
      <ItemResHistTbl data={가짜품목대여이력데이터} />
    </S.Div>
  )
}