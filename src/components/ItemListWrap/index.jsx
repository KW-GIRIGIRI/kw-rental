import * as S from "./style";
import ItemList from "./ItemList";

export default function ItemListWrap() {
  // API 연동 안 하고 임의로 만든 데이터
  const existingData = [
    {
      id: 1,
      num: 20230100030001
    },
    {
      id: 2,
      num: 20230100030002
    },
    {
      id: 3,
      num: 20230100030003
    },
    {
      id: 4,
      num: 20230100030004
    },
  ]

  return (
    <>
      <S.Div>
        <S.ItemUl>
          {existingData.map(i => {
            return (
              <S.ItemLi>
                <ItemList id={i.id} num={i.num} />
              </S.ItemLi>
            )
          })}
        </S.ItemUl>
      </S.Div>
    </>
  )
}