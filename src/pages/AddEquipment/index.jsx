import * as S from "./style"
import { Wrapper, DetailWrapper, SubTitle } from "../EquipmentDetail/style"
import Button from "../../modules/Button"
import IconFileImg from "../../assets/icon-fileImg.svg"
import DetailDescInput from "../../components/DetailDesc/DetailDescInput"
import Textarea from "../../modules/Textarea"

export default function AddEquipment() {

  return (
    <Wrapper>
      <S.Span></S.Span>
      <DetailWrapper>
        <S.FileLabel>
          <img src={IconFileImg} alt="" />
          <p>사진 추가</p>
          <input type="file" />
        </S.FileLabel>
        <DetailDescInput />
      </DetailWrapper>
      <SubTitle>안내사항</SubTitle>
      <Textarea maxLen="500" className="detailDesc" placeholder="안내사항을 작성해주세요." name="" id="" rows="6" count="500" />
      <SubTitle>품목관리</SubTitle>
      {/* 품목관리 컴포넌트 */}
      <S.BtnWrap>
        <Button className="main" text="기자재 추가" padding="15px 23px" borderRadius="10px" fontSize="15px" margin="0 13px 0 0"/>
        <Button className="sub" text="취소하기" padding="15px 31px" borderRadius="10px" fontSize="15px"/>
      </S.BtnWrap>
    </Wrapper>
  )
}
