import * as S from "./style";
import { useState } from "react";
import iconMinus from "../../../assets/icon-minus-circle-mono.svg";

export default function ItemList({ id, num, isEdit, isAdd, delItem }) {
  // console.log(id)
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <S.Div>
      <S.ItemWrap className={num && !isEdit ? "hover" : null}>
        <S.ItemId>품목 {num ? id : null}</S.ItemId>
        {num ?
          <S.ItemNum>{num}</S.ItemNum>
          :
          <S.InputId onChange={onChange} placeholder="재물번호를 입력하세요." />
        }
        {isEdit || isAdd ?
          <S.DelBtn onClick={() => { delItem(id) }}>
            <S.MinusImg src={iconMinus} />
          </S.DelBtn>
          : <></>
        }
      </S.ItemWrap>
    </S.Div>
  )
}
