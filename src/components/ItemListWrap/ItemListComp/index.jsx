import * as S from "./style";
import { useState } from "react";
import iconMinus from "../../../assets/icon-minus-circle-mono.svg";

export default function ItemListComp({
  index,
  num,
  isEdit,
  isAdd,
  delItem,
  data,
  setData,
  setPreventAdd,
}) {
  const [text, setText] = useState("");
  const [finish, setFinish] = useState(!!num);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !!e.target.value) {
      setPreventAdd(true);
      setFinish(true);
      setData(
        data.concat({
          id: null,
          propertyNumber: e.target.value,
        })
      );
    }
  };

  return (
    <S.ItemWrap className={num && !isEdit ? "hover" : null}>
      <S.ItemId>품목</S.ItemId>
      <S.InputId
        onChange={handleChange}
        value={num || text}
        onKeyDown={handleKeyDown}
        disabled={(!isEdit && !isAdd) || num || finish}
        placeholder="재물번호를 입력하세요."
        type="number"
      />
      {isEdit || isAdd ? (
        <S.DelBtn
          onClick={() => {
            delItem(index);
          }}
        >
          <S.MinusImg src={iconMinus} />
        </S.DelBtn>
      ) : (
        <></>
      )}
    </S.ItemWrap>
  );
}
