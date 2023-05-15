import { useNavigate } from "react-router-dom";
import Image from "../../../modules/Image";
import { category } from "../../../data/category";
import * as S from "./style";

export default function GalType({ data }) {
  const navigate = useNavigate();

  return (
    <S.GalUl>
      {data.map((item) => {
        return (
          <S.GalLi key={item.id} onClick={() => navigate(`/equipment/${item.id}`)}>
            <S.Count>
              {item.rentalQuantity.remainingQuantity} /{" "}
              {item.rentalQuantity.totalQuantity}대
            </S.Count>
            <Image
              width="100%"
              height="148px"
              borderRadius="10px 10px 0 0"
              src={item.imgUrl}
              alt={`${item.modelName} 이미지`}
            />
            <S.Category>
              {category.map(
                (value) => value.value === item.category && value.label
              )}
            </S.Category>
            <S.Title>{item.modelName}</S.Title>
          </S.GalLi>
        );
      })}
    </S.GalUl>
  );
}
