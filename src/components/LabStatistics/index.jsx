import { useSelector } from 'react-redux';
import * as S from "./style";
import EmptyData from '../EmptyData';

export default function LabStatistics() {
  const hanul = useSelector(state => state.labControl.lab)

  const data = [
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "불량 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "연체",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
    {
      상태: "정상 반납",
      사용일: "23년 05월 10일",
      퇴실일: "23년 05월 11일",
      대여자: "박다은",
      사유: "-",
    },
  ]

  return (
    data.length ?
      <>
        <S.Wrap>
          <S.HistHeader>
            <span>랩실</span>
            <span>대여 인원</span>
            <span>사용 인원</span>
            <span>불량반납</span>
          </S.HistHeader>
          <S.Content>
            <span>{hanul ? "한울관" : "화도관"}</span>
            <span>8</span>
            <span>24</span>
            <span>2</span>
          </S.Content>
        </S.Wrap>

        <S.ItemUl>
          <S.ItemHeader>
            <span>상태</span>
            <span>사용일</span>
            <span>퇴실일</span>
            <span>대여자</span>
            <span>사유</span>
          </S.ItemHeader>
          {data.map((item, idx) => (
            <S.ItemLi key={idx}>
              <span>{item.상태}</span>
              <span>{item.사용일}</span>
              <span>{item.퇴실일}</span>
              <span>{item.대여자}</span>
              <span>{item.사유}</span>
            </S.ItemLi>
          ))}
        </S.ItemUl>
      </>
      : <EmptyData content={["선택 일자에 해당하는 데이터가 없습니다."]} />
  )
}
