import Image from "../../../modules/Image"
import * as S from "./style"


export default function GalType({data}) {
  return (
    <S.GalUl>
      {
        data.map(item => {
          return (
            <S.GalLi key={item.id}>
              <S.Count>{item.rentalQuantity.remainingQuantity} / {item.rentalQuantity.totalQuantity}대</S.Count>
              <Image width="100%" height="170px" borderRadius="10px 10px 0 0" src={item.imgUrl} alt="" />
              <S.Category>{item.category}</S.Category>
              <S.Title>{item.modelName}</S.Title>
            </S.GalLi>
          )
        })
      }
    </S.GalUl>
  )
}
