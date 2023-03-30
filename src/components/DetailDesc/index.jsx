import * as S from "./style";

export default function DetailDesc({product}) {
  return (
    <S.Div>
      <S.ProductSpan>{product.category}</S.ProductSpan>
      <S.ProductTitle>{product.modelName}</S.ProductTitle>
      <ol>
        <S.ProductLi>
          <p>제조사</p>
          <span>{product.maker}</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>구성품</p>
          <span>{product.components}</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>사용 목적</p>
          <span>{product.purpose}</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>총 개수</p>
          <span>{product.rentalQuantity.totalQuantity}대</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>대여장소</p>
          <span>{product.rentalPlace}</span>
        </S.ProductLi>
        <S.ProductLi>
          <p>최대 대여 가능일</p>
          <span>1일</span>
        </S.ProductLi>
      </ol>
    </S.Div>
  )
}
