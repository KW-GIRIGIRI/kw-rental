import iconCheck from "../../assets/icon-check-fill.svg"
import Button from "../../modules/Button"
import { Wrapper } from "../EquipmentBox/style"
import * as S from "./style"

export default function RentalSuccess() {
  return (
    <Wrapper>
      <S.SimpleDesc>
        <span>담은 기자재</span>
        <span>대여하기</span>
        <span>대여 완료</span>
      </S.SimpleDesc>
      <S.Div>
        <img src={iconCheck} alt="" />
        <p>대여 완료</p>
        <p>기자재 대여가 완료되었습니다.</p>
        <div>
          <Button text='마이페이지로 이동' className='main' borderRadius='10px' padding='16px 16px' />
          <Button text='목록 보기' className='sub' borderRadius='10px' padding='16px 37px' />
        </div>
      </S.Div>
    </Wrapper>
  )
}
