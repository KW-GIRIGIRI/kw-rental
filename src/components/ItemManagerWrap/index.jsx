import * as S from "./style";
import ItemManager from "./ItemManager";
import { useState } from "react";
import iconPlus from "../../assets/icon-plus-mono.svg";
import iconMinus from "../../assets/icon-minus-circle-mono.svg";

export default function ItemManagerWrap() {
  // API 연동 안 하고 임의로 만든 데이터
  const existingData = [
    {
      id: 1,
      자산번호: null
    },
  ]
  const [data, setData] = useState(existingData);
  const [idx, setIdx] = useState(data.at(-1).id);
  // const [num, setNum] = useState(existingData.at(-1).자산번호);
  // const [input, setInput] = useState('');

  const addItem = () => {
    setIdx(data.at(-1).id + 1);
    const item = {
      id: idx + 1,
      // 자산번호: num + 1
    }

    setData(data.concat(item));
    // setNum(num + 1);
  }

  const delItem = () => {
    if (data.length > 1) {
      setData(data.splice(0, data.length - 1));
      setIdx(data.at(-1).id - 1);
    }
  }

  return (
    <>
      <S.Div>
        <S.ItemUl>
          {data.map(i => {
            return (
              <S.ItemLi key={i.id}>
                <ItemManager delItem={delItem} id={i.id} />
                <S.DelBtn onClick={() => { delItem(i.id) }}><S.MinusImg src={iconMinus} /></S.DelBtn>
              </S.ItemLi>
            )
          })}
          <S.ItemLi>
            <S.AddBtn onClick={addItem}><S.PlusImg src={iconPlus} /><S.P>New</S.P></S.AddBtn>
          </S.ItemLi>
        </S.ItemUl>
      </S.Div>

    </>
  )
}