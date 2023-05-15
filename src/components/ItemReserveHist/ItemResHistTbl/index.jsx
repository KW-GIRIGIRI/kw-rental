import * as S from "./style"

// 품목 예약/사용 이력 테이블 컴포넌트
export default function ItemResHistTbl({ data }) {
  return (
    <S.HistTable>
      <thead>
        <tr>
          <th scope="col">상태</th>
          <th scope="col">수령일</th>
          <th scope="col">반납일</th>
          <th scope="col">대여자</th>
          <th scope="col">비고</th>
        </tr>
      </thead>
      <tbody>
        {data.map(i => {
          return (
            <tr key={i.id}>
              <td>{i.returnStatus}</td>
              <td>{i.pickupDate}</td>
              <td>{i.returnDate}</td>
              <td>{i.renter}</td>
              <td>{i.note}</td>
            </tr>
          )
        })}
      </tbody>
    </S.HistTable>
  )
}