import * as S from "./style";
import { useNavigate } from "react-router-dom";
import ItemListComp from "./ItemListComp";
import iconPlus from "../../assets/icon-plus-mono.svg";
import { useState, useEffect } from "react";

export default function ItemListWrap({ item, isEdit, isAdd, data, setData }) {
  const navigate = useNavigate();
  const [length, setLength] = useState(item?.length || 1);
  const [preventAdd, setPreventAdd] = useState(!!item);

  useEffect(() => {
    if (item) {
      setPreventAdd(!!item);
      setData(item);
      setLength(item.length);
    }
  }, [item]);

  const addItem = () => {
    setLength(length + 1);
    setPreventAdd(false);
  };

  const delItem = (index) => {
    if (data.length > 1) {
      const newArr = data.filter((_, i) => i !== index);
      setData(newArr);
      setPreventAdd(true);
      setLength(length - 1);
    } else {
      alert("품목은 1개 이상이어야 합나디.");
    }
  };

  return (
    <>
      <S.Div>
        {
          <S.ItemUl>
            {Array(length)
              .fill()
              .map((_, i) =>
                length && data && data[i] ? (
                  <S.ItemLi
                    key={i}
                    onClick={() =>
                      data[i]?.propertyNumber && !isEdit && !isAdd
                        ? navigate(`/equipment/item`, {
                            state: {
                              id: data[i].id,
                              equipmentId: data[i].equipmentId,
                              propertyNum: data[i].propertyNumber,
                            },
                          })
                        : null
                    }
                  >
                    <ItemListComp
                      num={data[i].propertyNumber}
                      index={i}
                      setPreventAdd={setPreventAdd}
                      preventAdd={preventAdd}
                      isEdit={isEdit}
                      isAdd={isAdd}
                      delItem={delItem}
                      setData={setData}
                      data={data}
                    />
                  </S.ItemLi>
                ) : (
                  <S.ItemLi key={i}>
                    <ItemListComp
                      index={i}
                      preventAdd={preventAdd}
                      setPreventAdd={setPreventAdd}
                      setDat
                      isEdit={isEdit}
                      isAdd={isAdd}
                      delItem={delItem}
                      setData={setData}
                      data={data}
                    />
                  </S.ItemLi>
                )
              )}
            {isAdd || isEdit ? (
              <S.ItemLi>
                <S.AddBtn disabled={!preventAdd} onClick={addItem}>
                  <S.PlusImg src={iconPlus} />
                  <p>New</p>
                </S.AddBtn>
              </S.ItemLi>
            ) : (
              <></>
            )}
          </S.ItemUl>
        }
      </S.Div>
    </>
  );
}
