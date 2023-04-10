import * as S from "./style";
import iconExclamation from "../../../assets/icon-exclamation-circle.svg";
import Input from "../../../modules/Input";
import { TextareaStyle } from "../../../modules/Textarea/style";
import useInput from "../../../hook/useInput";
import { useEffect, useState } from "react";

export default function ApplicationForm() {
  const [visible, setVisible] = useState(true)
  const purposeInp = useInput('')

  useEffect(() => {
    purposeInp.value.length > 10 ? setVisible(false) : setVisible(true)
  }, [purposeInp])

  return (
    <>
      <S.FormWrap>
        <S.Info>
          <S.LiWrap>
            <S.FormLi>이름</S.FormLi>
            <S.P>이영현</S.P>
          </S.LiWrap>
          <S.LiWrap>
            <S.FormLi>연락처</S.FormLi>
            <Input className='rentalUser' type="tel" maxLen="13"/>
          </S.LiWrap>
          <S.LiWrap>
            <S.FormLi>이메일</S.FormLi>
            <Input className='rentalUser' maxLen="30"/>
            <span>@</span>
            <Input className='rentalUser' maxLen="30"/>
          </S.LiWrap>
        </S.Info>
        <S.Purpose>
          <S.FormLi>대여 목적</S.FormLi>
          <S.TextareaWrap>
            <TextareaStyle {...purposeInp} placeholder="최소 10자 이상 입력하세요." rows="4"></TextareaStyle>
            {
              visible ?
              <S.Exclam><img src={iconExclamation} alt=''/><span>구체적으로 작성해주세요.</span></S.Exclam> : <></>
            }
          </S.TextareaWrap>
        </S.Purpose>
      </S.FormWrap>
    </>
  )
}