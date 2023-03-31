import * as S from "./style"
import { product } from "../AddEquipment"
import { BtnWrap } from "../AddEquipment/style"
import Button from "../../modules/Button"
import { useNavigate } from "react-router-dom"
import ItemReserveHist from "../../components/ItemReserveHist"

const itemList = [1, 2, 3]

export default function EquipmentItemDetail() {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.NavDiv>
        <S.SimpleDesc>
          <span>기자재 조회</span>
          <span>{product.category}</span>
          <span>{product.modelName}</span>
          <span>품목 1</span>
        </S.SimpleDesc>
        <div>
          <button>삭제</button>
        </div>
      </S.NavDiv>
      <S.SubTitle>품목 현황</S.SubTitle>
      <S.SelectItem name="" id="">
        {
          itemList.map(item => <option value="">품목 {item}</option>)
        }
      </S.SelectItem>
      <div>
        캘린더
      </div>
      <S.SubTitle>자산번호 관리</S.SubTitle>
      <div>
        자산번호 수정
      </div>
      <S.SubTitle>품목 예약/사용 이력</S.SubTitle>
      <ItemReserveHist />
      <BtnWrap>
        <Button onClick={() => navigate(-1)} className="sub" text="뒤로 가기" margin="60px 0 30px" padding="15px 23px" borderRadius="10px" fontSize="15px" />
      </BtnWrap>
    </S.Wrapper>
  )
}
