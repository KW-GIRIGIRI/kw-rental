import Image from "../../../modules/Image"
import * as S from "./style"

export default function ListType({ data }) {
  console.log(data)
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
            <S.ListLi key={item.id}>
              <Image width="80px" height="80px" borderRadius="10px" src={item.imgUrl} alt="" />
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
