import { useNavigate } from "react-router-dom";
import Image from "../../../modules/Image";
import { category } from "../../../data/category";
import * as S from "./style";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductAmountFromDate } from "../../../api/api";

export default function GalType({ item }) {
  const navigate = useNavigate();

  const singleDate = useSelector(state => state.datePicker.singularDate)
  const [remainAmount, setRemainAmount] = useState(item.rentalQuantity.remainingQuantity)
  
  useEffect(() => {
    async function handleGetProductAmount() {
      const res = await getProductAmountFromDate(item.id, singleDate, singleDate)
      res.remainQuantities && setRemainAmount(res.remainQuantities[0].remainQuantity);
    }
    handleGetProductAmount();
  }, [singleDate]);

  return (
    <S.GalLi key={item.id} onClick={() => navigate(`/equipment/${item.id}`)}>
      <S.Count>
        {remainAmount} / {item.rentalQuantity.totalQuantity}대
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
}
