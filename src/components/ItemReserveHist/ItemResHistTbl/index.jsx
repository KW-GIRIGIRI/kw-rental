import * as S from "./style";

export default function ItemResHistTbl({ data }) {
  return (
    <S.HistUl>
      <S.HistLi>
        <p>상태</p>
        <p>수령일</p>
        <p>반납일</p>
        <p>대여자</p>
        <p>비고</p>
      </S.HistLi>
      {data.map((i) => {
        return (
          <S.HistLi key={i.id}>
            <p>{i.returnStatus}</p>
            <p>{i.pickupDate}</p>
            <p>{i.returnDate}</p>
            <p>{i.renter}</p>
            <p>{i.note || "-"}</p>
          </S.HistLi>
        );
      })}
    </S.HistUl>
  );
}
