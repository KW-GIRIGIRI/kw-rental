import * as S from "./style";
import Application from "../../../components/Application";
import Button from "../../../modules/Button"
import { useNavigate } from "react-router-dom"
import { postReservation } from "../../../api/api";
import { useRef } from "react";

export default function RentalApplication() {
  const navigate = useNavigate()
  const dataRef = useRef([])

  const handlePostReservation = async () => {
    const data = {
      "renterName" : dataRef.current.name.innerHTML,
      "renterPhoneNumber" : dataRef.current.pNumber.value,
      "renterEmail" :`${dataRef.current.id.value}@${dataRef.current.address.value}`,
      "rentalPurpose" : dataRef.current.purpose.value
    }

    const response = await postReservation(JSON.stringify(data))
    response === 201 && navigate('/equipment/inventory/success')
  }


  return (
    <>
      <Application ref={dataRef} />
      <S.MainBtnWrap>
        <Button onClick={handlePostReservation} className="main" text="대여 완료" padding="16px 36px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
        <Button onClick={() => navigate('/equipment/inventory')} className="sub" text="뒤로 가기" padding="16px 36px" borderRadius="10px" fontSize="15px" />
      </S.MainBtnWrap>
    </>
  )
}