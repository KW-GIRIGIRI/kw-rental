import { useNavigate } from "react-router-dom"
import Image from "../../../modules/Image"
import * as S from "./style"

export default function ListType({ data }) {
  const navigate = useNavigate()
  return (
    <S.ListUl>
      <S.ListLi>
        <p>사진</p>
        <p>기자재명</p>
        <p>대여 가능 / 총 개수</p>
      </S.ListLi>
      {
        data.map((item) => {
          return (
            <S.ListLi key={item.id} onClick={() => navigate(`/equipment/${item.id}`)}>
                <Image width="72px" height="72px" borderRadius="10px" src={item.imgUrl} alt={`${item.modelName} 이미지`} />
                <S.ItemWrap>
                  <p>{item.category}</p>
                  <p>{item.modelName}</p>
                </S.ItemWrap>
                <p>{item.rentalQuantity.remainingQuantity} / {item.rentalQuantity.totalQuantity}</p>
            </S.ListLi>
          )
        })
      }
    </S.ListUl>
  )
}
