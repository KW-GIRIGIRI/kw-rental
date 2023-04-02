import * as S from "./style";
import { useNavigate } from "react-router-dom"
import ItemList from "./ItemList";

export default function ItemListWrap(item) {
  const items = item.item.items
  const navigate = useNavigate()

  return (
    <>
      <S.Div>
        <S.ItemUl>
          {items.map(i => {
            return (
              <S.ItemLi key={i.id} onClick={() => navigate(`/equipment/item`, { state: { id: i.id } })}>
                <ItemList id={i.id - items[0].id + 1} num={i.propertyNumber} isEdit={false} />
              </S.ItemLi>
            )
          })}
        </S.ItemUl>
      </S.Div>
    </>
  )
}