import * as S from "./style"
import Button from "../../../modules/Button"
import { category } from "../../../data/category"
import { useNavigate } from "react-router-dom"
import EquipCartList from "../../../components/EquipCartList"

// 다른 페이지 Cart 폴더 내부로 이동 

export default function EquipmentBox() {
  const navigate = useNavigate()
  return (
    <>
      <S.Div>
        <Button text='전체 삭제' className='sub shadow' padding='7px 10px' borderRadius='50px' />
      </S.Div>
      <EquipCartList />
      <S.MainBtnWrap>
        <Button onClick={() => navigate('/equipment/inventory/application')} className="main" text="대여하기" padding="16px 36px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
        <Button onClick={() => navigate('/equipment')} className="sub" text="목록보기" padding="16px 36px" borderRadius="10px" fontSize="15px" />
      </S.MainBtnWrap>
    </>
  )
}
