import * as S from "./style";
import Application from "../../../components/Application";
import Button from "../../../modules/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { postLabRental } from "../../../api/api";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useTitle } from "../../../hook/useTitle";

export default function LabRentalApplication() {
  const navigate = useNavigate();
  const dataRef = useRef([]);
  const hanul = useSelector(state => state.labControl.lab)
  const selectDate = useSelector(state => state.labControl.date)
  useTitle('랩실 대여')

  const handlePostReservation = async () => {
    if (dataRef.current.check && dataRef.current.purpose.value.length > 10) {
      const enddate = dayjs(selectDate).day() === 4 ? dayjs(selectDate).add(4, 'days').format('YYYY-MM-DD') : selectDate
      // const date = '2023-05-23'
      // const date2 = '2023-05-24'

      const data = {
        "startDate" : selectDate.split('-').map(i => ~~i),
        "endDate" : enddate.split('-').map(i => ~~i),
        // "startDate" : date.split('-').map(i => ~~i),
        // "endDate" : date2.split('-').map(i => ~~i),
        "labRoomName" : hanul ? "hanul" : "hwado" ,
        "renterName" : dataRef.current.name.innerHTML,
        "renterPhoneNumber" : dataRef.current.pNumber.value,
        "renterEmail" : `${dataRef.current.id.value}@${dataRef.current.address.value}`,
        "rentalPurpose" : dataRef.current.purpose.value,
        "renterCount" : ~~dataRef.current.renterCount.value,
      }

      const response = await postLabRental(JSON.stringify(data))

      response === 201 && navigate("/lab/success");
    }
  };

  return (
    <>
      <Application ref={dataRef} isLab={true} />
      <S.MainBtnWrap>
        <Button
          onClick={handlePostReservation}
          className="main"
          text="대여 완료"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
          margin="0 13px 0 0"
        />
        <Button
          onClick={() => navigate("/lab/status")}
          className="sub"
          text="뒤로 가기"
          padding="16px 36px"
          borderRadius="10px"
          fontSize="15px"
        />
      </S.MainBtnWrap>
    </>
  );
}
