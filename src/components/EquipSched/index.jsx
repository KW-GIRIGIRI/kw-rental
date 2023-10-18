import * as S from "./style";
import Button from "../../modules/Button";
import { useEffect, useState } from "react";
import SchedList from "../SchedList";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncGetReceived,
  asyncGetReturned,
} from "../../store/reducer/authReceiveSlice";
import EmptyData from "../EmptyData";

export default function EquipSched() {
  const [receive, setReceive] = useState(true);
  const dispatch = useDispatch();
  const receiveList = useSelector(
    (state) => state.authReceive.receiveList.byId
  );
  const selectDate = useSelector((state) => state.datePicker.singularDate);

  useEffect(() => {
    if (selectDate) {
      receive
        ? dispatch(asyncGetReceived(selectDate))
        : dispatch(asyncGetReturned(selectDate));
    }
  }, [selectDate, receive]);

  return (
    <>
      <Button
        className={receive ? "main shadow" : "disable shadow"}
        text="수령 예정"
        padding="10px 21px"
        borderRadius="20px"
        fontSize="13px"
        onClick={() => setReceive(true)}
      />
      <Button
        className={receive ? "disable shadow" : "main shadow"}
        text="반납 예정"
        margin="0 0 0 10px"
        padding="10px 21px"
        borderRadius="20px"
        fontSize="13px"
        onClick={() => setReceive(false)}
      />

      {Object.keys(receiveList).length ? (
        <>
          <S.SchedTitle>{receive ? "수령 예정" : "반납 예정"}</S.SchedTitle>
          <S.SchedWrap>
            <S.Header>
              <span>대여자</span>
              <span>기자재</span>
              <span>개수</span>
              <span>자산번호</span>
            </S.Header>
            {Object.values(receiveList)?.map((user, index) => (
              <SchedList key={index} user={user} receive={receive} />
            ))}
          </S.SchedWrap>
        </>
      ) : (
        <EmptyData
          content={[
            "조회한 일자의",
            `${receive ? "수령" : "반납"} 예정 기자재가 없습니다.`,
          ]}
        />
      )}
    </>
  );
}
