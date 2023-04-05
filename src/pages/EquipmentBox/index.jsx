import * as S from "./style"
import { SubTitle } from "../EquipmentDetail/style"
import Button from "../../modules/Button"
import { category } from "../../data/category"
import { useNavigate } from "react-router-dom"

import EquipCartList from "../../components/EquipCartList"

export default function EquipmentBox() {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.SimpleDesc>
        <span>담은 기자재</span>
        <span>대여하기</span>
        <span>대여 완료</span>
      </S.SimpleDesc>
      <S.Div>
        <SubTitle>담은 기자재</SubTitle>
        <Button text='전체 삭제' className='sub shadow' padding='7px 10px' borderRadius='50px' />
      </S.Div>
      <EquipCartList />
      <S.MainBtnWrap>
        <Button onClick={() => navigate('/equipment/inventory/application')} className="main" text="대여하기" padding="16px 36px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0" />
        <Button onClick={() => navigate('/equipment')} className="sub" text="목록보기" padding="16px 36px" borderRadius="10px" fontSize="15px" />
      </S.MainBtnWrap>
    </S.Wrapper>
  )
}
