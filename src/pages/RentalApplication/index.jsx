import * as S from "./style";
import Application from "../../components/Application";
import Button from "../../modules/Button"
import { useNavigate } from "react-router-dom"

export default function RentalApplication() {
  const navigate = useNavigate()

  return (
    <>
      <Application />
      <S.MainBtnWrap>
        <Button onClick={() => navigate('/equipment/inventory/success')} className="main" text="대여 완료" padding="16px 36px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
        <Button onClick={() => navigate('/equipment/inventory')} className="sub" text="뒤로 가기" padding="16px 36px" borderRadius="10px" fontSize="15px" />
      </S.MainBtnWrap>
    </>
  )
}