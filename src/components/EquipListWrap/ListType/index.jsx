import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Context";
import Image from "../../../modules/Image";
import { category } from "../../../data/category";
import * as S from "./style";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getProductAmountFromDate } from "../../../api/api";

export default function ListType({ item }) {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const singleDate = useSelector(state => state.datePicker.singularDate)
  const [remainAmount, setRemainAmount] = useState(item.rentalQuantity.remainingQuantity)
  
  useEffect(() => {
  async function handleGetProductAmount() {
    const res = await getProductAmountFromDate(item.id, singleDate, singleDate)
    setRemainAmount(res.remainQuantities[0].remainQuantity);
  }
  handleGetProductAmount();
}, [singleDate]);

  return (
    <S.ListLi key={item.id} onClick={() => navigate(`/equipment/${item.id}`)}>
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
          : `${remainAmount} / ${item.rentalQuantity.totalQuantity}`}
      </p>
    </S.ListLi>
  );
}
