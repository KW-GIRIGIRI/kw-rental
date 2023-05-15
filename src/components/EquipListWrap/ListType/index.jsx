import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import Image from "../../../modules/Image";
import { category } from "../../../data/category";
import * as S from "./style";

export default function ListType({ data }) {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  return (
    <S.ListUl>
      <S.ListLi>
        <p>사진</p>
        <p>기자재명</p>
        <p>{isAuth ? "총 개수" : "대여 가능 / 총 개수"}</p>
      </S.ListLi>
      {data.map((item) => {
        return (
          <S.ListLi key={item.id} onClick={() => navigate(`/${item.id}`)}>
            <Image
              width="72px"
              height="72px"
              borderRadius="10px"
              src={item.imgUrl}
              alt={`${item.modelName} 이미지`}
            />
            <S.ItemWrap>
              <p>
                {category.map(
                  (value) => value.value === item.category && value.label
                )}
              </p>
              <p>{item.modelName}</p>
            </S.ItemWrap>
            <p>
              {isAuth
                ? item.rentalQuantity.totalQuantity
                : `${item.rentalQuantity.remainingQuantity} / ${item.rentalQuantity.totalQuantity}`}
            </p>
          </S.ListLi>
        );
      })}
    </S.ListUl>
  );
}
