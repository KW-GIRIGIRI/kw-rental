import * as S from "./style";
import ItemManager from "./ItemManager";
import { useState } from "react";
import ItemList from "../ItemListWrap/ItemList";
import iconPlus from "../../assets/icon-plus-mono.svg";
import iconMinus from "../../assets/icon-minus-circle-mono.svg";

export default function ItemManagerWrap({ item, isEdit }) {
  const existingData = [
    {
      id: 1,
      자산번호: null
    },
  ]
  const [data, setData] = useState(existingData);
  const [idx, setIdx] = useState(data.at(-1).id);

  const addItem = () => {
    setIdx(data.at(-1).id + 1);
    const item = {
      id: idx + 1,
    }

    setData(data.concat(item));
  }

  const delItem = () => {
    if (data.length > 1) {
      setData(data.splice(0, data.length - 1));
      setIdx(data.at(-1).id - 1);
    }
  }

  return (
    <>
      {isEdit ? (
        <S.Div>
          {item ? (
            <S.ItemUl>
              {item.items.map((i) => (
                <ItemList id={i.id - item.items[0].id + 1} num={i.propertyNumber} isEdit={isEdit}>
                  <ItemManager delItem={delItem} />
                  <S.DelBtn onClick={() => delItem(i.id)}>
                    <S.MinusImg src={iconMinus} />
                  </S.DelBtn>
                </ItemList>
              ))}
              <S.ItemLi>
                <S.AddBtn onClick={addItem}>
                  <S.PlusImg src={iconPlus} />
                  <S.P>New</S.P>
                </S.AddBtn>
              </S.ItemLi>
            </S.ItemUl>
          ) : (
            <div>Loading...</div>
          )}
        </S.Div>
      ) : (
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
      )}
    </>
  )
}