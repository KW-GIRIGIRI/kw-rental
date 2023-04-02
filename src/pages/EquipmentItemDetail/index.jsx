import * as S from "./style"
import { BtnWrap } from "../AddEquipment/style"
import Button from "../../modules/Button"
import { useNavigate } from "react-router-dom"
import ItemReserveHist from "../../components/ItemReserveHist"

const itemList = [1, 2, 3]

// mock data
export const product = {
  category: 'camera',
  modelName: 'DSLR SONY 6600',
  maker: "SONY",
  components: '줌렌즈, 단렌즈 20mm, 충전기 포함',
  purpose: '동영상 촬영',
  rentalQuantity: {
    totalQuantity: 10
  },
  rentalPlace: '한울관 B119호',
  imgUrl : "https://img.danawa.com/prod_img/500000/023/522/img/15522023_1.jpg?shrink=500:500"
}

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
          itemList.map(item => <option key={item} value="">품목 {item}</option>)
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
