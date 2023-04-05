import * as S from "./style";
import iconExclamation from "../../../assets/icon-exclamation-circle.svg";
import iconCheckOff from "../../../assets/icon-check-gray.svg";
import iconCheckOn from "../../../assets/icon-check-navy.svg";
import { useState } from "react";

export default function ToS() {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  return (
    <>
      <S.ToSWrap>
        <S.ToSText>안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
        <S.ToSText>안녕아년 이용약관</S.ToSText>
      </S.ToSWrap>
      <S.AgreeWrap>
        <span>확인하였으며 동의합니다.</span>
        <S.Check type="checkbox" id="AgreeCheck" onChange={handleCheckboxChange} />
        {/* <S.Label for="AgreeCheck" off={iconCheckOff} on={iconCheckOn}>이용약관 동의 체크</S.Label> */}
      </S.AgreeWrap>
      <div style={{ clear: "both" }}></div>
      {!isChecked ?
        <S.Exclam><img src={iconExclamation} /><span>필수 사항입니다.</span></S.Exclam>
        : <S.Empty></S.Empty>
      }
      <div style={{ clear: "both" }}></div>
    </>
  )
}