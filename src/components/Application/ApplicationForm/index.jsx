import * as S from "./style";
import iconExclamation from "../../../assets/icon-exclamation-circle.svg";

export default function ApplicationForm() {
  return (
    <>
      <S.FormWrap>
        <S.Info>
          <S.LiWrap>
            <S.FormLi>이름</S.FormLi>
            <S.P>이영현</S.P></S.LiWrap>
          <S.LiWrap>
            <S.FormLi>연락처</S.FormLi>
            <S.Input type="tel"></S.Input>
          </S.LiWrap>
          <S.LiWrap>
            <S.FormLi>이메일</S.FormLi>
            <S.Input type="text"></S.Input>
            <span>@</span>
            <S.Input type="text"></S.Input>
          </S.LiWrap>
        </S.Info>
        <S.Purpose>
          <S.FormLi>대여 목적</S.FormLi>
          <S.TextareaWrap>
            <S.Textarea placeholder="최소 10자 이상 입력하세요."></S.Textarea>
            <S.Exclam><img src={iconExclamation} /><span>구체적으로 작성해주세요.</span></S.Exclam>
          </S.TextareaWrap>
        </S.Purpose>
      </S.FormWrap>
    </>
  )
}