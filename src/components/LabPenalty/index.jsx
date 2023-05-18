import dayjs from "dayjs"
import Button from "../../modules/Button"
import * as S from "./style"

const mock = [
  {
    id: 1,
    state: true,
    usingDate: '2023-05-19',
    returnDate: '2023-05-20',
    name: '박다은',
  },
  {
    id: 2,
    state: false,
    usingDate: '2023-05-20',
    returnDate: '2023-05-21',
    name: '이영현',
  },
  {
    id: 3,
    state: true,
    usingDate: '2023-05-21',
    returnDate: '2023-05-22',
    name: '김효리',
  }
]

export default function LabPenalty() {
  return (
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
          mock.map(list => 
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
  )
}
