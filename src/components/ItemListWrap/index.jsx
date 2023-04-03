import * as S from "./style";
import { useNavigate } from "react-router-dom"
import ItemList from "./ItemList";
import iconPlus from "../../assets/icon-plus-mono.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function ItemListWrap({ item, isEdit, isAdd }) {
  const navigate = useNavigate()
  const [data, setData] = useState(item)
  const [idx, setIdx] = useState(item[0].id)

  // console.log(data, data[0], idx)

  useEffect(() => {
    setData(item)
  }, [item])

  useEffect(() => {
    setIdx(item.at(-1).id)
  }, [item])

  const addItem = () => {
    setData([...data].concat([{ id: idx + 1, propertyNumber: null }]))
    setIdx(idx + 1)
  }

  const delItem = (id) => {
    let copy = [...data]
    if (copy.length === id) {
      copy.pop()
    }
    else {
      copy.splice(id - 1, 1)
      if (copy[id - 1].propertyNumber) {
      }
      else {
        for (let i = id - 1; i < copy.length; i++)
          copy[i].id--
      }
    }
    setIdx(idx - 1)
    setData(copy)
  }

  return (
    <>
      <S.Div>
        {
          data ?
            <S.ItemUl>
              {data.map(i => {
                return (
                  <S.ItemLi key={i.id} onClick={() => i.propertyNumber && !isEdit ? navigate(`/equipment/item`, { state: { id: i.id } }) : null}>
                    <ItemList id={i.id - data[0].id + 1} num={i.propertyNumber} isEdit={isEdit} isAdd={isAdd} delItem={delItem} />
                  </S.ItemLi>
                )
              })}
              {isAdd || isEdit ?
                <S.ItemLi>
                  <S.AddBtn onClick={addItem}>
                    <S.PlusImg src={iconPlus} />
                    <S.P>New</S.P>
                  </S.AddBtn>
                </S.ItemLi>
                : <></>
              }
            </S.ItemUl>
            :
            <div>loading...</div>
        }
      </S.Div>
    </>
  )
}