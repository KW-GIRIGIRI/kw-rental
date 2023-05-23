import * as S from "./style";
import Button from "../../modules/Button";
import { useEffect, useState } from "react";
import iconWarning from "../../assets/icon-exclamation-gray.svg";
import { useSelector } from "react-redux";
import LabSchedList from './LabSchedList';
import { getLabRentalList, getLabReturnList } from "../../api/api";

export default function LabSched() {
  const [receive, setReceive] = useState(true);
  const [rentalList, setRentalList] = useState([])
  const selectDate = useSelector((state) => state.datePicker.singularDate);

  const handleGetLabRentalList = async () => {
    const res = await getLabRentalList(selectDate)
    setRentalList(res.reservations);
  }

  const handleGetLabReturnedList = async () => {
    const res = await getLabReturnList(selectDate)
    setRentalList(res.reservations)
  }

  useEffect(() => {
    if (selectDate)
     receive ? handleGetLabRentalList() : handleGetLabReturnedList()
  }, [selectDate, receive])

  return (
    <>
      <Button
        className={receive ? "main shadow" : "disable shadow"}
        text="사용 예정"
        padding="10px 21px"
        borderRadius="20px"
        fontSize="13px"
        onClick={() => setReceive(true)}
      />
      <Button
        className={receive ? "disable shadow" : "main shadow"}
        text="퇴실 예정"
        margin="0 0 0 10px"
        padding="10px 21px"
        borderRadius="20px"
        fontSize="13px"
        onClick={() => setReceive(false)}
      />

      {rentalList.length ? (
        <>
          <S.SchedWrap>
            <S.Header>
              <span>랩실</span>
              <span>대여자</span>
              <span>인원</span>
              <span>연락처</span>
            </S.Header>
            {
              rentalList.map(lab => 
                <LabSchedList acceptTime={lab.acceptTime} key={lab.labRoomName} lab={lab.labRoomName} renterList={lab.specsWithMemberNumber} receive={receive} setReceive={setReceive} />
              ) 
            }
          </S.SchedWrap>
        </>
      ) : (
        <S.WarnWrap>
          <img src={iconWarning} alt="" />
          <p>
            조회한 일자의 <br />
            {receive ? "수령" : "반납"} 예정이 없습니다.
          </p>
        </S.WarnWrap>
      )}
    </>
  );
}
