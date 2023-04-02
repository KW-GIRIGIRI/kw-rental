import * as S from "./style";
import ItemList from "./ItemList";

export default function ItemListWrap(item) {
  const items = item.item.items;

  return (
    <>
      <S.Div>
        <S.ItemUl>
          {items.map(i => {
            return (
              <S.ItemLi key={i.id}>
                <ItemList id={i.id - items[0].id + 1} num={i.propertyNumber} />
              </S.ItemLi>
            )
          })}
        </S.ItemUl>
      </S.Div>
    </>
  )
}